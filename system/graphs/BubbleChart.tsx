import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const BubbleChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) {
      return;
    }

    if (props.data && d3Container && d3Container.current && width > 0) {
      d3.select(d3Container.current).selectAll('*').remove();

      const svg = d3.select(d3Container.current);
      const margin = { top: 20, right: 30, bottom: 30, left: 30 };
      const height = 400 - margin.top - margin.bottom;
      const drawWidth = width - margin.left - margin.right;

      // Set up the scales
      const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(props.data, (d) => d.x) + 5])
        .range([0, drawWidth]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(props.data, (d) => d.y) + 10])
        .range([height, 0]);

      const sizeScale = d3
        .scaleSqrt()
        .domain([0, d3.max(props.data, (d) => d.value)])
        .range([0, 20]); // Max bubble size

      const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

      const tickValues = yScale.ticks();

      tickValues.forEach((d) => {
        g.append('line').attr('x1', 0).attr('x2', drawWidth).attr('y1', yScale(d)).attr('y2', yScale(d)).attr('stroke', 'var(--color-border)').attr('opacity', 0.7); // Adjust opacity as needed
      });

      const yAxis = g.append('g').call(d3.axisLeft(yScale));
      yAxis.selectAll('.tick text').style('fill', 'var(--color-border)').style('font-size', '16px');
      yAxis.selectAll('.tick line, .domain').style('stroke', 'var(--color-border)');

      const xAxis = g.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));
      xAxis.selectAll('text').style('font-size', '14px');

      // Shade the upper right quadrant
      g.append('rect')
        .attr('x', drawWidth / 2)
        .attr('y', 0)
        .attr('width', drawWidth / 2)
        .attr('height', height / 2)
        .style('fill', 'lightgreen')
        .style('opacity', 0.2);

      const bubbles = g.selectAll('.bubble').data(props.data).enter().append('g').attr('class', 'bubble');

      bubbles
        .append('circle')
        .attr('cx', (d) => xScale(d.x))
        .attr('cy', (d) => yScale(d.y))
        .attr('r', (d) => sizeScale(d.value))
        .style('fill', (d) => (xScale(d.x) > drawWidth / 2 && yScale(d.y) < height / 2 ? 'rgba(68, 198, 127, 1)' : 'var(--color-border)'))
        .style('fill-opacity', 0.7)
        .style('stroke', 'var(--color-text)');

      bubbles
        .append('text')
        .attr('x', (d) => xScale(d.x))
        .attr('y', (d) => yScale(d.y))
        .attr('text-anchor', 'middle')
        .attr('dy', '.3em')
        .text((d) => d.value)
        .style('fill', 'black')
        .style('font-size', '12px');
    }
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
  }, [props.data]);

  useEffect(() => {
    drawChart(containerWidth);
  }, [containerWidth, props.data]);

  return (
    <>
      <svg width="100%" height="400" ref={d3Container} style={props.style} />
      <section style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem', paddingLeft: '1rem', paddingBottom: '1rem' }}>
        {props?.legend?.map((item, index) => {
          return (
            <div key={index}>
              <span style={{ width: '1.2rem', height: '1.2rem', borderRadius: '2rem', display: 'inline-block', background: item.color }} />
              <p>{item.label}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BubbleChart;
