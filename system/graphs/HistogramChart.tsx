import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const HistogramChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const height = 400 - margin.top - margin.bottom;
    const chartWidth = width - margin.left - margin.right;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().range([0, chartWidth]).padding(0.3);
    const yScale = d3.scaleLinear().range([height, 0]);

    xScale.domain(props.data.map((d) => d.label));
    yScale.domain([0, d3.max(props.data, (d) => d.upper_ci)]);

    const tickValues = yScale.ticks();

    tickValues.forEach((d) => {
      g.append('line').attr('x1', 0).attr('x2', chartWidth).attr('y1', yScale(d)).attr('y2', yScale(d)).attr('stroke', 'var(--color-border)').attr('opacity', 0.7); // Adjust opacity as needed
    });

    const xAxisOffset = 0.5;
    const xAxis = g
      .append('g')
      .attr('transform', `translate(0,${height + xAxisOffset})`)
      .call(d3.axisBottom(xScale));
    xAxis.selectAll('text').style('font-size', '14px');

    const yAxis = g.append('g').call(d3.axisLeft(yScale));
    yAxis.selectAll('.tick text').style('fill', 'var(--color-border)').style('font-size', '16px');
    yAxis.selectAll('.tick line, .domain').style('stroke', 'var(--color-border)');

    const bars = g.selectAll('.column').data(props.data).enter().append('g');

    bars
      .append('rect')
      .attr('x', (d) => xScale(d.label))
      .attr('y', (d) => yScale(d.value))
      .attr('height', (d) => height - yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('fill', 'rgba(68, 198, 127, 1)');

    bars
      .append('line')
      .attr('x1', (d) => xScale(d.label) + xScale.bandwidth() / 2)
      .attr('x2', (d) => xScale(d.label) + xScale.bandwidth() / 2)
      .attr('y1', (d) => yScale(d.value - (d.value - d.lower_ci)))
      .attr('y2', (d) => yScale(d.upper_ci))
      .attr('stroke', 'var(--color-text)')
      .attr('stroke-width', 1.5);

    bars
      .append('line')
      .attr('x1', (d) => xScale(d.label) + xScale.bandwidth() / 4)
      .attr('x2', (d) => xScale(d.label) + (3 * xScale.bandwidth()) / 4)
      .attr('y1', (d) => yScale(d.value - (d.value - d.lower_ci)))
      .attr('y2', (d) => yScale(d.value - (d.value - d.lower_ci)))
      .attr('stroke', 'var(--color-text)')
      .attr('stroke-width', 1.5);

    bars
      .append('line')
      .attr('x1', (d) => xScale(d.label) + xScale.bandwidth() / 4)
      .attr('x2', (d) => xScale(d.label) + (3 * xScale.bandwidth()) / 4)
      .attr('y1', (d) => yScale(d.upper_ci))
      .attr('y2', (d) => yScale(d.upper_ci))
      .attr('stroke', 'var(--color-text)')
      .attr('stroke-width', 1.5);

    bars.each(function (d) {
      const barGroup = d3.select(this);

      barGroup
        .append('text')
        .attr('x', xScale(d.label) + xScale.bandwidth() / 2)
        .attr('y', yScale(d.upper_ci))
        .attr('dy', '-0.5em')
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('fill', 'var(--color-text)')
        .text(`${d.upper_ci}`);

      barGroup
        .append('text')
        .attr('x', xScale(d.label) + xScale.bandwidth() / 2)
        .attr('y', yScale(d.lower_ci))
        .attr('dy', '1.2em')
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('fill', 'var(--color-text)')
        .text(` ${d.lower_ci}`);
    });
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

export default HistogramChart;
