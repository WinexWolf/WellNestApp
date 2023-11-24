// BottomNavbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const renderItem = (item, path) => (
    <div
      key={item}
      onClick={() => handleItemClick(item)}
      className={`cursor-pointer p-4 font-cabin w-full transition-all ${
        activeItem === item
          ? "bg-blue-500 text-white"
          : "bg-white hover:bg-gray-200 text-black"
      }`}
    >
      <Link to={path}>{item}</Link>
    </div>
  );

  return (
    <nav className="fixed bottom-0 w-auto shadow-md">
      <div className="flex w-auto justify-between px-4">
        {renderItem("Therapy", "/")}
        {renderItem("Mood", "/mood")}
        {renderItem("Play", "/")}
        {renderItem("Rewards", "/")}
      </div>
    </nav>
  );
};

export default BottomNavbar;
