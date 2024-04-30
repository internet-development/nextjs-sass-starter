import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StackedCirclesBarChart = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      drawChart();
    }
  }, [data]);

  const drawChart = () => {
    const svgWidth = 500;
    const svgHeight = 300;
    const margin = { top: 10, right: 100, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const svg = d3.select(d3Container.current).selectAll('svg').data([null]);
    const svgEnter = svg.enter().append('svg');
    svgEnter.merge(svg).attr('width', svgWidth).attr('height', svgHeight);

    const g = svgEnter.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(['Total']).range([0, width]).padding(0.5);

    const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    g.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));

    g.append('g').call(d3.axisLeft(yScale));

    let yOffset = height;
    const circleDiameter = 20;
    const circleRadius = circleDiameter / 2;
    const circlesPerRow = 10;

    data.forEach((group) => {
      const totalRows = Math.ceil(group.count / circlesPerRow);

      for (let row = 0; row < totalRows; row++) {
        for (let i = 0; i < circlesPerRow; i++) {
          if (row * circlesPerRow + i < group.count) {
            g.append('circle')
              .attr('cx', xScale('Total') + xScale.bandwidth() / 2)
              .attr('cy', yOffset - circleRadius - row * circleDiameter)
              .attr('r', circleRadius)
              .attr('fill', group.color);
          }
        }
      }

      yOffset -= totalRows * circleDiameter;
    });

    const legend = svgEnter.append('g').attr('transform', `translate(${width + margin.left + 20}, ${margin.top})`);

    data.forEach((group, index) => {
      const legendRow = legend.append('g').attr('transform', `translate(0, ${index * 20})`);

      legendRow.append('rect').attr('width', 18).attr('height', 18).attr('fill', group.color);

      legendRow.append('text').attr('x', -10).attr('y', 9).attr('dy', '0.32em').style('text-anchor', 'end').text(group.name);
    });
  };

  return <div ref={d3Container} style={{ width: '100%' }} />;
};

export default StackedCirclesBarChart;
