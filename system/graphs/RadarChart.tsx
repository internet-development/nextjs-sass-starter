import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const RadarChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
    const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current) {
      return;
    }

    if (props.data && d3Container && d3Container.current && width > 0) {
        const svg = d3.select(d3Container.current).attr('viewBox', `0 0 ${props.width} ${props.height}`);
        svg.selectAll('*').remove();

        const height = props.height;
        const radius = Math.min(width, height) / 2 - props.margin;
        const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

        const angleSlice = (Math.PI * 2) / props.data.length;
        const rScale = d3.scaleLinear()
        .domain([0, d3.max(props.data, (d) => d.value)])
        .range([0, radius]);

        // Radar chart area
        const radarLine = d3.lineRadial()
        .curve(d3.curveLinearClosed)
        .radius((d) => rScale(d.value))
        .angle((d,i) => i * angleSlice);

        // Radar chart blobs
        g.selectAll(".radarArea")
        .data([props.data])
        .enter()
        .append("path")
        .attr("class", "radarArea")
        .attr("d", radarLine)
        .style("fill", props.areaColor)
        .style("fill-opacity", props.opacity);

        // Radar chart outlines
        g.selectAll(".radarStroke")
        .data([props.data])
        .enter()
        .append("path")
        .attr("class", "radarStroke")
        .attr("d", radarLine)
        .style("stroke-width", props.strokeWidth + "px")
        .style("stroke", props.strokeColor)
        .style("fill", "none");

        // Radar chart circles
        g.selectAll(".radarCircle")
        .data(props.data)
        .enter()
        .append("circle")
        .attr("class", "radarCircle")
        .attr("r", props.dotRadius)
        .attr("cx", (d, i) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI/2))
        .attr("cy", (d, i) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI/2))
        .style("fill", props.dotColor)
        .style("fill-opacity", 0.8);
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

export default RadarChart;
