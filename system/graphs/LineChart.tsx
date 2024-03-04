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

      const margin = { top: 8, right: 0, bottom: 48, left: 32 };
      const height = +svg.attr('height') - margin.top - margin.bottom;
      const drawWidth = width - margin.left - margin.right;

      const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(props.data, (d) => new Date(d.date)))
        .range([0, drawWidth]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(props.data, (d) => d.close)])
        .range([height, 0]);

      const defs = svg.append('defs');
      const gradient = defs
        .append('linearGradient')
        .attr('id', 'line-gradient')
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', drawWidth)
        .attr('y2', 0);

      gradient.append('stop').attr('offset', '0%').attr('stop-color', 'var(--color-border');
      gradient.append('stop').attr('offset', '100%').attr('stop-color', 'var(--color-success)');

      g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale).ticks(5))
        .select('.domain')
        .style('stroke', 'var(--color-border)')
        .style('text-transform', 'uppercase');
      g.append('g').call(d3.axisLeft(yScale).ticks(8)).select('.domain').style('stroke', 'var(--color-border)');
      g.selectAll('.tick line').style('stroke', 'var(--color-border)');
      g.selectAll('.tick text').style('fill', 'var(--color-text').style('text-transform', 'uppercase').style('user-select', 'none');
      g.append('path')
        .datum(props.data)
        .attr('fill', 'none')
        .attr('stroke', 'url(#line-gradient)')
        .attr('stroke-width', 1)
        .attr(
          'd',
          d3
            .line()
            .x((d) => xScale(new Date(d.date)))
            .y((d) => yScale(d.close))
        );
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
