import React from "react";

const Button = ({ title, handleClick, className }) => {
  return (
    <button
      onClick={handleClick}
      className={
        "bg-[#334C8A] text-white py-3 rounded-lg w-44 m-auto " + className
      }
    >
      {title}
    </button>
  );
};

export default Button;
