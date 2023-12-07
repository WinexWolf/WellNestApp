import React, { useState } from "react";
import TitleBar from "./titlebar";
import InstagramIcon from "../../images/Instagram.png";
import WhatsAppIcon from "../../images/Whatsapp.png";
import Modal from "./modal";

function Mood5() {
  const [openModal, setOpenModal] = useState(false);
  const [app, setApp] = useState('Instagram');

    const handleModal = () => {
        if (openModal) {
            setOpenModal(false);
        }
        if (!openModal) {
            setOpenModal(true);
        }
    };
    

  return (
    <div>
    <TitleBar showBackButton link={"/moodTrack/mood4"} />
    <div className="flex flex-col items-center justify-center">
      <div className="w-11/12 h-[369px] bg-sky-300 top-[70px] mt-32 bg-opacity-20 rounded-[20px] flex flex-col items-center ">
        <div className="text-center font-cabin text-neutral-800 mt-4 text-3xl font-normal">
          Share Mood Data
        </div>
        <div className="text-center font-cabin px-2 text-neutral-800 mt-4 text-base font-normal font-cabin">
          Select the aplication you’d like to share your mood data on from the
          applications below! <br></br> <br></br>
          You can share it in private chats, public chats, feeds, stories and
          more depending on the application.
        </div>
        <div
          className="w-[300px] h-[56px] bg-white-500 rounded-[10px] mt-3 flex items-center px-2 gap-3"
          onClick={() => {
            setApp("Instagram");
            handleModal();
          }}
        >
          <img src={InstagramIcon}></img>
          Instagram
        </div>
        <div
          className="w-[300px] h-[56px] bg-white-500 rounded-[10px] mt-3 flex items-center px-2 gap-3"
          onClick={() => {
            handleModal();
            setApp("WhatsApp");
          }}
        >
          <img src={WhatsAppIcon}></img>
          WhatsApp
        </div>
        {openModal && (
          <Modal
            onOk={handleModal}
            mt={`mt-28`}
            modalText={`Your Mood Data is Successfully Shared on ${app}`}
          ></Modal>
        )}
      </div>
    </div>
    </div>
  );
}

export default Mood5;
