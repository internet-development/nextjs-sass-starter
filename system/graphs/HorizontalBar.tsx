import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const HorizontalBarChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || !props.data || width <= 0) {
      return;
    }

    if (props.data && d3Container && d3Container.current && width > 0) {
        const svg = d3.select(d3Container.current);
        svg.selectAll('*').remove();

        // Adjusted margins and height for a smaller graph
        const margin = { top: 10, right: 10, bottom: 20, left: 30 };
        const height = +svg.attr('height') - margin.top - margin.bottom;
        const drawWidth = width - margin.left - margin.right;

        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleLinear()
        .domain([0, d3.max(props.data, (d) => d.value)])
        .range([0, drawWidth]);

        const yScale = d3.scaleBand()
        .domain(props.data.map((d) => d.label))
        .rangeRound([0, height])
        .padding(0.2); // Adjusted padding for a smaller graph

        g.append('g')
        .call(d3.axisLeft(yScale));

        g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale).ticks(3)) // Reduced number of ticks for a smaller graph
        .append('text')
        .attr('fill', '#000')
        .attr('x', drawWidth)
        .attr('y', -6)
        .style('text-anchor', 'end')
        .text('Volume');

        g.selectAll('.bar')
        .data(props.data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', 0)
        .attr('y', (d) => yScale(d.label))
        .attr('width', (d) => xScale(d.value))
        .attr('height', yScale.bandwidth())
        .attr('fill', (d, i) => i % 2 === 0 ? 'var(--color-success)' : 'var(--color-subdued-success)');
    }
  };

  useEffect(() => {
    if (!d3Container || !d3Container.current) {
      return;
    }

    setContainerWidth(d3Container.current.clientWidth);
    const handleResize = () => {
      if (!d3Container || !d3Container.current) {
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

  // Adjusted SVG height for a smaller graph
  return <svg width="100%" height="500" ref={d3Container} style={props.style} />;
};

export default HorizontalBarChart;
