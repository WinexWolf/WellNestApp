import React, { useState } from "react";
import TitleBar from "./titlebar";
import BasicSelect from "./dropDown";
import Modal from "./modal";

function Mood7() {
  const [isListOpen, setIsListOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleModal = () => {
    if (openModal) {
      // Save the selected mood to local storage
      localStorage.setItem("userMood", selectedValue);

      setOpenModal(false);
    }
    if (!openModal) {
      setOpenModal(true);
    }
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setOpenModal(true);
  };

  const names = [
    { value: "Really Happy", name: "Really Happy" },
    { value: "Happy", name: "Happy" },
    { value: "Sad", name: "Sad" },
    { value: "Really Sad", name: "Really Sad" },
  ];

  return (
    <>
      <TitleBar showBackButton link={"/moodTrack/mood3"} />
      <div className="flex flex-col items-center justify-center">
        <div className="w-[339px] h-[369px] bg-sky-300 top-[70px] mt-32 bg-opacity-20 rounded-[20px] flex flex-col items-center ">
          <div className="text-center font-cabin text-neutral-800 mt-4 text-3xl font-normal">
            How Do you Feel Today, My Friend?{" "}
          </div>
          <BasicSelect
            mt={"mt-14"}
            label={!openModal ? "Select the Mood to Update to here" : ""}
            list={names}
            onChange={handleSelectChange} // Pass the callback function
            bgColor={"white"}
          />
          {openModal && (
            <Modal
              showCancelButton
              onOk={handleModal}
              onCancel={() => {
                setOpenModal(false);
                setSelectedValue("");
              }}
              mt={`mt-24`}
              modalText={`You want to set/change your today’s mood to ${selectedValue} ?`}
              link={"/moodTrack/mood6"}
            ></Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default Mood7;
