import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const BubbleChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) {
      return;
    }

    if (props.data && d3Container && d3Container.current && width > 0) {
        d3.select(d3Container.current).selectAll('*').remove();

        const svg = d3.select(d3Container.current);
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const height = 400 - margin.top - margin.bottom;
        const drawWidth = width - margin.left - margin.right;

        // Set up the scales
        const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(props.data, (d) => d.x) + 5])
        .range([0, drawWidth]);

        const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(props.data, (d) => d.y) + 10])
        .range([height, 0]);

        const sizeScale = d3
        .scaleSqrt()
        .domain([0, d3.max(props.data, (d) => d.value)])
        .range([0, 20]); // Max bubble size

        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        // Shade the upper right quadrant
        g.append('rect')
        .attr('x', drawWidth / 2)
        .attr('y', 0)
        .attr('width', drawWidth / 2)
        .attr('height', height / 2)
        .style('fill', 'lightgreen')
        .style('opacity', 0.2);

        // Draw the bubbles with conditional shading
        g.selectAll('circle')
        .data(props.data)
        .enter()
        .append('circle')
        .attr('cx', (d) => xScale(d.x))
        .attr('cy', (d) => yScale(d.y))
        .attr('r', (d) => sizeScale(d.value))
        .style('fill', (d) => (xScale(d.x) > drawWidth / 2 && yScale(d.y) < height / 2) ? 'rgba(68, 198, 127, 1)' : 'none')
        .style('fill-opacity', 0.7)
        .style('stroke', 'black');

        // Add X axis
        g.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));

        // Add Y axis
        g.append('g').call(d3.axisLeft(yScale));
    }
  };

  useEffect(() => {
    if (!d3Container.current) {
      return;
    }

    setContainerWidth(d3Container.current.getBoundingClientRect().width);
    const handleResize = () => {
      if (!d3Container.current) {
        return;
      }
      setContainerWidth(d3Container.current.getBoundingClientRect().width);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [props.data]);

  useEffect(() => {
    drawChart(containerWidth);
  }, [containerWidth, props.data]);

  return <svg width="100%" height="400" ref={d3Container} style={props.style} />;
};

export default BubbleChart;

