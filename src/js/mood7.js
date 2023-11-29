import React, { useState } from "react";
import TitleBar from "./titlebar";
import BasicSelect from "./dropDown";

function Mood7() {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const names = [
    { value: 10, name: "Really Happy" },
    { value: 20, name: "Happy" },
    { value: 30, name: "Sad" },
    { value: 40, name: "Really Sad" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <TitleBar showBackButton link={"/mood4"} />
      <div className="w-[339px] h-[369px] bg-sky-300 top-[70px] mt-32 bg-opacity-20 rounded-[20px] flex flex-col items-center ">
        <div className="text-center font-cabin text-neutral-800 mt-4 text-3xl font-normal">
          How Do you Feel Today, My Friend?{" "}
        </div>
              <BasicSelect
            mt={"mt-14"}
          label={"Select the Mood to Update to here"}
          list={names}
        />
      </div>
    </div>
  );
}

export default Mood7;
