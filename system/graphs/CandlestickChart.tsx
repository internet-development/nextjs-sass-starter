import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const CandlestickChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) return;

    const svg = d3.select(d3Container.current);

    if (props.data && d3Container && d3Container.current && width > 0) {
        svg.selectAll('*').remove();

        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const height = 350 - margin.top - margin.bottom;
        const chartWidth = width - margin.left - margin.right;

        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleBand().range([0, chartWidth]).padding(0.3);
        const yScale = d3.scaleLinear().range([height, 0]);

        xScale.domain(props.data.map((d) => d.date));
        yScale.domain([d3.min(props.data, (d) => d.low) - 10, d3.max(props.data, (d) => d.high) + 10]);

        g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)');

        g.append('g').call(d3.axisLeft(yScale));

        g.selectAll('.candle')
          .data(props.data)
          .enter()
          .append('rect')
          .attr('x', (d) => xScale(d.date))
          .attr('y', (d) => yScale(Math.max(d.open, d.close)))
          .attr('height', (d) => yScale(Math.min(d.open, d.close)) - yScale(Math.max(d.open, d.close)))
          .attr('width', xScale.bandwidth())
          .attr('fill', (d) => (d.open > d.close ? 'red' : 'rgba(68, 198, 127, 1)'));

        g.selectAll('.wick')
        .data(props.data)
        .enter()
        .append('line')
        .attr('x1', (d) => xScale(d.date) + xScale.bandwidth() / 2)
        .attr('x2', (d) => xScale(d.date) + xScale.bandwidth() / 2)
        .attr('y1', (d) => yScale(d.high))
        .attr('y2', (d) => yScale(d.low))
        .attr('stroke', 'black');
    }
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

  return <svg ref={d3Container} width="100%" height="400" style={props.style} />;
};

export default CandlestickChart;
