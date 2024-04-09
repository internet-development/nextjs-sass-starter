import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const HistogramChart = ({ data, style }) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0 || !data) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const height = +svg.attr('height') - margin.top - margin.bottom;
    const drawWidth = width - margin.left - margin.right;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([0, drawWidth]);

    const histogram = d3.histogram()
      .value((d) => d.value)
      .domain(xScale.domain())
      .thresholds(xScale.ticks(40));

    const bins = histogram(data);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(bins, (d) => d.length)])
      .range([height, 0]);

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    g.append('g')
      .call(d3.axisLeft(yScale));

    g.selectAll("rect")
      .data(bins)
      .enter().append("rect")
      .attr("x", 1)
      .attr("transform", (d) => `translate(${xScale(d.x0)},${yScale(d.length)})`)
      .attr("width", (d) => xScale(d.x1) - xScale(d.x0) - 1)
      .attr("height", (d) => height - yScale(d.length))
      .style("fill", "#69b3a2");
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
  }, [data]);

  useEffect(() => {
    drawChart(containerWidth);
  }, [containerWidth, data]);

  return <svg width="100%" height="188" ref={d3Container} style={style} />;
};

export default HistogramChart;
