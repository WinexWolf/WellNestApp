import React from "react";
import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TitleBar = ({ showBackButton, link }) => {
  return (
    <div className="flex items-center justify-between bg-blue-500 h-14 text-white font-cabin font-medium uppercase text-sm leading-6 pt-0 pb-2 px-4">
      {showBackButton && (
        <div className="cursor-pointer">
          <IconButton
            color="inherit"
            onClick={() => (window.location.href = link)}
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
      )}
      <div className="w-full h-7 text-white flex items-center text-left text-sm font-medium font-cabin uppercase leading-normal tracking-tight ml-1">
        WELLNEST: MOOD TRACKING FEATURE
      </div>
    </div>
  );
};

export default TitleBar;
