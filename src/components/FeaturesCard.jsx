import React from "react";
import { FaInfo } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { RxDragHandleDots2 } from "react-icons/rx";

const FeaturesCard = ({ title }) => {
  return (
    <div className="flex items-center bg-slate-50 justify-between px-4 py-6 rounded-2xl w-full">
      <div className="flex gap-3 items-center">
        <input type="checkbox" name={title} id={title} />
        <span>{title}</span>
      </div>
      <div className="flex gap-3 items-center">
        <FaInfo />
        <GoPaperclip />
        <RxDragHandleDots2 size={25} className="cursor-grab" />
      </div>
    </div>
  );
};

export default FeaturesCard;
