import React from 'react';
import { AiOutlineRise } from "react-icons/ai";
import { IoMdTrendingDown } from "react-icons/io";

const Card = ({ title,title2, value, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <div className="relative bg-gray-800 p-4 rounded-lg flex items-start">
      {/* Left Vertical Line */}
      <div className="absolute left-5 top-5 h-2/6 w-1 rounded-l-lg" style={{ backgroundColor: '#B2EFFF' }}></div>

      {/* Main Content */}
      <div className="flex-1  pl-5 ">
        <h3 className="text-gray-400 text-1xl max-w-[120px] ">{title}</h3>
        <h3 className="text-gray-400 text-1xl max-w-[150px] ">{title2}</h3>

        <p className="text-1xl font-semibold mt-2">{value}</p>
      </div>

      {/* Percentage Change at Top-Right */}
      <div className="flex items-center space-x-1">
        <span className={` flex  text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <AiOutlineRise /> : <IoMdTrendingDown />} {change}
        </span>
      </div>
    </div>
  );
};

export default Card;