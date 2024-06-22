import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({
  collegeName,
  collegeBranch,
  index,
  collegeOpening,
  collegeClosing,
  collegeRating,
}) => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/6836/204d/8cd3702e949f299be228695104300383?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nL3bTmvDSHtW1DYyY7r0EccLnIaTvrr08Eb-tslcNxZircNIv7YAcc4st1-8-m2VzQa5sS-4ChDpHfsX5EZ9dyKVEcvoyhBtWbinWjsLxd1FxwRME3uzXss-bUPL1SspKRCWpL2AzW4OS525PSuhvQPTTkWSmWX4p1OTVrmFot56CFtvJrLtwVVMrjS0RdMhmY7XeydjNVQUbap~Qz2dihD3sdYNR8-5Kr3pTaPKKHyq99zxhyq2WcPsd-HbN8IrordsujUIOYjE5gEK74O5-Cz8uKDh~hNMWeHp36P2nyL-8WRAdAPNOP7Zj9GvR3pFvlhsp2Q~vMJhyGPENaSx1g__";
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
