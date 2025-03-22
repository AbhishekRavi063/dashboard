import React, { useState } from "react";
import SideMenu from "./components/SideMenu";
import TopMenu from "./components/TopMenu";
import Card from "./components/Card";
import Graph from "./components/Graph";
import "./App.css";
import PortfolioComposition from "./components/PortfolioComposition";

const App = () => {
  const [activeTab, setActiveTab] = useState("Performance Metrics");

  const cardsData = [
    { title1: "Current", title2: " Investment Value", value: "₹5,75,000", change: "+10.0%" },
    { title1: "Initial", title2: " Investment Value", value: "₹5,00,000", change: "+15%" },
    { title1: "Best", title2: " Performing Scheme", value: "ICICI Prudential MidCap Fund", change: "+19%" },
    { title1: "Worst", title2: " Performing Scheme", value: "Axis Flexi Cap Fund", change: "-5%" },
  ];

  return (
    <div className="flex h-screen text-white overflow-hidden " style={{ backgroundColor: "#1B1A1A" }}>
      {/* Side Menu (Fixed) */}
      <div className="w-60 h-screen fixed mt-20 left-0">
        <SideMenu />
      </div>

      {/* Main Content (Scrollable) */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Menu */}
        <div className="fixed top-0 left-0 w-full z-10">
          <TopMenu />
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 ml-60 mt-20">
          <h1 className="text-2xl font-semibold mb-4">Good Morning, Yashna!</h1>
          <p className="text-gray-400 mb-6">Evaluate Your Investment Performance</p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {cardsData.map((card, index) => (
              <Card key={index} title={card.title1} title2={card.title2} value={card.value} change={card.change} />
            ))}
          </div>

          {/* Tabs */}
          <div className="flex space-x-6 mb-4 border-b border-gray-600">
            {["Performance Metrics", "Portfolio Composition"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 transition-all ${
                  activeTab === tab ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Graph (or other components based on the selected tab) */}
          <div className="flex-1 ">
            {activeTab === "Performance Metrics" ? <Graph /> : <PortfolioComposition />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
