import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const ColumnChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) return;

    const svg = d3.select(d3Container.current);
    svg.selectAll('*').remove();

    const margin = { top: 0, right: 20, bottom: 40, left: 30 };

    const height = +d3Container.current.getAttribute('height') - margin.top - margin.bottom;
    const drawWidth = width - margin.left - margin.right;

    const xScale = d3
      .scaleBand()
      .domain(props.data.map((d) => d.category))
      .rangeRound([0, drawWidth])
      .padding(0.1);

    const colorScale = d3.scaleOrdinal().domain(['positive', 'neutral', 'negative']).range(['var(--color-success)', 'var(--color-light-gray)', 'var(--color-subdued-error)']);

    const maxUpperCI = d3.max(props.data, (d) => d.positive_upper_ci);
    const extraSpaceForLabels = 10;

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(props.data, (d) => d.negative_lower_ci), maxUpperCI + extraSpaceForLabels])
      .range([height, 0]);

    const tickValues = yScale.ticks().filter((tick) => tick >= 0);

    const yAxis = d3
      .axisLeft(yScale)
      .tickValues(tickValues)
      .tickSize(-drawWidth)
      .tickFormat((d) => (d >= 0 ? d : ''));

    svg
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis)
      .selectAll('text')
      .style('fill', 'var(--color-border)')
      .style('font-size', '14px');

    svg.selectAll('.y-axis path, .y-axis line').style('stroke', 'var(--color-border)');

    const yAxisG = svg.append('g').attr('class', 'y-axis').attr('transform', `translate(${margin.left},0)`).call(yAxis);

    svg.selectAll('.y-axis path').remove();

    yAxisG.selectAll('.tick line').attr('stroke-opacity', 0.01).attr('shape-rendering', 'crispEdges');

    yAxisG.selectAll('.domain').remove();
    yAxisG.selectAll('.tick text').style('fill', 'var(--color-border)').style('font-size', '14px');

    svg
      .selectAll('.vertical-line')
      .data(props.data)
      .enter()
      .append('line')
      .attr('class', 'vertical-line')
      .attr('x1', (d) => xScale(d.category) + xScale.bandwidth() / 2 + margin.left)
      .attr('x2', (d) => xScale(d.category) + xScale.bandwidth() / 2 + margin.left)
      .attr('y1', margin.top)
      .attr('y2', height + margin.top)
      .attr('stroke', 'var(--color-light-gray)')
      .style('opacity', 0.3);

    props.data.forEach((d) => {
      const barX = xScale(d.category) + margin.left;
      const positiveBarY = yScale(Math.max(0, d.positive));
      const neutralBarY = yScale(Math.max(0, d.neutral));
      const negativeBarHeight = Math.abs(yScale(0) - yScale(d.negative));

      svg
        .append('rect')
        .attr('x', barX)
        .attr('y', positiveBarY)
        .attr('width', xScale.bandwidth())
        .attr('height', Math.abs(yScale(d.positive) - yScale(0)))
        .attr('fill', colorScale('positive'));

      svg
        .append('line')
        .attr('x1', barX + xScale.bandwidth() / 2)
        .attr('x2', barX + xScale.bandwidth() / 2)
        .attr('y1', yScale(d.positive_upper_ci))
        .attr('y2', yScale(d.positive_lower_ci))
        .attr('stroke', 'black')
        .attr('stroke-width', 1);

      svg
        .append('rect')
        .attr('x', barX)
        .attr('y', neutralBarY)
        .attr('width', xScale.bandwidth())
        .attr('height', Math.abs(yScale(d.neutral) - yScale(0)))
        .attr('fill', colorScale('neutral'));

      svg.append('rect').attr('x', barX).attr('y', yScale(0)).attr('width', xScale.bandwidth()).attr('height', negativeBarHeight).attr('fill', colorScale('negative'));

      svg
        .append('line')
        .attr('x1', barX + xScale.bandwidth() / 2)
        .attr('x2', barX + xScale.bandwidth() / 2)
        .attr('y1', yScale(d.negative_upper_ci))
        .attr('y2', yScale(d.negative_lower_ci))
        .attr('stroke', 'black')
        .attr('stroke-width', 1);

      svg
        .append('text')
        .attr('x', barX + xScale.bandwidth() / 2)
        .attr('y', height + margin.bottom - 5)
        .attr('text-anchor', 'middle')
        .text(d.category);
    });

    addBarLabels(props.data, svg, xScale, yScale, margin, height);
  };

  function addBarLabels(data, svg, xScale, yScale, margin, height) {
    data.forEach((d) => {
      const barX = xScale(d.category) + margin.left;

      if (d.positive > 0) {
        svg
          .append('text')
          .attr('x', barX + xScale.bandwidth() / 2)
          .attr('y', yScale(d.positive_upper_ci))
          .attr('dy', '-0.5em')
          .attr('text-anchor', 'middle')
          .attr('fill', 'var(--color-text)')
          .style('font-size', '10px')
          .text(d.positive);
      }

      if (d.neutral > 0) {
        svg
          .append('text')
          .attr('x', barX + xScale.bandwidth() / 2)
          .attr('y', yScale(d.neutral))
          .attr('dy', '1.2em')
          .attr('text-anchor', 'middle')
          .attr('fill', 'var(--color-text)')
          .style('font-size', '10px')
          .text(d.neutral);
      }

      if (d.negative_upper_ci < 0) {
        svg
          .append('text')
          .attr('x', barX + xScale.bandwidth() / 2)
          .attr('y', yScale(d.negative_lower_ci))
          .attr('dy', '0.7rem')
          .attr('text-anchor', 'middle')
          .attr('fill', 'var(--color-text)')
          .style('font-size', '10px')
          .text(d.negative);
      }
    });
  }

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

export default ColumnChart;
