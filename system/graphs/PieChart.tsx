import * as d3 from 'd3';
import React, { useEffect, useState, useRef } from 'react';

const PieChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any >(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current) {
      return;
    }

    if (props.data && d3Container && d3Container.current && width > 0) {
        const svg = d3.select(d3Container.current);
        svg.selectAll('*').remove();

        const height = 400;
        svg.attr('width', width).attr('height', height);

        const radius = Math.min(width, height) / 2;
        const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

        const pie = d3.pie().value((d) => d.value);

        const path = d3
        .arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

        const labelArc = d3
        .arc()
        .outerRadius(radius - 70)
        .innerRadius(radius - 70);

        const arc = g.selectAll('.arc').data(pie(props.data)).enter().append('g').attr('class', 'arc');

        arc
        .append('path')
        .attr('d', path)
        .attr('fill', (d) => d.data.color);

        arc
        .append('text')
        .attr('transform', (d) => `translate(${labelArc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .style('fill', 'var(--color-text)')
        .style('font-size', '14px')
        .style('font-family', 'Arial, sans-serif')
        .text((d) => d.data.label);
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

  return <svg ref={d3Container} style={props.style} />;
};

export default PieChart;
