import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const LineChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container) {
      return;
    }

    if (props.data && d3Container && d3Container.current && width > 0) {
      const svg = d3.select(d3Container.current);
      svg.selectAll('*').remove();

      const margin = { top: 20, right: 40, bottom: 30, left: 40 };
      const height = +svg.attr('height') - margin.top - margin.bottom;
      const drawWidth = width - margin.left - margin.right;

      const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(props.data, (d) => new Date(d.date)))
        .range([0, drawWidth]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(props.data, (d) => d.value)])
        .range([height, 0]);

      g.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));

      g.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));

      g.append('g')
        .call(d3.axisLeft(yScale).tickSize(-drawWidth).tickPadding(8))

        .attr('shape-rendering', 'crispEdges')
        .selectAll('.tick text')
        .style('font-size', '16px')
        .style('fill', 'var(--color-border)');

      g.selectAll('.domain, .tick line').attr('stroke', 'var(--color-light-gray)');

      g.selectAll('.domain').remove();

      g.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));

      g.selectAll('.domain').remove();
      const area = d3
        .area()
        .x((d) => xScale(new Date(d.date)))
        .y0(height)
        .y1((d) => yScale(d.value));

      g.append('path').datum(props.data).attr('fill', 'var(--color-subdued-success)').attr('d', area);

      g.append('path')
        .datum(props.data)
        .attr('fill', 'none')
        .attr('stroke', 'var(--color-success)')
        .attr('stroke-width', 3)
        .attr(
          'd',
          d3
            .line()
            .x((d) => xScale(new Date(d.date)))
            .y((d) => yScale(d.value))
        );

      //error bars
      props.data.forEach((d) => {
        const date = new Date(d.date);
        const x = xScale(date);
        const y1 = yScale(d.value - d.error);
        const y2 = yScale(d.value + d.error);

        g.append('line').attr('x1', x).attr('x2', x).attr('y1', y1).attr('y2', y2).attr('stroke', 'var(--color-text)').attr('stroke-width', 1);

        g.append('line')
          .attr('x1', x - 5)
          .attr('x2', x + 5)
          .attr('y1', y1)
          .attr('y2', y1)
          .attr('stroke', 'var(--color-text)')
          .attr('stroke-width', 1);

        g.append('line')
          .attr('x1', x - 5)
          .attr('x2', x + 5)
          .attr('y1', y2)
          .attr('y2', y2)
          .attr('stroke', 'var(--color-text)')
          .attr('stroke-width', 1);
      });

      //midpoint of the error bars
      props.data.forEach((d) => {
        const date = new Date(d.date);
        const x = xScale(date);
        const y = yScale(d.value);

        g.append('circle').attr('cx', x).attr('cy', y).attr('r', 3).attr('fill', 'var(--color-text)');

        g.append('text')
          .attr('x', x + 5)
          .attr('y', y)
          .attr('dy', '.35em')
          .text(`${d.value}%`)
          .style('font-size', '12px')
          .style('fill', 'var(--color-text)');
      });

      //filling the error bar areas with color
      const errorAreaTop = d3
        .area()
        .x((d) => xScale(new Date(d.date)))
        .y0((d) => yScale(d.value + d.error))
        .y1((d) => yScale(d.value));

      const errorAreaBottom = d3
        .area()
        .x((d) => xScale(new Date(d.date)))
        .y0((d) => yScale(d.value))
        .y1((d) => yScale(d.value - d.error));

      g.append('path').datum(props.data).attr('fill', 'var(--color-subdued-success)').attr('d', errorAreaTop);

      g.append('path').datum(props.data).attr('fill', 'var(--color-subdued-success)').attr('d', errorAreaBottom);
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
  }, [containerWidth]);

  return <svg width="100%" height="188" ref={d3Container} style={props.style} />;
};

export default LineChart;
