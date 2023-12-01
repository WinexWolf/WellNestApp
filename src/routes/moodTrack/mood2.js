import React, { useState } from "react";
import TitleBar from "./titlebar";
import DarthVader from "../../images/DarthVader.png";
import downArrow from "../../images/downArrow.png";
import BasicSelect from "./dropDown";
import { Button } from "@mui/material";

function Mood2() {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const names = [
    { value: 10, name: "Darth Vader" },
    { value: 20, name: "Tom Hanks" },
    { value: 30, name: "Beyonce" },
  ];

  return (
    <>
      <TitleBar showBackButton link={"/moodTrack/mood1"} />
      <div className="flex flex-col items-center mt-12 py-20 h-screen bg-white">
        <div className="flex flex-col items-center">
          {/* Image */}
          <img
            className="w-[207px] h-[176px] mb-4"
            src={DarthVader}
            alt="Darth Vader"
          />
          <BasicSelect
            mt={"mt-6"}
            label={"Select the Avatar to chat with"}
            list={names}
            onChange={handleSelectChange}
          />
          {selectedValue !== "" && (
            <Button
              variant="contained"
              href="/moodTrack/mood8"
              className="mt-24 bg-sky-blue"
              style={{ fontSize: "10px" }}
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Mood2;
