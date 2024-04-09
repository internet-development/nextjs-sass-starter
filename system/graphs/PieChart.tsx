import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const PieChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any >(null);

  const drawChart = () => {
    if (!d3Container.current) {
      return;
    }

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove(); // Clear svg content before drawing

    const width = d3Container.current.clientWidth;
    const height = 400;
    svg.attr('width', width).attr('height', height);

    const radius = Math.min(width, height) / 2;
    const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.value);

    const path = d3.arc().outerRadius(radius - 10).innerRadius(0);

    const label = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40);

    const arc = g.selectAll('.arc')
      .data(pie(props.data))
      .enter().append('g')
        .attr('class', 'arc');

    arc.append('path')
      .attr('d', path)
      .attr('fill', (d) => color(d.data.label));

    arc.append('text')
      .attr('transform', (d) => `translate(${label.centroid(d)})`)
      .attr('dy', '0.35em')
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
