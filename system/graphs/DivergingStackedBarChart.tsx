import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const DivergingStackedBarChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0 || !props.data) return;

    const barHeight = 30;
    const gapBetweenBars = 1;

    const margin = { top: 20, right: 10, bottom: 20, left: 30 };
    const drawWidth = width - margin.left - margin.right;
    const newHeight = (barHeight + gapBetweenBars) * props.data.length + margin.top + margin.bottom;

    const svg = d3.select(d3Container.current).attr('width', width).attr('height', newHeight);
    svg.selectAll('*').remove();
    svg.attr('viewBox', `0 0 ${width} ${newHeight}`);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const paddingBottom = 4;
    const xAxisGroup = svg.append('g').attr('transform', `translate(${margin.left}, ${newHeight - margin.bottom - paddingBottom})`);

    // Calculate the maximum absolute value for the x axis
    const maxAbsValue = d3.max(props.data, (d) => {
      const maxPositive = d.positive + d.positiveError;
      const maxNegative = Math.abs(d.negative - d.negativeError);
      return Math.max(maxPositive, maxNegative);
    });

    const xScale = d3
      .scaleLinear()
      .domain([-maxAbsValue, maxAbsValue])
      .range([0, drawWidth - margin.left - margin.right]);

    const xAxis = d3
      .axisBottom(xScale)
      .tickFormat((d) => `${d}%`)
      .ticks(10);
    xAxisGroup.call(xAxis);

    // Customize the font size of the labels
    xAxisGroup.selectAll('text').style('font-size', '16px').style('fill', 'var(--color-grey)').selectAll('line,path').style('stroke', 'red');
    xAxisGroup.selectAll('line,path').style('stroke', 'var(--color-grey)');

    const yScale = d3
      .scaleBand()
      .domain(props.data.map((d) => d.category))
      .rangeRound([0, newHeight - margin.top - margin.bottom])
      .padding(0.3);

    const gridLineSpacing = 20;

    g.selectAll('.vertical-grid')
      .data(xScale.ticks())
      .enter()
      .append('line')
      .attr('class', 'vertical-grid')
      .attr('x1', (d) => xScale(d))
      .attr('x2', (d) => xScale(d))
      .attr('y1', 0)
      .attr('y2', newHeight - margin.bottom - gridLineSpacing)
      .style('stroke', 'var(--color-light-gray)');
    g.select('.domain').remove();

    g.selectAll('.bar-positive')
      .data(props.data)
      .enter()
      .append('rect')
      .attr('class', 'bar-positive')
      .attr('x', (d) => xScale(Math.min(0, d.positive)))
      .attr('y', (d) => yScale(d.category))
      .attr('width', (d) => Math.abs(xScale(d.positive) - xScale(0)))
      .attr('height', yScale.bandwidth())
      .attr('fill', 'var(--color-success)')
      .attr('rx', 2)
      .attr('ry', 2);

    g.selectAll('.label-positive')
      .data(props.data)
      .enter()
      .append('text')
      .attr('x', (d) => xScale(d.positive) - 20)
      .attr('y', (d) => yScale(d.category) + yScale.bandwidth() / 2)
      .attr('dy', '.35em')
      .text((d) => `${d.positive}`)
      .style('font-size', '12px')
      .attr('fill', 'black');

    // Error bars for positive values
    g.selectAll('.error-bar-positive')
      .data(props.data)
      .enter()
      .append('line')
      .attr('x1', (d) => xScale(d.positive))
      .attr('x2', (d) => xScale(d.positive + d.positiveError))
      .attr('y1', (d) => yScale(d.category) + yScale.bandwidth() / 2)
      .attr('y2', (d) => yScale(d.category) + yScale.bandwidth() / 2)
      .attr('stroke', 'var(--color-text)')
      .attr('stroke-width', 1);

    g.selectAll('.cap-positive')
      .data(props.data)
      .enter()
      .append('line')
      .attr('x1', (d) => xScale(d.positive + d.positiveError))
      .attr('x2', (d) => xScale(d.positive + d.positiveError))
      .attr('y1', (d) => yScale(d.category) + yScale.bandwidth() / 2 - 5) // Adjust as needed
      .attr('y2', (d) => yScale(d.category) + yScale.bandwidth() / 2 + 5) // Adjust as needed
      .attr('stroke', 'black')
      .attr('stroke-width', 1);

    // Negative bars
    g.selectAll('.bar-negative')
      .data(props.data)
      .enter()
      .append('rect')
      .attr('class', 'bar-negative')
      .attr('x', (d) => xScale(Math.min(0, d.negative)))
      .attr('y', (d) => yScale(d.category))
      .attr('width', (d) => Math.abs(xScale(d.negative) - xScale(0)))
      .attr('height', yScale.bandwidth())
      .attr('fill', 'var( --color-subdued-error)')
      .attr('rx', 2)
      .attr('ry', 2);

    g.selectAll('.label-negative')
      .data(props.data)
      .enter()
      .append('text')
      .attr('x', (d) => xScale(d.negative) + 2)
      .attr('y', (d) => yScale(d.category) + yScale.bandwidth() / 2)
      .attr('dy', '.35em')
      .attr('text-anchor', 'start')
      .text((d) => `${d.negative}`)
      .style('font-size', '12px')
      .attr('fill', 'var(--color-text)');

    // Error bars for negative values
    g.selectAll('.error-bar-negative')
      .data(props.data)
      .enter()
      .append('line')
      .attr('x1', (d) => xScale(d.negative))
      .attr('x2', (d) => xScale(d.negative - d.negativeError))
      .attr('y1', (d) => yScale(d.category) + yScale.bandwidth() / 2)
      .attr('y2', (d) => yScale(d.category) + yScale.bandwidth() / 2)
      .attr('stroke', 'var(--color-text)')
      .attr('stroke-width', 1);

    // Caps for negative error bars
    g.selectAll('.cap-negative')
      .data(props.data)
      .enter()
      .append('line')
      .attr('x1', (d) => xScale(d.negative - d.negativeError))
      .attr('x2', (d) => xScale(d.negative - d.negativeError))
      .attr('y1', (d) => yScale(d.category) + yScale.bandwidth() / 2 - 5)
      .attr('y2', (d) => yScale(d.category) + yScale.bandwidth() / 2 + 5)
      .attr('stroke', 'var(--color-text)');

    g.selectAll('.bar-neutral')
      .data(props.data)
      .enter()
      .append('rect')
      .attr('class', 'bar-neutral')
      .attr('x', (d) => xScale(Math.min(0, d.neutral)))
      .attr('y', (d) => yScale(d.category))
      .attr('width', (d) => Math.abs(xScale(d.neutral) - xScale(0)))
      .attr('height', yScale.bandwidth())
      .attr('fill', 'var(--color-light-gray)');

    const fixedXPosition = xScale(0) + 10;

    g.selectAll('.label-neutral')
      .data(props.data)
      .enter()
      .append('text')
      .attr('x', fixedXPosition)
      .attr('y', (d) => yScale(d.category) + yScale.bandwidth() / 2)
      .attr('dy', '.35em')
      .attr('text-anchor', 'start')
      .text((d) => `${d.neutral}`)
      .style('font-size', '12px')
      .attr('fill', 'var(--color-text)');
  };

  useEffect(() => {
    if (d3Container.current) {
      setContainerWidth(d3Container.current.clientWidth);
    }

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
      <svg ref={d3Container} style={{ width: '100%', height: '100%', paddingBottom: '1rem' }} />

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

export default DivergingStackedBarChart;
