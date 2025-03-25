

import { ResponsiveSankey } from "@nivo/sankey";
import { useRef, useState } from "react";

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

const formatName = (name) => {
  const parts = name.split(" ");
  if (parts.length <= 3) return name;
  return `${parts[0]}\n${parts.slice(1, 3).join(" ")}\n${parts.slice(3).join(" ")}`;
};

const fundInfo = {
  "Nippon Large Cap Fund - Direct Plan": {
    category: "Equity - Large Cap",
    holdingsOverlap: "Motilal Large Cap (+2 more)",
    hdfcExposure: "3% of this fund",
    aum: "₹15,300 Cr",
    holdingsVisible: "25%",
  },
  "Motilal Large Cap Fund - Direct Plan": {
    category: "Equity - Large Cap",
    holdingsOverlap: "Nippon Large Cap (+2 more)",
    hdfcExposure: "4% of this fund",
    aum: "₹12,500 Cr",
    holdingsVisible: "22%",
  },
  "HDFC Large Cap Fund": {
    category: "Equity - Large Cap",
    holdingsOverlap: "ICICI Prudential Midcap (+1 more)",
    hdfcExposure: "5% of this fund",
    aum: "₹18,000 Cr",
    holdingsVisible: "30%",
  },
  "ICICI Prudential Midcap Fund": {
    category: "Equity - Mid Cap",
    holdingsOverlap: "HDFC Large Cap (+1 more)",
    hdfcExposure: "2.5% of this fund",
    aum: "₹9,800 Cr",
    holdingsVisible: "18%",
  },
};


const SankeyChart = () => {
  const nodePositions = useRef([]);
  const [render, setRender] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);

  const handleNodeHover = (node) => {
    setHoveredNode(node.id);
  };

  const handleMouseLeave = () => {
    setHoveredNode(null);
  };

  const NodeTooltip = ({ node }) => {
    if (!fundInfo[node.id]) return null;



    return (
      <div className="bg-[#1E1E1E] text-white p-4 rounded-xl shadow-lg border border-gray-700 w-100">
        <div className="font-bold text-lg mb-2">Mutual Fund</div>
        <div className="text-md font-semibold mb-3">{node.id}</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#383838] p-2   rounded-md">Category
            <div className="  rounded-md text-gray-300">{fundInfo[node.id].category}</div>
          </div>
          <div className="bg-[#383838] p-2 rounded-md">Holdings Overlap
            <div className=" rounded-md text-gray-300">{fundInfo[node.id].holdingsOverlap}</div>
          </div>
          <div className="bg-[#383838] p-2 rounded-md">HDFC Ltd. Exposure
            <div className="  rounded-md text-gray-300">{fundInfo[node.id].hdfcExposure}</div>
          </div>
          <div className="bg-[#383838] p-2 rounded-md">% of MF holdings visible in diagram
            <div className="  rounded-md text-gray-300">{fundInfo[node.id].holdingsVisible}</div>
          </div>
          <div className="col-span-2 bg-[#383838] p-2 rounded-md">AUM (Assets Under Management)
            <div className="col-span-2   rounded-md text-gray-300">{fundInfo[node.id].aum}</div>
          </div>
        </div>
      </div>
    );
  };

  const LinkTooltip = ({ link }) => {
    return (
      <div className="bg-[#1E1E1E] text-white p-4 rounded-xl shadow-lg border border-gray-700 w-100">
        <div className="font-bold text-lg mb-2">Link Details</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#383838] p-2 rounded-md">
            Source
            <div className="p-2 rounded-md text-gray-300">{link.source.id}</div>
          </div>
          <div className="bg-[#383838] p-2 rounded-md">
            Target
            <div className="p-2 rounded-md text-gray-300">{link.target.id}</div>
          </div>
          <div className="col-span-2 bg-[#383838] p-2 rounded-md">
            Value
            <div className="p-2 rounded-md text-gray-300">{link.value}</div>
          </div>
        </div>
      </div>
    );
  };


  const isRightSideNode = (id) => data.links.some((link) => link.target === id);


  return (
    <div className="relative w-full h-[500px] p-6 rounded-lg mt-4 shadow-md" style={{ background: "transparent" }}>
      <div className="w-full h-full relative">
        <ResponsiveSankey
          data={data}
          margin={{ top: 20, right: 200, bottom: 20, left: 200 }}
          align="justify"
          colors={{ datum: "color" }}
          nodeOpacity={1}
          nodeThickness={16}
          nodeBorderWidth={1}
          nodeBorderRadius={8}
          nodeHoverOpacity={1}
          nodeHoverOthersOpacity={0.3}
          linkOpacity={0.8}  // Increase default opacity
          linkHoverOpacity={0.9}
          linkHoverOthersOpacity={0.5}
          enableLinkGradient={false}
          linkBlendMode="multiply"
          linkColor={(link) => "#A9A9A9"}  // Set default link color to gray
          linkHoverColor={(link) => link.source.color}  // Change link color on hover to source node's color
          labelPosition="outside"
          labelPadding={12}
          labelTextColor="#FFFFFF"
          label={(d) => (isRightSideNode(d.id) ? d.id : "")}
          nodeBorderColor={{ from: "color", modifiers: [["darker", 1.2]] }}
          nodeTooltip={NodeTooltip}
          linkTooltip={LinkTooltip}
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
                  height: node.height
                }));
                setRender(true);
              }
              return null;
            },
          ]}
          onMouseEnterNode={handleNodeHover}
          onMouseLeaveNode={handleMouseLeave}
        />
      </div>
      

      {render &&
        nodePositions.current
          .filter((node) => data.links.some((link) => link.source === node.id))
          .map((node) => (
            <div
              key={node.id}
              className="absolute px-3 py-2 rounded-lg text-white text-xs font-semibold shadow-lg w-[120px] h-[20px] flex flex-col items-center justify-center text-center"
              style={{
                backgroundColor: `${node.color}80`,
                top: `${node.y - -88}px`,
                left: `${node.x - -80}px`,
                transform: "translateY(-50%)",
                lineHeight: "1.2",
                opacity: hoveredNode ? (hoveredNode === node.id ? 1 : 0.3) : 1,
                transition: "opacity 0.2s ease",
                height: "auto",
                minHeight: "60px"
              }}
              onMouseEnter={() => handleNodeHover(node)}
              onMouseLeave={handleMouseLeave}
            >
              {formatName(node.id).split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ))}
    </div>
  );
};

export default SankeyChart;
