import React, { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = () => {
  // State to track the active time range button
  const [activeRange, setActiveRange] = useState("1M");

  // Function to handle button click
  const handleRangeClick = (range) => {
    setActiveRange(range);
  };

  const dataPoints = [
    { x: new Date(2025, 2, 7), y: 51000 },
    { x: new Date(2025, 2, 12), y: 48000 },
    { x: new Date(2025, 2, 17), y: 52000 },
    { x: new Date(2025, 2, 22), y: 49000 },
    { x: new Date(2025, 2, 27), y: 50000 },
    { x: new Date(2025, 3, 4), y: 48000 },
    { x: new Date(2025, 3, 9), y: 50000 },
  ];

  const options = {
    animationEnabled: true,
    backgroundColor: "#1E1E1E",
    height: 300,
    axisX: {
      labelFontColor: "#9CA3AF",
      gridThickness: 0,
      tickLength: 0,
      interval: 1,
      intervalType: "day",
      labelFormatter: function (e) {
        const allowedDates = dataPoints.map((point) => point.x.getTime());
        return allowedDates.includes(e.value.getTime())
          ? e.value.toLocaleDateString("en-GB", { day: "numeric", month: "short" })
          : "";
      },
    },
    axisY: {
      gridColor: "#4B5563",
      gridDashType: "dash",
      labelFontColor: "transparent",
      tickLength: 0,
      prefix: "₹",
    },
    toolTip: {
      backgroundColor: "#1F2937",
      borderColor: "#1F2937",
      fontColor: "#FFFFFF",
      content: "{x}",
    },
    data: [
      {
        type: "spline",
        lineColor: "#3B82F6",
        markerSize: 0,
        dataPoints: dataPoints.map((point, index) => ({
          ...point,
          markerSize: index === 4 ? 8 : 0,
          markerColor: "#3B82F6",
        })),
      },
    ],
  };

  return (
    <div className="p-4 rounded-lg" style={{ backgroundColor: "#1E1E1E" }}>
      <h3 className="text-lg font-semibold mb-4 ml-12">Performance Summary</h3>
      <div
        className="items-center mb-4 p-5 w-48 rounded-lg ml-12"
        style={{ backgroundColor: "#262626" }}
      >
        <p className="text-2xl font-semibold mr-4">₹5,50,000</p>
        <p className="text-green-500">₹50,000 | 10%</p>
      </div>
      <CanvasJSChart options={options} />

      {/* Time Range Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
        {["1M", "3M", "6M", "1Y", "3Y", "MAX"].map((range) => (
          <button
            key={range}
            onClick={() => handleRangeClick(range)}
            className={`px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base rounded transition-all ${
              activeRange === range ? "bg-blue-500 text-white" : "text-gray-400"
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Graph;
