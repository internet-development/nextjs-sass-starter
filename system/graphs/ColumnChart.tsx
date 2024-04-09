import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const ColumnChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const height = 400 - margin.top - margin.bottom;
    const chartWidth = width - margin.left - margin.right;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().range([0, chartWidth]).padding(0.3);
    const yScale = d3.scaleLinear().range([height, 0]);

    xScale.domain(props.data.map((d) => d.label));
    yScale.domain([0, d3.max(props.data, (d) => d.value)]);

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    g.append('g').call(d3.axisLeft(yScale));

    g.selectAll('.column')
      .data(props.data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.label))
      .attr('y', (d) => yScale(d.value))
      .attr('height', (d) => height - yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('fill', 'rgba(68, 198, 127, 1)');
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

export default ColumnChart;
