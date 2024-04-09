import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const CalendarChart = (props) => {
  const d3Container = useRef<HTMLDivElement | null | any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0) {
      return;
    }

    if (props.data && d3Container && d3Container.current && width > 0) {
        d3.select(d3Container.current).selectAll('*').remove();

        const svg = d3.select(d3Container.current);
        const margin = { top: 10, right: 10, bottom: 10, left: 10 };
        const height = +svg.attr('height') - margin.top - margin.bottom;
        const drawWidth = width - margin.left - margin.right;

        const cellSize = 17; // cell size
        const weekday = d3.scaleBand().rangeRound([0, drawWidth]).padding(0.05).domain(d3.range(7).map(function(d) { return d; }));

        const years = d3.groups(props.data, d => d.date.getUTCFullYear()).reverse();

        const year = svg.selectAll("g")
        .data(years)
        .join("g")
        .attr("transform", (d, i) => `translate(50,${height - i * (cellSize * 7 + cellSize) - cellSize})`);

        year.append("text")
        .attr("x", -5)
        .attr("y", -30)
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .text(([key]) => key);

        year.selectAll("rect")
        .data(([, values]) => values)
        .join("rect")
        .attr("width", cellSize - 1)
        .attr("height", cellSize - 1)
        .attr("x", d => weekday(d.date.getUTCDay()))
        .attr("y", d => d.date.getUTCDate() * cellSize)
        .attr("fill", d => d3.interpolateCool(d.value / 100))
        .append("title")
        .text(d => `${d.date.toLocaleDateString()}: ${d.value}`);
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

  return <svg width="100%" height="200" ref={d3Container} style={props.style} />;
};

export default CalendarChart;
