import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const RadarChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);

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

    const angleSlice = (Math.PI * 2) / props.data.length;
    const rScale = d3.scaleLinear()
      .domain([0, d3.max(props.data, (d) => d.value)])
      .range([0, radius]);

    // Draw the radar chart spokes
    const axisGrid = g.append("g").attr("class", "axisWrapper");
    axisGrid.selectAll(".levels")
      .data(d3.range(1,(props.levels+1)).reverse())
      .enter()
        .append("circle")
        .attr("class", "gridCircle")
        .attr("r", (d, i) => radius/props.levels*d)
        .style("fill", "#CDCDCD")
        .style("stroke", "#CDCDCD")
        .style("fill-opacity", 0.1);

    // Draw the radar chart axes
    const axis = axisGrid.selectAll(".axis")
      .data(props.data)
      .enter()
        .append("g")
        .attr("class", "axis");
    axis.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (d, i) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI/2))
      .attr("y2", (d, i) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI/2))
      .attr("class", "line")
      .style("stroke", "white")
      .style("stroke-width", "2px");

    // Draw the radar chart labels
    axis.append("text")
      .attr("class", "legend")
      .style("font-size", "12px")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", (d, i) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI/2))
      .attr("y", (d, i) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI/2))
      .text((d) => d.label);
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

export default RadarChart;
