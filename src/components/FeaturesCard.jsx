import React from "react";
import { FaInfo } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { RxDragHandleDots2 } from "react-icons/rx";

const FeaturesCard = ({
  index,
  title,
  handleDragStart,
  handleDragOver,
  handleDrop,
  isChecked,
  setIsChecked,
}) => {
  // const [isChecked, setIsChecked] = useState(true);

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, index)}
      onClick={() => {
        setIsChecked({ ...isChecked, [title]: !isChecked[title] });
      }}
      className="draggable-component flex items-center bg-slate-50 justify-between px-4 py-6 rounded-2xl w-full overflow-auto"
    >
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          name={title}
          id={title}
          checked={isChecked[title]}
        />
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
