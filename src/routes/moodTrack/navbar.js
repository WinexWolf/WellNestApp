import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Set the active tab based on the current URL
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveItem("Therapy");
    } else if (pathname.startsWith("/moodTrack")) {
      setActiveItem("Mood");
    } else if (pathname.startsWith("/play")) {
      setActiveItem("Play");
    } else if (pathname.startsWith("/rewards")) {
      setActiveItem("Rewards");
    } else {
      setActiveItem(null);
    }
  }, [location]);

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
      <Link
        style={{
          textDecoration: "none", // Remove underline
          color: "inherit", // Inherit the color from the parent
        }}
        to={path}
      >
        {item}
      </Link>
    </div>
  );

  return (
    <nav className="fixed bottom-0 w-auto shadow-md">
      <div className="flex w-auto justify-between px-4">
        {renderItem("Therapy", "/")}
        {renderItem("Mood", "/moodTrack/mood0")}
        {renderItem("Play", "/play")}
        {renderItem("Rewards", "/rewards")}
      </div>
    </nav>
  );
};

export default BottomNavbar;
