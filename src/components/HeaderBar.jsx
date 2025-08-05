import React from "react";
import { FiArrowLeft, FiHome, FiWifi, FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function HeaderBar() {
  return (
    <div className="flex justify-between items-center bg-white/10 backdrop-blur-md text-white rounded-xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 shadow-md w-full">
      <button className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition">
        <FiArrowLeft className="text-base sm:text-lg lg:text-xl" />
        <span className="text-sm sm:text-base lg:text-lg font-semibold">Home</span>
      </button>
      <div className="flex items-center space-x-4 sm:space-x-5 lg:space-x-6">
        <button className="hover:opacity-80 transition">
          <FiHome className="text-base sm:text-lg lg:text-xl" />
        </button>
        <button className="hover:opacity-80 transition">
          <FiWifi className="text-base sm:text-lg lg:text-xl" />
        </button>
        <button className="hover:opacity-80 relative transition">
          <FiBell className="text-base sm:text-lg lg:text-xl" />
          <span className="absolute -top-1 -right-1 sm:h-2 sm:w-2 h-1.5 w-1.5 bg-red-500 rounded-full" />
        </button>
        <button className="hover:opacity-80 transition">
          <FaUserCircle className="text-lg sm:text-xl lg:text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default HeaderBar;
