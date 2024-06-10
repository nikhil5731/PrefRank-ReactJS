import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ collegeName, collegeBranch, index }) => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/a23e/4f38/4b97ea138ef51b12016531552e24d1b5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G3-4gGERADAzXMg3V9yIRjgOR2rVOl8eEoFelFbT~xeyPgkthvqiGJs0iViyueAKERb6cQcFwV-ivw9gxj5NflL75VHx7BNDGDgv3V3bEHToDIupFaReTZgY7gFkQlMRAXp3iHOBAjQF9s7IzVCST8hQok-0-jE6eXStrFoWR4uAK7payT32smn7RWR1jITt-SBD1LVwNZEEk-YkivoeQQ7CC-FsrC9Sf-XkIgtJrd6K0HUSnChrRlXI5ZpQe2PTN~2WBViEzx-BR0KMqRALUf9piHEzdQ3moabc~IQq00nbaeUg-~DPeP0uKwJXmUaA65ohKV5gK1xkN4fThJbOdg__";
  return (
    <Link
      to={"/" + collegeName}
      className="w-full h-[20%] rounded-3xl mb-2 flex overflow-hidden drop-shadow-2xl"
    >
      <div className="w-[60%] h-full bg-black text-white flex items-center pl-5 gap-5">
        <span className=" rounded-full p-5 bg-white w-5 h-5 text-black flex justify-center items-center font-bold">
          {index}
        </span>
        <div className="flex flex-col w-[150%]">
          <span className="text-md border-b-2 border-dashed pb-1">
            {collegeName.length >= 60
              ? collegeName.slice(0, 60) + "..."
              : collegeName}
            {/* {("Lorem ipsum dolor sit, amet consectetur adipisicing elit. mm").length} */}
          </span>
          <span className="text-[12px] italic pt-1">
            {collegeBranch.split(" (")[0]}
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-[40%] h-full overlayGradient relative"
      ></div>
    </Link>
  );
};

export default CollegeCard;
