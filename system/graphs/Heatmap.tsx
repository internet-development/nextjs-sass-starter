import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Heatmap = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) return;

    if (props.data && d3Container && d3Container.current && width > 0) {
        const svg = d3.select(d3Container.current);
        svg.selectAll('*').remove();

        const margin = { top: 50, right: 20, bottom: 50, left: 50 };
        const height = 400 - margin.top - margin.bottom;
        const chartWidth = width - margin.left - margin.right;

        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleBand().range([0, chartWidth]).padding(0.01);
        const yScale = d3.scaleBand().range([height, 0]).padding(0.01);

        xScale.domain(props.data.map((d) => d.group));
        yScale.domain(props.data.map((d) => d.variable));

        g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

        g.append('g').call(d3.axisLeft(yScale));

        g.selectAll()
        .data(props.data, (d) => d.group + ':' + d.variable)
        .enter()
        .append('rect')
        .attr('x', (d) => xScale(d.group))
        .attr('y', (d) => yScale(d.variable))
        .attr('width', xScale.bandwidth())
        .attr('height', yScale.bandwidth())
        .style('fill', (d) => d.color);
    }
  };

  useEffect(() => {
    setContainerWidth(d3Container.current.clientWidth);
    const handleResize = () => {
      setContainerWidth(d3Container.current.clientWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    drawChart(containerWidth);
  }, [containerWidth, props.data]);

  return <svg ref={d3Container} width="100%" height="400" style={props.style} />;
};

export default Heatmap;
