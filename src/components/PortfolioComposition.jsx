import React from "react";
import SankeyChart from "./SankeyChart";

const PortfolioComposition = () => {
  return (
    <div
      className="p-6  text-white rounded-lg"
      style={{ backgroundColor: "#121212" }}
    >
     {/* Sector Allocation */}
<div className="mt-6 bg-[#1E1E1E] p-6 rounded-lg">
  <h3 className="text-lg font-semibold text-white">Sector Allocation</h3>
  
  <div className="flex gap-2 mt-4 text-black">
    {/* First Row */}
    <div className="flex-grow-[4] bg-blue-400 p-4 rounded-lg h-40" style={{ backgroundColor: "#9BB0C7" }}>
      <h4 className="text-xl">Financial</h4>
      <p className="text-sm font-semibold">₹1,95,000</p>
      <p className="text-xl mt-12 font-semibold">34%</p>
    </div>
    <div className="flex-grow-[2] bg-purple-400 p-4 rounded-lg h-40" style={{ backgroundColor: "#ADB8CF" }}>
      <h4 className="text-xl">Healthcare</h4>
      <p className="text-sm font-semibold">₹83,250</p>
      <p className="text-xl mt-12 font-semibold">14.5%</p>
    </div>
  </div>

  {/* Second Row */}
  <div className="flex gap-2 mt-2 text-black">
    <div className="flex-grow-[2.5] bg-indigo-400 p-4 rounded-lg h-40" style={{ backgroundColor: "#C6C4D8" }}>
      <h4 className="text-xl">Technology</h4>
      <p className="text-sm font-semibold">₹1,11,000</p>
      <p className="text-xl mt-12 font-semibold">19%</p>
    </div>
    <div className="flex-[1.5] bg-pink-400 p-4 rounded-lg h-40" style={{ backgroundColor: "#DAD3E1" }}>
      <h4 className="text-xl">Consumer Goods</h4>
      <p className="text-sm font-semibold">₹55,500</p>
      <p className="text-xl mt-12 font-semibold">9.5%</p>
    </div>
    <div className="flex-[1.5] bg-red-400 p-4 rounded-lg h-40" style={{ backgroundColor: "#EBE2EA" }}>
      <h4 className="text-xl">Energy</h4>
      <p className="text-sm font-semibold">₹55,500</p>
      <p className="text-xl mt-12 font-semibold">9.5%</p>
    </div>
    <div className="flex-[1.5] bg-gray-400 p-4 rounded-lg h-40" style={{ backgroundColor: "#F8F3F5" }}>
      <h4 className="text-xl">Other Sectors</h4>
      <p className="text-sm font-semibold">₹55,500</p>
      <p className="text-xl mt-12 font-semibold">9.5%</p>
    </div>
  </div>
</div>


      {/* Overlap Analysis */}
      <div className="mt-6 bg-[#1E1E1E] p-6 rounded-lg">
        <h3 className="text-lg font-semibold flex items-center">
          Overlap Analysis <span className="ml-2 text-gray-400 text-sm">ⓘ</span>
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          Comparing: Motilal Large Cap Fund and Nippon Large Cap Fund
        </p>
        <ul className="list-disc pl-6 text-gray-400 text-sm mt-2">
          <li>X Stocks Overlap across these funds.</li>
          <li>Y% Average Overlap in holdings.</li>
        </ul>

        {/* Sankey Chart Placeholder */}
        <div className="p-8  min-h-screen">
          <SankeyChart />
        </div>
      </div>
    </div>
  );
};

export default PortfolioComposition;
