import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const DonutChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const radius = Math.min(width, 400) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.value);
    const data_ready = pie(props.data);

    svg.attr('width', width)
       .attr('height', 400)
       .append('g')
       .attr('transform', `translate(${width / 2}, ${200})`);

    svg.selectAll('whatever')
       .data(data_ready)
       .enter()
       .append('path')
       .attr('d', d3.arc()
         .innerRadius(100)
         .outerRadius(radius)
       )
       .attr('fill', (d) => color(d.data.label))
       .attr('stroke', 'white')
       .style('stroke-width', '2px')
       .style('opacity', 0.7);
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

  return <svg ref={d3Container} style={props.style} />;
};

export default DonutChart;
