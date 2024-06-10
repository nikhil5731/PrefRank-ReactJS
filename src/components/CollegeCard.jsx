import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ collegeName, collegeBranch, index }) => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/6836/204d/8cd3702e949f299be228695104300383?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HP9PVVsg0EGtdOHHZhvo4Yq9KatITXSLf5Z2HhDKSoH~W9G6UtPPl76u27V985e9rSgf0M0ALh7qdIspevJkq4kD~T~K2cYt7lEiFI-4C4h8j6HQyfEKo8QJV4D7JDphjk5Zhi5XI7Vl-aw0-7GT-UMJ-aupoJuy5lj1VJiHCOno9lyQWgsRNoXSW6v~w9cuj~7vHQOak8nEyHxlBQ0NRousingNtWWwFFOC7XreDWEdU2zLQZYPXD5K32pc7R2xNab~dQRVGc-NuhtIq24nq1mVwNuJibLonGnomLKIpbxjSFUSrREjJVVtkicRj1yKbXQOykkDED1BpIpEMnv5bw__";
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
