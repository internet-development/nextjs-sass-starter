import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';

const HexbinGraph = ({ data, style }) => {
  const d3Container = useRef<SVGSVGElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const drawChart = (width: number) => {
    if (!d3Container.current || width <= 0 || !data || data.length === 0) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const height = +svg.attr('height')! - margin.top - margin.bottom;
    const drawWidth = width - margin.left - margin.right;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, (d) => d.x) as [number, number])
      .range([0, drawWidth]);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, (d) => d.y) as [number, number])
      .range([height, 0]);

    const hexbinGenerator = hexbin()
      .radius(20)
      .x((d: any) => xScale(d.x))
      .y((d: any) => yScale(d.y))
      .extent([[0, 0], [drawWidth, height]]);

    g.append('g')
      .selectAll('.hexagon')
      .data(hexbinGenerator(data))
      .enter().append('path')
      .attr('class', 'hexagon')
      .attr('d', hexbinGenerator.hexagon())
      .attr('transform', (d) => `translate(${d.x},${d.y})`)
      .attr('fill', (d) => d3.scaleSequential(d3.interpolateViridis).domain([0, 10])(d.length));
  };

  useEffect(() => {
    if (!d3Container.current) {
      return;
    }

    setContainerWidth(d3Container.current.getBoundingClientRect().width);
    const handleResize = () => {
      if (!d3Container.current) {
        return;
      }
      setContainerWidth(d3Container.current.getBoundingClientRect().width);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [data]);

  useEffect(() => {
    drawChart(containerWidth);
  }, [containerWidth, data]);

  return <svg width="100%" height="188" ref={d3Container} style={style} />;
};

export default HexbinGraph;
