import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ modalText, showCancelButton, onCancel, onOk, mt, link }) => {
  return (
    <div
      className={`w-[250px] flex-col justify-start items-start inline-flex absolute ${mt}`}
    >
      <div className="bg-white rounded-[10px] shadow flex-col justify-start items-start flex">
        <div className="self-stretch px-4 pt-5 pb-2 justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 text-black text-opacity-90 text-base font-normal leading-normal">
            {modalText}
          </div>
        </div>
        <div className="self-stretch p-5 justify-between items-center gap-2 inline-flex">
          {showCancelButton && (
            <div
              className="w-9 px-2 py-1.5 rounded justify-center items-center gap-2 flex cursor-pointer"
              onClick={onCancel}
            >
              <div className="text-center text-red-500 text-sm font-medium uppercase leading-normal tracking-tight">
                Cancel
              </div>
            </div>
          )}
          <Link
            style={{
              textDecoration: "none", // Remove underline
              color: "inherit", // Inherit the color from the parent
            }}
            to={link}
          >
            <div
              className="w-9 px-2 py-1.5 rounded justify-center items-center gap-2 flex cursor-pointer ml-auto"
              onClick={onOk}
            >
              <div className="text-center text-sky-600 text-sm font-medium uppercase leading-normal tracking-tight">
                OK
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
