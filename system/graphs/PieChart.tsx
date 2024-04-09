import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const PieChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any >(null);

  const drawChart = () => {
    if (!d3Container.current) {
      return;
    }

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const width = d3Container.current.clientWidth;
    const height = 400;
    svg.attr('width', width).attr('height', height);

    const radius = Math.min(width, height) / 2;
    const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie().value((d) => d.value);

    const path = d3.arc().outerRadius(radius - 10).innerRadius(0);

    const labelArc = d3.arc().outerRadius(radius - 70).innerRadius(radius - 70);

    const arc = g.selectAll('.arc')
      .data(pie(props.data))
      .enter().append('g')
        .attr('class', 'arc');

    arc.append('path')
      .attr('d', path)
      .attr('fill', (d) => d.data.color);

    arc.append('text')
      .attr('transform', (d) => `translate(${labelArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .style('font-size', '14px')
      .style('font-family', 'Arial, sans-serif')
      .text((d) => d.data.label);
  };

  useEffect(() => {
    drawChart();
    const handleResize = () => {
      drawChart();
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [props.data]);

  return <svg ref={d3Container} style={props.style} />;
};

export default PieChart;
