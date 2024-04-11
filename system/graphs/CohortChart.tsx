import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

function getColorsBasedOnValue(value) {
  const maxValue = 100;
  const minValue = 0;

  const minOpacity = 0.3;
  const opacityRange = 0.7;

  if (value < 25) {
    const opacity = minOpacity + ((25 - value) / (25 - minValue)) * opacityRange;
    return `rgba(239, 68, 68, ${opacity})`;
  } else if (value > 35) {
    const opacity = minOpacity + ((value - 35) / (maxValue - 35)) * opacityRange;
    return `rgba(106, 243, 168, ${opacity})`;
  } else {
    return 'var(--color-light-gray)';
  }
}

const CohortChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0 || !props.data) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const margin = { top: 50, right: 10, bottom: 10, left: 10 };
    const height = 400 - margin.top - margin.bottom;
    const chartWidth = width - margin.left - margin.right;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .range([0, chartWidth])
      .padding(0.01)
      .domain(props.data.map((d) => d.group));
    const yScale = d3
      .scaleBand()
      .range([height, 0])
      .padding(0.01)
      .domain(props.data.map((d) => d.variable));

    g.append('g')
      .attr('transform', `translate(0,0)`)
      .call(d3.axisTop(xScale).tickSize(0))
      .selectAll('.tick text')
      .attr('text-anchor', 'end')
      .attr('dx', '4em')
      .attr('dy', '-0.5em')
      .style('fill', 'var(--color-text)')
      .style('font-size', '12px')
      .attr('dy', '-0.5em');
    g.selectAll('.domain').remove();

    g.selectAll('.cell')
      .data(props.data, (d) => d.group + ':' + d.variable)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.group))
      .attr('y', (d) => yScale(d.variable))
      .attr('width', xScale.bandwidth())
      .attr('height', yScale.bandwidth())
      .attr('rx', 4)
      .attr('ry', 4)
      .style('fill', (d) => getColorsBasedOnValue(d.value));

    g.selectAll('.label')
      .data(props.data, (d) => d.group + ':' + d.variable)
      .enter()
      .append('text')
      .text((d) => `${d.value}%`)
      .attr('x', (d) => xScale(d.group) + xScale.bandwidth() - Math.max(5, xScale.bandwidth() * 0.2))
      .attr('y', (d) => yScale(d.variable) + yScale.bandwidth() / 2)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .style('fill', 'var(--color-text)')
      .style('font-size', '12px');

    g.append('g')
      .call(d3.axisLeft(yScale).tickSize(0))
      .selectAll('.tick text')
      .attr('text-anchor', 'end')
      .style('fill', 'var(--color-text)')
      .style('font-size', '12px');
    g.selectAll('.domain').remove();
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
      <svg ref={d3Container} width="100%" height="400" style={props.style} />

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

export default CohortChart;
