import React from "react";
import TitleBar from "./titlebar";
import { Button } from "@mui/material";

function Mood6() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TitleBar showBackButton link={"/mood1"} />
      <div className="w-[328px] h-[492px] bg-sky-300 top-[7px] mt-12 bg-opacity-20 rounded-[20px] flex flex-col items-center ">
        <div className="text-center font-cabin text-neutral-800 mt-4 text-3xl font-normal">
          Current Mood:Really Happy{" "}
        </div>
        <div className="bg-blue-500 h-[223px] w-[223px] mt-10 rounded-full flex items-center justify-center">
          <span className="text-white text-3xl font-bold text-center font-cabin">
            Update Your Saved Mood Setting{" "}
          </span>
        </div>
        <div className="flex justify-end items-end w-full mr-4 mt-10">
          <Button
            variant="contained"
            href="/mood4"
            style={{ fontSize: "10px", backgroundColor: "#0087E8" }}
          >
            View/Share Records
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Mood6;