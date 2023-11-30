import React, { useState } from "react";
import TitleBar from "./titlebar";
import DarthVader from "../images/DarthVaderProfile.png";
import ProfileIcon from "../images/Profile.png";
import SendIcon from "@mui/icons-material/Send";
import BasicSelect from "./dropDown";

const Mood8 = () => {
  const [messages, setMessages] = useState([
    { text: "How are you feeling my young apprentice?", isMine: false },
    { text: "The force senses your emotions.", isMine: false },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, isMine: true }]);
      setNewMessage(selectedValue);
    }
  };

   const names = [
     { value: "Really Happy", name: "Really Happy" },
     { value: "Happy", name: "Happy" },
     { value: "Sad", name: "Sad" },
     { value: "Really Sad", name: "Really Sad" },
  ];
  
  const [selectedValue, setSelectedValue] = useState("");

 const handleSelectChange = (event) => {
   setSelectedValue(event.target.value);
   handleSendMessage(); // Send a message when a value is selected
 };


  return (
    <>
      <TitleBar />
      <div className="w-600 p-5">
        <div className="h-[60vh] overflow-y-scroll rounded-8 p-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex justify-${
                message.isMine ? "end" : "start"
              } mb-10`}
            >
              {!message.isMine && (
                <img
                  className="w-15 h-10 rounded-full mr-5"
                  src={DarthVader}
                  alt="Friend"
                />
              )}
              <div
                className={`${
                  message.isMine
                    ? "bg-blue-500 text-white"
                    : "bg-blue-300 bg-opacity-20"
                } p-5 rounded-lg shadow-md`}
              >
                {message.text}
              </div>
              {message.isMine && (
                <img
                  src={ProfileIcon}
                  alt="Me"
                  className="w-10 h-10 rounded-full ml-5"
                />
              )}
            </div>
          ))}
        </div>
        <BasicSelect 
          mt={"mt-5"}
          bgColor={"blue"}
          textColor={"white"}
          label={"How are you feeling now?"}
          list={names}
          onChange={handleSelectChange} // Pass the callback function
        />
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-4 rounded-[10px] border border-neutral-400 mr-2"
            placeholder="Type a message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button
            className="p-2 bg-blue-500 text-white rounded-[10px] cursor-pointer"
            onClick={handleSendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Mood8;
