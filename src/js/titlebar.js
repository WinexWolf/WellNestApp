import React from "react";

const TitleBar = ({ showBackButton }) => {
  return (
    <div className="flex items-center justify-between bg-blue-500 h-14 text-white font-cabin font-medium uppercase text-sm leading-6 pt-0 pb-2 px-4">
      <div className="w-auto h-7 text-white text-left  text-sm font-medium font-cabin uppercase leading-normal tracking-tight">
        WELLNEST: MOOD TRACKING FEATURE
      </div>
      {showBackButton && (
        <div className="cursor-pointer">
          <div className="w-[60px] h-[30px] px-4 py-1.5 bg-green-600 rounded shadow justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-sm font-medium font-cabin uppercase leading-normal tracking-tight">
              Back
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleBar;
