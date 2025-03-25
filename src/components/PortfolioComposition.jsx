import React, { useState } from "react";
import SankeyChart from "./SankeyChart";

const PortfolioComposition = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-6 text-white rounded-lg"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Sector Allocation */}
      <div className="mt-6 bg-[#1E1E1E] p-6 rounded-lg">
      <h3 className={`text-lg font-semibold transition-colors duration-300 ${hovered ? "text-[#0a3561]" : "text-white"}`}>
          Sector Allocation
        </h3>
        <div className="flex gap-2 mt-4 text-black">
          {/* First Card with Hover Effect */}
          <div
            className="flex-grow-[4] p-4 rounded-lg h-52 cursor-pointer transition-all duration-300 relative"
            style={{ backgroundColor: "#9BB0C7" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h4 className="text-xl">Financial</h4>
            <p className="text-sm font-semibold">₹1,95,000</p>
            <p className="text-xl mt-24 font-semibold">34%</p>

            {hovered && (
              <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-100 rounded-lg transition-opacity duration-500 ease-in-out flex flex-col w-full h-full">
              <div className="grid grid-rows-2 gap-1 w-full h-full">
                  <div className="grid grid-cols-3 gap-1 w-full">
                    {/* HDFC Bank - Wider */}
                    <div
                      className="p-2 rounded-tl-lg text-[#0a3561] col-span-2"
                      style={{ backgroundColor: "#5A738E" }}
                    >
                      <h5 className="text-sm font-semibold">HDFC Bank</h5>
                      <p className="text-xs">₹78,000</p>
                      <p className="text-ml font-semibold  text-right mt-6 ">40%</p>
                    </div>

                    {/* Bajaj Finance - Smaller */}
                    <div
                      className="p-2 rounded-tr-lg text-[#0a3561] col-span-1"
                      style={{ backgroundColor: "#5A738E" }}
                    >
                      <h5 className="text-sm font-semibold">Bajaj Finance</h5>
                      <p className="text-xs">₹19,500</p>
                      <p className="text-ml font-semibold  text-right mt-6">10%</p>
                    </div>
                  </div>

                  {/* Full-width ICICI & Kotak Bank, each taking 50% */}
                  <div className="grid grid-cols-2 gap-1 w-full">
                    <div
                      className="p-2 rounded-bl-lg text-[#0a3561]"
                      style={{ backgroundColor: "#5A738E" }}
                    >
                      <h5 className="text-sm font-semibold">ICIC Bank</h5>
                      <p className="text-xs">₹58,000</p>
                      <p className="text-ml font-semibold  text-right mt-6">30%</p>
                    </div>

                    <div
                      className="p-2 rounded-br-lg text-[#0a3561]"
                      style={{ backgroundColor: "#5A738E" }}
                    >
                      <h5 className="text-sm font-semibold">
                        Kotak Mahindra Bank
                      </h5>
                      <p className="text-xs">₹39,000</p>
                      <p className="text-ml font-semibold  text-right mt-6">20%</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="flex-grow-[2] p-4 rounded-lg h-52"
            style={{ backgroundColor: "#ADB8CF" }}
          >
            <h4 className="text-xl">Healthcare</h4>
            <p className="text-sm font-semibold">₹83,250</p>
            <p className="text-xl mt-24 font-semibold">14.5%</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-2 mt-2 text-black">
          <div
            className="flex-grow-[2.5] p-4 rounded-lg h-52"
            style={{ backgroundColor: "#C6C4D8" }}
          >
            <h4 className="text-xl">Technology</h4>
            <p className="text-sm font-semibold">₹1,11,000</p>
            <p className="text-xl mt-24 font-semibold">19%</p>
          </div>
          <div
            className="flex-[1.5] p-4 rounded-lg h-52"
            style={{ backgroundColor: "#DAD3E1" }}
          >
            <h4 className="text-xl">Consumer Goods</h4>
            <p className="text-sm font-semibold">₹55,500</p>
            <p className="text-xl mt-24 font-semibold">9.5%</p>
          </div>
          <div
            className="flex-[1.5] p-4 rounded-lg h-52"
            style={{ backgroundColor: "#EBE2EA" }}
          >
            <h4 className="text-xl">Energy</h4>
            <p className="text-sm font-semibold">₹55,500</p>
            <p className="text-xl mt-24 font-semibold">9.5%</p>
          </div>
          <div
            className="flex-[1.5] p-4 rounded-lg h-52"
            style={{ backgroundColor: "#F8F3F5" }}
          >
            <h4 className="text-xl">Other Sectors</h4>
            <p className="text-sm font-semibold">₹55,500</p>
            <p className="text-xl mt-24 font-semibold">9.5%</p>
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

        {/* Sankey Chart */}
        <div className="p-8 min-h-screen">
          <SankeyChart />
        </div>
      </div>
    </div>
  );
};

export default PortfolioComposition;
