import React from "react";
import { TbFilterPlus } from "react-icons/tb";
import FeaturesCard from "../components/FeaturesCard";
import CollegeCard from "../components/CollegeCard";

const Colleges = () => {
  const choices = [
    "College Life",
    "Placement",
    "Alumini",
    "Infrastructure",
    "Academic Load",
    "Accomodation",
    "Research",
  ];
  const colleges = [
    { name: "IIT Bombay", branch: "Computer Science and Engineering" },
    { name: "IIT Delhi", branch: "Electrical Engineering" },
    { name: "IIT Madras", branch: "Mechanical Engineering" },
    { name: "IIT Kanpur", branch: "Civil Engineering" },
    { name: "IIT Kharagpur", branch: "Chemical Engineering" },
    { name: "IIT Roorkee", branch: "Biotechnology" },
    { name: "IIT Guwahati", branch: "Aerospace Engineering" },
    {
      name: "IIT Hyderabad",
      branch: "Metallurgical and Materials Engineering",
    },
    { name: "IIT Gandhinagar", branch: "Environmental Engineering" },
    { name: "IIT Indore", branch: "Computer Science and Engineering" },
  ];

  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <div className="w-1/4 bg-[#C4DAFF] rounded-2xl drop-shadow-2xl p-5">
        <div className="flex justify-between border-b-2 border-black pb-5">
          <h3 className="text-3xl">Features</h3>
          <TbFilterPlus size={35} className="cursor-pointer font-thin" />
        </div>
        <div className="my-4">
          {choices.map((ele, index) => (
            <div className="flex justify-between gap-4 items-center mb-3">
              <span>{index + 1}.</span>
              <FeaturesCard title={ele} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <span className="text-center block my-5 italic text-xl font-bold">
          Top 10 colleges according to your prefrences
        </span>
        <div className="h-[85%] w-[80%] bg-gray-100 m-auto rounded-2xl shadow-inner-new p-5 overflow-y-scroll">
          {colleges.map((ele, index) => (
            <CollegeCard
              collegeName={ele.name}
              collegeBranch={ele.branch}
              index={index + 1}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4 p-5 flex flex-col gap-5">
        <div className="bg-[#C4DAFF] h-[60%] rounded-xl drop-shadow-lg"></div>
        <div className="bg-[#C4DAFF] h-[40%] rounded-xl drop-shadow-lg"></div>
      </div>
    </div>
  );
};

export default Colleges;
