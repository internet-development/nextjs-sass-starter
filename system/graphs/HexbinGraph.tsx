import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';

const HexbinGraph = (props) => {
  const d3Container = useRef<SVGSVGElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const drawChart = (width) => {
    if (!d3Container.current || width <= 0 || !props.data || props.data.length === 0) return;

    if (props.data && d3Container && d3Container.current && width > 0) {
        const svg = d3.select(d3Container.current);
        svg.selectAll('*').remove();

        const w = width;
        const h = w;
        const marginTop = 20;
        const marginRight = 20;
        const marginBottom = 30;
        const marginLeft = 40;

        const x = d3.scaleLog()
            .domain(d3.extent(props.data, d => d["carat"]))
            .range([marginLeft, width - marginRight]);

        const y = d3.scaleLog()
            .domain(d3.extent(props.data, d => d["price"]))
            .rangeRound([h - marginBottom, marginTop]);

        const radius = 20;
        const hexbinGenerator = hexbin()
            .x(d => x(d["carat"]))
            .y(d => y(d["price"]))
            .radius(radius * width / 700)
            .extent([[marginLeft, marginTop], [width - marginRight, h - marginBottom]]);

        const bins = hexbinGenerator(props.data);

        const color = d3.scaleSequential(d3.interpolateBuPu)
            .domain([0, d3.max(bins, d => d.length) / 2]);

        const extendedXDomain = d3.extent(props.data, d => d["carat"]).map((d, i) => i === 0 ? d * 0.95 : d * 1.05);
        const extendedYDomain = d3.extent(props.data, d => d["price"]).map((d, i) => i === 0 ? d * 0.95 : d * 1.05);

        x.domain(extendedXDomain);
        y.domain(extendedYDomain);

        svg.append("g")
            .attr("transform", `translate(0,${h - marginBottom})`)
            .call(d3.axisBottom(x).ticks(width / 50, ""))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", width - marginRight)
                .attr("y", -4)
                .attr("fill", "currentColor")
                .attr("font-weight", "bold")
                .attr("text-anchor", "end")
                .text("Carats"));

        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).ticks(h / 50, ""))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", 4)
                .attr("y", marginTop)
                .attr("dy", ".71em")
                .attr("fill", "currentColor")
                .attr("font-weight", "bold")
                .attr("text-anchor", "start")
                .text("$ Price"));

        svg.append("g")
            .attr("fill", "#ddd")
            .attr("stroke", "black")
            .selectAll("path")
            .data(bins)
            .enter().append("path")
            .attr("transform", d => `translate(${d.x},${d.y})`)
            .attr("d", hexbinGenerator.hexagon())
            .attr("fill", bin => color(bin.length));
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

  return <svg width="500" height="500" ref={d3Container} style={props.style} />;
};

export default HexbinGraph;
