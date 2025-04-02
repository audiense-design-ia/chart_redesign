import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const GraficoAngel = () => {
  const chartRef = useRef(null);
  const [hoveredData, setHoveredData] = useState({
    type: "allThree",
    value: 352691,
  });

  useEffect(() => {
    if (!chartRef.current) return;

    d3.select(chartRef.current).selectAll("*").remove();

    const width = 650;
    const height = 600;
    const margin = 100;
    const innerRadius = Math.min(width, height) / 2 - margin;
    const outerRadius = innerRadius + 20;

    const brands = ["Nike", "Adidas", "Puma"];
    const brandColors = {
      Nike: "#E73125",
      Adidas: "#0078D7",
      Puma: "#50AF31",
    };

    const matrix = [
      [7823459, 1832476, 764328],
      [1832476, 5943216, 521864],
      [764328, 521864, 2954783],
    ];

    const allThreeCommon = 352691;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal().domain(brands).range(Object.values(brandColors));

    const chord = d3.chord().padAngle(0.05).sortSubgroups(d3.descending);
    const chords = chord(matrix);

    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    const group = svg.append("g").selectAll("g").data(chords.groups).join("g");

    group
      .append("path")
      .attr("fill", (d) => color(brands[d.index]))
      .attr("stroke", (d) => d3.rgb(color(brands[d.index])).darker())
      .attr("d", arc)
      .style("cursor", "pointer")
      .on("mouseover", (event, d) => {
        setHoveredData({
          type: "brand",
          name: brands[d.index],
          value: matrix[d.index][d.index],
          color: color(brands[d.index]),
        });

        d3.select(event.currentTarget.parentNode)
          .select("text")
          .style("display", "block"); // Mostrar etiqueta
      })
      .on("mouseout", (event, d) => {
        setHoveredData({
          type: "allThree",
          value: allThreeCommon,
        });

        d3.select(event.currentTarget.parentNode)
          .select("text")
          .style("display", "none"); // Ocultar etiqueta
      });

    // Etiquetas (inicialmente ocultas)
    group
      .append("text")
      .attr("x", (d) => arc.centroid(d)[0] * 1.2)
      .attr("y", (d) => arc.centroid(d)[1] * 1.2)
      .attr("text-anchor", "middle")
      .style("fill", (d) => color(brands[d.index]))
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .style("display", "none")
      .text((d) => brands[d.index]);

    const ribbon = d3.ribbon().radius(innerRadius);

    svg
      .append("g")
      .selectAll("path")
      .data(chords)
      .join("path")
      .attr("d", ribbon)
      .attr("fill", (d) => color(brands[d.source.index]))
      .attr("stroke", (d) => d3.rgb(color(brands[d.source.index])).darker())
      .style("opacity", 0.7)
      .style("cursor", "pointer")
      .on("mouseover", (event, d) => {
        if (d.source.index !== d.target.index) {
          setHoveredData({
            type: "connection",
            source: brands[d.source.index],
            target: brands[d.target.index],
            value: d.source.value,
            sourceColor: color(brands[d.source.index]),
            targetColor: color(brands[d.target.index]),
          });
        }
      });

    svg
      .append("circle")
      .attr("r", innerRadius / 4)
      .attr("fill", "#8A2BE2")
      .attr("stroke", "#333")
      .attr("stroke-width", 1)
      .style("cursor", "pointer")
      .on("mouseover", () => {
        setHoveredData({
          type: "allThree",
          value: allThreeCommon,
        });
      });
  }, []);

  return (
    <div className="flex flex-col items-center w-5/6 relative">
      <h2 className="text-2xl font-bold mb-4">Follower Relationships Between Sports Brands</h2>
      <div className="flex flex-row w-full max-w-4xl mt-12 justify-center">
        <div ref={chartRef} className=""></div>
        <div className="absolute right-20 w-64 h-32 flex items-center justify-center text-center ml-4 bg-white p-4 rounded-lg shadow-md">
          {hoveredData.type === "allThree" ? (
            <div>
              <h3 className="text-nm font-bold">Common to all three brands</h3>
              <p className="text-sm text-center">
                <strong>{hoveredData.value.toLocaleString()}</strong> users follow Nike, Adidas, and Puma
              </p>
            </div>
          ) : hoveredData.type === "brand" ? (
            <div>
              <h3 className="text-xl text-center font-bold" style={{ color: hoveredData.color }}>
                {hoveredData.name}
              </h3>
              <p className="text-lg text-center">
                Unique followers: <strong>{hoveredData.value.toLocaleString()}</strong>
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-bold">Shared followers</h3>
              <div className="flex items-center text-center space-x-2 justify-center">
                <span style={{ color: hoveredData.sourceColor }} className="font-bold">
                  {hoveredData.source}
                </span>
                <span>and</span>
                <span style={{ color: hoveredData.targetColor }} className="font-bold text-center">
                  {hoveredData.target}
                </span>
              </div>
              <p className="text-lg mt-1 text-center">
                <strong>{hoveredData.value.toLocaleString()}</strong> followers
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4 flex flex-wrap justify-center gap-6">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: "#E73125" }}></div>
            <span>Nike: 10,457,632 total</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: "#0078D7" }}></div>
            <span>Adidas: 8,274,518 total</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: "#50AF31" }}></div>
            <span>Puma: 4,382,975 total</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: "#8A2BE2" }}></div>
            <span>Common to all three: 352,691</span>
          </div>
        </div>
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 max-w-2xl">
        <p className="text-gray-700">
          This diagram shows the relationships between followers of the three sports brands.
          The thickness of connections represents the number of shared followers.
          Interact with elements to see detailed information.
        </p>
      </div>
    </div>
    
  );
};

export default GraficoAngel;
