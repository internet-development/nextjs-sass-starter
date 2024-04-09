import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const MatrixGraph = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) {
      return;
    }

    if (props.data && d3Container && d3Container.current && width > 0) {
        const svg = d3.select(d3Container.current);
        svg.selectAll('*').remove();

        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const height = +svg.attr('height') - margin.top - margin.bottom;
        const drawWidth = width - margin.left - margin.right;

        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        // Assuming props.data is a 2D array for matrix
        const xScale = d3.scaleBand()
        .domain(d3.range(props.data.length))
        .range([0, drawWidth])
        .padding(0.05);

        const yScale = d3.scaleBand()
        .domain(d3.range(props.data[0].length))
        .range([height, 0])
        .padding(0.05);

        const colorScale = d3.scaleSequential()
        .interpolator(d3.interpolateInferno)
        .domain([0, d3.max(props.data, row => d3.max(row))]);

        g.selectAll()
        .data(props.data.flat())
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(i % props.data.length))
        .attr('y', (d, i) => yScale(Math.floor(i / props.data.length)))
        .attr('width', xScale.bandwidth())
        .attr('height', yScale.bandwidth())
        .style('fill', d => colorScale(d));

        g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale).tickFormat(i => i + 1));

        g.append('g')
        .call(d3.axisLeft(yScale).tickFormat(i => i + 1));
    }
  };

  useEffect(() => {
    if (!d3Container.current) {
      return;
    }

    setContainerWidth(d3Container.current.clientWidth);
    const handleResize = () => {
      if (!d3Container.current) {
        return;
      }
      setContainerWidth(d3Container.current.clientWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [props.data]);

  useEffect(() => {
    drawChart(containerWidth);
  }, [containerWidth, props.data]);

  return <svg width="100%" height="500" ref={d3Container} style={props.style} />;
};

export default MatrixGraph;
