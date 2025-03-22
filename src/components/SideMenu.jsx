import React, { useState } from 'react';

const SideMenu = () => {
  const [active, setActive] = useState('PHA'); // Default active menu

  return (
    <div className="w-60  h-screen p-4 overflow-y-auto "style={{ backgroundColor: "#1E1E1E" }}>
      
      <ul>
        {['PHA', 'Fund Analysis', 'Holdings', 'Transactions'].map((item) => (
          <li key={item} className="mb-4">
            <button
              className={`w-full text-left py-2 px-4 rounded ${
                active === item ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700'
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
