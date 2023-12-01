import React from "react";

const Button = ({ label, icon }) => {
  return (
    <button className="flex items-center justify-between bg-blue-500 h-14 text-white font-cabin font-medium uppercase text-sm leading-6 pt-0 pb-2 px-4">
      <span>{label}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
