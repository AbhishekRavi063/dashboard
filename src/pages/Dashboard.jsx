import React from "react";
import Card from "../components/Card";
import Graph from "../components/Graph";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <Card title="Current Investment Value" value="₹5,75,000" change={0.6} />
        <Card title="Initial Investment Value" value="₹5,00,000" change={15} />
        <Card title="Best Performing Scheme" value="ICICI Midcap Fund" change={19} />
        <Card title="Worst Performing Scheme" value="Axis Flexi Cap" change={-5} />
      </div>
      <Graph />
    </div>
  );
};

export default Dashboard;
