import React, { useState, useEffect, useRef } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { GrUserSettings } from 'react-icons/gr';
import { FaRegBell } from 'react-icons/fa6';
import { PiSignOutBold } from 'react-icons/pi';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon

const TopMenu = () => {
  const [activeMenu, setActiveMenu] = useState('Portfolio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const menuRefs = useRef([]);

  const menuItems = ['Home', 'Portfolio', 'Mutual Funds', 'Tools', 'Transactions'];

  const handleMenuClick = (menu, index) => {
    setActiveMenu(menu);
    updateUnderline(index);
    setIsMenuOpen(false); // Close menu on selection (for mobile)
  };

  const updateUnderline = (index) => {
    const menuItem = menuRefs.current[index];
    if (menuItem) {
      const { offsetLeft, offsetWidth } = menuItem;
      setUnderlineStyle({
        left: offsetLeft + offsetWidth / 2,
        width: offsetWidth,
        transform: "translateX(-50%)"
      });
    }
  };

  useEffect(() => {
    const activeIndex = menuItems.indexOf(activeMenu);
    updateUnderline(activeIndex);
  }, []);

  return (
    <div className="relative p-5 flex justify-between items-center fixed w-full z-10 border-b-2 bg-[#1E1E1E] border-[#1E1E1E]">
      
      {/* Left Section: Logo & Menu */}
      <div className="flex items-center">
        <div className="text-blue-500 text-2xl font-bold mr-6 md:mr-44">d</div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu size={24} />
        </button>

        {/* Desktop Navigation Menu */}
        <div className={`absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-[#1E1E1E] md:bg-transparent flex flex-col md:flex-row md:space-x-10 items-start md:items-center shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden md:flex"}`}>
          {menuItems.map((menu, index) => (
            <button
              key={menu}
              ref={(el) => (menuRefs.current[index] = el)}
              className={`relative text-gray-400 hover:text-white transition-colors duration-300 pb-4 ml-5 md:ml-14 ${
                activeMenu === menu ? "text-white font-medium" : ""
              }`}
              onClick={() => handleMenuClick(menu, index)}
            >
              {menu}
            </button>
          ))}
        </div>

        {/* Blue Underline (Visible Only in Desktop View) */}
        <div
          className="absolute bottom-[-0px] h-[3px] bg-blue-500 ml-52 transition-all duration-300 hidden md:block"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
            transform: underlineStyle.transform,
            position: 'absolute',
          }}
        ></div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex space-x-6 md:space-x-10">
        <button className="text-gray-400 hover:text-white"><IoMdSearch size={20} /></button>
        <button className="text-gray-400 hover:text-white"><FaRegBell size={20} /></button>
        <button className="text-gray-400 hover:text-white"><GrUserSettings size={20} /></button>
        <button className="text-gray-400 hover:text-white"><PiSignOutBold size={20} /></button>
      </div>
    </div>
  );
};

export default TopMenu;
