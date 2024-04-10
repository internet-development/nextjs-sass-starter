import React, { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';

const DotPlot = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0 || !props.data) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove(); // Clear the SVG content before drawing

    const margin = { top: 20, right: 30, bottom: 5, left: 10 };
    const height = 400 - margin.top - margin.bottom;

    const greatestValues = 15;
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(props.data, (d) => d.value)])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleBand()
      .domain(props.data.map((d) => d.label))
      .rangeRound([margin.top, height - margin.bottom])
      .padding(0.1);

    svg.attr('width', width).attr('height', height + margin.top + margin.bottom);

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickFormat((d) => `${d}%`))
      .attr('color', 'var(--color-border)')
      .selectAll('text')
      .style('font-size', '12px')
      .style('color', 'var(--color-text)');

    const helperLinesGroup = svg.append('g');
    props.data.forEach((d, i) => {
      const yCoordinate = yScale(d.label) + yScale.bandwidth() / 2;
      const xStart = margin.left;
      const xEnd = width - margin.right;

      // helper line
      helperLinesGroup.append('line').attr('x1', xStart).attr('x2', xEnd).attr('y1', yCoordinate).attr('y2', yCoordinate).attr('stroke', 'var(--color-border)');

      // circle at the start of the line
      helperLinesGroup.append('circle').attr('cx', xStart).attr('cy', yCoordinate).attr('r', 3).attr('fill', 'var(--color-border)');

      // circle at the end of the line
      helperLinesGroup.append('circle').attr('cx', xEnd).attr('cy', yCoordinate).attr('r', 3).attr('fill', 'var(--color-border)');
    });

    svg
      .append('g')
      .selectAll('circle')
      .data(props.data)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d.value))
      .attr('cy', (d) => yScale(d.label) + yScale.bandwidth() / 2)
      .attr('r', (d) => (d.value > greatestValues ? 8 : 5))
      .attr('fill', (d) => (d.value > greatestValues ? 'var(--color-success)' : 'var(--color-subdued-error)')); // Color based on value

    svg
      .append('g')
      .selectAll('text')
      .data(props.data)
      .enter()
      .append('text')
      .attr('x', (d) => xScale(d.value) + 10)
      .attr('y', (d) => yScale(d.label) + yScale.bandwidth() / 2)
      .attr('dy', '0.35em')
      .text((d) => d.value)
      .style('font-size', '12px')
      .attr('fill', 'var(--color-text)');
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

  return <svg ref={d3Container} style={{ width: '100%', height: '400px', ...props.style }} />;
};

export default DotPlot;
