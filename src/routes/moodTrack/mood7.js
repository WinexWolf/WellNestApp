import React, { useState } from "react";
import TitleBar from "./titlebar";
import BasicSelect from "./dropDown";
import Modal from "./modal";
import EditIcon from "@mui/icons-material/Edit";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";

function Mood7() {
  const [isListOpen, setIsListOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const userMood = localStorage.getItem("userMood");
  const userMoodDesc = localStorage.getItem("userMoodDesc");

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

  const handleModal2= () => {
    if (openModal2) {
      setOpenModal2(false);
    }
    if (!openModal2) {
      setOpenModal2(true);
    }
  };

  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setOpenModal(true);
  };

  const saveMood = () => {
          localStorage.setItem("userMoodDesc", inputValue);

  }

  const names = [
    { value: "Really Happy", name: "Really Happy" },
    { value: "Happy", name: "Happy" },
    { value: "Sad", name: "Sad" },
    { value: "Really Sad", name: "Really Sad" },
  ];

  return (
    <>
      <TitleBar
        showBackButton
        link={"/moodTrack/mood6"}
        title="MOOD TRACKING"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="w-[90vw] h-[481px] bg-sky-300 top-[70px] mt-32 bg-opacity-20 rounded-[20px] flex flex-col items-center ">
          <div className="text-center font-cabin text-neutral-800 mt-4 text-3xl font-normal">
            How Do you Feel
            <br></br>Today, My Friend?
          </div>
          <BasicSelect
            mt={"mt-14"}
            label={userMood ? userMood : "Select the Mood to Update to here"}
            list={names}
            onChange={handleSelectChange} // Pass the callback function
            bgColor={"white"}
          />
          {/*   
          <InputLabel
            id="demo-simple-select-label"
            className="mt-4 flex items-start text-left justify-start"
            sx={{
              color: "black",
              textAlign: "left", // Set the text alignment to left
              // Add other styling properties if needed
            }}
          >
            Why were you {selectedValue} today?
          </InputLabel> */}
          {userMood && (
            <div className="flex flex-col mt-2 p-2 items-end bg-white rounded-[10px] font-cabin">
              <textarea
                value={userMoodDesc? userMoodDesc : inputValue}
                onChange={(e) => {
                  localStorage.removeItem("userMoodDesc");
                  setInputValue(e.target.value)
                }}
                className="w-[303px] h-[132px] resize-none bg-transparent outline-none p-1 border-none"
                placeholder={"Why were you " + userMood + " today?"}
              />

              <EditIcon
                style={{ cursor: "pointer" }}
                onClick={() => setOpenModal(true)}
              />
            </div>
          )}
          {inputValue && (
            <div className="flex justify-end items-end w-full mr-8 mt-10">
              <Button
                variant="contained"
                style={{ fontSize: "10px", backgroundColor: "#0087E8" }}
                onClick={() => {
                  saveMood();
                  handleModal2();
                }}
              >
                Save
              </Button>
            </div>
          )}

          {openModal2 && (
            <Modal
              onOk={handleModal2}
              mt={`mt-24`}
              link={'/moodTrack/mood4'}
              modalText={"Your “Mood for the Day” Entry has been saved!"}
            ></Modal>
          )}

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
            ></Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default Mood7;
