import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const ColumnChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 60 };
    const height = +d3Container.current.getAttribute('height') - margin.top - margin.bottom;
    const drawWidth = width - margin.left - margin.right;

    const xScale = d3
      .scaleBand()
      .domain(props.data.map((d) => d.category))
      .rangeRound([0, drawWidth])
      .padding(0.1);

    const colorScale = d3.scaleOrdinal()
      .domain(["positive", "neutral", "negative"])
      .range(["var(--color-success)", "var(--color-light-gray)", "var(--color-subdued-error)"]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(props.data, d => d.negative), d3.max(props.data, d => d.positive)])
      .range([height, 0]);

    const modifiedYScale = yScale.copy().domain([0, d3.max(props.data, d => d.positive)]);
    svg.append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left},-153)`)
        .call(d3.axisLeft(modifiedYScale));

    props.data.forEach(d => {
      svg.append('rect')
        .attr('x', xScale(d.category) + margin.left)
        .attr('y', yScale(Math.max(0, d.positive)))
        .attr('width', xScale.bandwidth())
        .attr('height', Math.abs(yScale(d.positive) - yScale(0)))
        .attr('fill', colorScale("positive"));

      svg.append('rect')
        .attr('x', xScale(d.category) + margin.left)
        .attr('y', yScale(Math.max(0, d.neutral)))
        .attr('width', xScale.bandwidth())
        .attr('height', Math.abs(yScale(d.neutral) - yScale(0)))
        .attr('fill', colorScale("neutral"));

      svg.append('rect')
        .attr('x', xScale(d.category) + margin.left)
        .attr('y', yScale(0))
        .attr('width', xScale.bandwidth())
        .attr('height', Math.abs(yScale(d.negative) - yScale(0)))
        .attr('fill', colorScale("negative"));
    });
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

  return (
    <>
      <svg width={props.width ?? '100%'} height={props.height ?? '400'} ref={d3Container} style={props.style} />
      <section style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem', paddingLeft: '2rem', paddingBottom: '1rem' }}>
        {props?.legend?.map((item, index) => {
          return (
            <div key={index}>
              <span style={{ width: '2rem', height: '1rem', display: 'inline-block', background: item.color }} />
              <p>{item.label}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ColumnChart;
