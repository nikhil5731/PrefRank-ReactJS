import React from "react";

const CollegeInfo = () => {
  const topics = [
    "News",
    "NIRF Ranking",
    "Notable Alumni",
    "Infrastructure",
    "FAQs",
    "Courses and Fees",
  ];
  return (
    <div className="text-black">
      {topics.map((topic, index) => (
        <div key={index} className="text-black">{index+1}. {topic}</div>
      ))}
    </div>
  );
};

export default CollegeInfo;
