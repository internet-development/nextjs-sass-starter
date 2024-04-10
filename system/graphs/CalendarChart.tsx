import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const CalendarChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0 || !props.data) {
      return;
    }

    d3.select(d3Container.current).selectAll('*').remove();

    const formatValue = d3.format('+.2%');
    const formatClose = d3.format('$,.2f');
    const formatDate = d3.utcFormat('%x');
    const formatDay = (i) => 'SMTWTFS'[i];
    const formatMonth = d3.utcFormat('%b');

    const margin = { top: 10, right: 10, bottom: 10, left: 40 };
    const cellSize = 17;
    const height = cellSize * 7;
    const drawWidth = width - margin.left - margin.right;
    const timeWeek = d3.utcSunday;
    const countDay = (i) => (i + 6) % 7;

    const data = d3.pairs(props.data, ({ close: Previous }, { date, close: Close }) => ({
      date,
      value: (Close - Previous) / Previous,
      close: Close,
    }));

    const max = d3.quantile(data, 0.9975, (d) => Math.abs(d.value));
    const color = d3.scaleSequential(d3.interpolatePiYG).domain([-max, max]);

    const years = d3.groups(data, (d) => d.date.getUTCFullYear()).reverse();

    function pathMonth(t) {
      const d = Math.max(0, Math.min(5, countDay(t.getUTCDay())));
      const w = timeWeek.count(d3.utcYear(t), t);
      return `${d === 0 ? `M${w * cellSize},0` : d === 5 ? `M${(w + 1) * cellSize},0` : `M${(w + 1) * cellSize},0V${d * cellSize}H${w * cellSize}`}V${5 * cellSize}`;
    }

    const svg = d3
      .select(d3Container.current)
      .attr('viewBox', [0, 0, width, height * years.length + margin.top + margin.bottom])
      .style('max-width', '100%')
      .style('height', 'auto')
      .style('font', '10px sans-serif');

    const year = svg
      .selectAll('g')
      .data(years)
      .join('g')
      .attr('transform', (d, i) => `translate(${margin.left},${height * i + cellSize * 1.5})`);

    year
      .append('text')
      .attr('x', -5)
      .attr('y', -5)
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'end')
      .text(([key]) => key);

    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    year
      .append('g')
      .attr('text-anchor', 'end')
      .selectAll('text')
      .data(dayLabels)
      .join('text')
      .attr('x', -5)
      .attr('y', (d, i) => (i + 0.5) * cellSize)
      .attr('dy', '0.31em')
      .text((d) => d);

    year
      .selectAll('rect')
      .data(([, values]) => values.filter(d => d.date.getUTCDay() !== 0 && d.date.getUTCDay() !== 6))
      .join('rect')
      .attr('width', cellSize - 1)
      .attr('height', cellSize - 1)
      .attr('x', (d) => timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5)
      .attr('y', (d) => (d.date.getUTCDay() - 1) * cellSize + 0.5)
      .attr('fill', (d) => d.value ? color(d.value) : 'white')
      .append('title')
      .text((d) => `${d.date.toLocaleDateString()}: ${d.value ? d.value.toFixed(2) : 'N/A'}, Close: ${d.close.toFixed(2)}`);

      const month = year
        .append('g')
        .selectAll()
        .data(([, values]) => d3.utcMonths(d3.utcMonth(values[0].date), values.at(-1).date))
        .join('g');

      month
        .filter((d, i) => i)
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 3)
        .attr('d', pathMonth);

      month
        .append('text')
        .attr('x', (d) => timeWeek.count(d3.utcYear(d), timeWeek.ceil(d)) * cellSize + 2)
        .attr('y', -5)
        .text(formatMonth);
  };

  useEffect(() => {
    if (!d3Container.current) return;

    setContainerWidth(d3Container.current.clientWidth);
    const handleResize = () => {
      if (!d3Container.current) return;
      setContainerWidth(d3Container.current.clientWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [props.data]);

  useEffect(() => {
    drawChart(containerWidth);
  }, [containerWidth, props.data]);

  return <svg ref={d3Container} style={{ width: '100%', height: 'auto', ...props.style }} />;
};

export default CalendarChart;
