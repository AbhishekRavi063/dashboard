import { ResponsiveSankey } from "@nivo/sankey";
import { useRef, useEffect, useState } from "react";

const data = {
  nodes: [
    { id: "Nippon Large Cap Fund - Direct Plan", color: "#C4A66A" },
    { id: "Motilal Large Cap Fund - Direct Plan", color: "#2A6AD2" },
    { id: "HDFC Large Cap Fund", color: "#603813" },
    { id: "ICICI Prudential Midcap Fund", color: "#9A9E23" },
    { id: "HDFC LTD.", color: "#FFBE00" },
    { id: "RIL", color: "#00823E" },
    { id: "INFY", color: "#732983" },
    { id: "TCS", color: "#0097A7" },
    { id: "HDFCBANK", color: "#C83737" },
    { id: "BHARTIARTL", color: "#E27A50" },
  ],
  links: [
    { source: "Nippon Large Cap Fund - Direct Plan", target: "HDFC LTD.", value: 10 },
    { source: "Nippon Large Cap Fund - Direct Plan", target: "RIL", value: 15 },
    { source: "Motilal Large Cap Fund - Direct Plan", target: "INFY", value: 10 },
    { source: "Motilal Large Cap Fund - Direct Plan", target: "TCS", value: 12 },
    { source: "HDFC Large Cap Fund", target: "HDFCBANK", value: 18 },
    { source: "ICICI Prudential Midcap Fund", target: "BHARTIARTL", value: 14 },
    { source: "HDFC Large Cap Fund", target: "HDFC LTD.", value: 8 },
    { source: "ICICI Prudential Midcap Fund", target: "RIL", value: 5 },
  ],
};

const isRightSideNode = (id) => data.links.some((link) => link.target === id);


const SankeyChart = () => {
  const nodePositions = useRef([]);
  const [render, setRender] = useState(false);

  return (
    <div className="relative w-full h-[500px] p-6 rounded-lg mt-4">
      {/* Sankey Chart */}
      <div className="w-full h-full relative">
        <ResponsiveSankey
          data={data}
          margin={{ top: 20, right: 200, bottom: 20, left: 200 }}
          align="justify"
          colors={{ datum: "color" }}
          nodeOpacity={1}
          nodeThickness={12}
          nodeBorderWidth={0}
          linkOpacity={0.4}
          enableLinkGradient={true}
          labelPosition="outside"
          label={(d) => (isRightSideNode(d.id) ? d.id : "")}
          labelPadding={12}
          labelTextColor="#FFFFFF"
          nodeBorderColor={{ from: "color", modifiers: [["darker", 1.2]] }}
          layers={[
            "links",
            "nodes",
            "labels",
            ({ nodes }) => {
              if (nodePositions.current.length === 0) {
                nodePositions.current = nodes.map((node) => ({
                  id: node.id,
                  x: node.x,
                  y: node.y,
                  color: node.color,
                }));
                setRender(true);
              }
              return null;
            },
          ]}
        />
      </div>

      {/* Left-side fund labels ONLY */}
      {render &&
  nodePositions.current
    .filter((node) =>
      data.links.some((link) => link.source === node.id) // Only source nodes
    )
    .map((node) => (
      <div
        key={node.id}
        className="absolute px-3 py-2 rounded-lg text-white text-xs font-semibold shadow-lg w-[100px] h-16 justify-center items-center flex text-center"
        style={{
          backgroundColor: `${node.color}80`, // 50% opacity
          top: `${node.y - -90}px`,
          left: `${node.x - -100}px`,
          transform: "translateY(-50%)",
          whiteSpace: "normal", // Allows text to wrap
          wordWrap: "break-word", // Ensures words break
          overflowWrap: "break-word", // Alternative word wrapping
        }}
      >
        {node.id}
      </div>
    ))}

    </div>
  );
};

export default SankeyChart;
