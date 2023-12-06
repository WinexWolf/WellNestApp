import React from "react";
import { Button } from "@mui/material";

const TitleBar = ({ showBackButton, link }) => {
  return (
    <div className="flex items-center justify-between bg-blue-500 h-14 text-white font-cabin font-medium uppercase text-sm leading-6 pt-0 pb-2 px-4">
      <div className="w-full h-7 text-white text-left  text-sm font-medium font-cabin uppercase leading-normal tracking-tight ml-1">
        WELLNEST: MOOD TRACKING FEATURE
      </div>
      {showBackButton && (
        <div className="cursor-pointer">
          <Button
            variant="contained"
            href={link}
            style={{ fontSize: "14px", backgroundColor: "#24C72B" }}
          >
            Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default TitleBar;
