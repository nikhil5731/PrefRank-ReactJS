import React from "react";

const CollegeCard = ({ collegeName, collegeBranch, index }) => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/24e8/bf64/430f32832c5f657bf713fcbcb2acf885?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QaR41MQUEq7bA9LF5HOCTzSCEzeymsf82O9Wgq-3wVva~-rqFD3hYKiaIZfRdSZT1v92eDi4-u7P-Woz3v41H4-fz4xf9kg4XYIegqJfOwBYaJTDEP4KemPlrfaBxH5KYALb3RaGKbHtKixyb-1MctFN3DannBodBBwOSktvylsbY5zi4bjE1140lRVi6d3ci1QwokxMuRxBv0W4W67b-8RdPlh-NaEmqMLalTUB0TtnDbzoG5fsolz6aJ1O56XkvN3uHl-1kAOjoBj~qIJH9pqG31RRIkRjd7uzt9-K7d20FUCaR941llximhhI757dRynBCi3YP5o2-oL6DugLWw__";
  return (
    <div className="w-full h-[20%] rounded-3xl mb-2 flex overflow-hidden">
      <div className="w-1/2 h-full bg-black text-white flex items-center pl-5 gap-5">
        <span className=" rounded-full p-5 bg-white w-5 h-5 text-black flex justify-center items-center font-bold">
          {index}
        </span>
        <div className="flex flex-col">
          <span className=" text-xl border-b-2 border-dashed pb-1">
            {collegeName}
          </span>
          <span className=" text-sm italic pt-1">{collegeBranch}</span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-1/2 h-full overlayGradient relative"
      ></div>
    </div>
  );
};

export default CollegeCard;
