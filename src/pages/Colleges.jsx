import React, { useState } from "react";
import { TbFilterPlus } from "react-icons/tb";
import FeaturesCard from "../components/FeaturesCard";
import CollegeCard from "../components/CollegeCard";
import BarChart from "../components/BarChart";
import Button from "../components/Button";
import BlurSSImage from "../assets/blurSS.png";
import Modal from "../components/Modal";

const Colleges = () => {
  const [choices, setChoices] = useState([
    "College Life",
    "Placement",
    "Alumini",
    "Infrastructure",
    "Academic Load",
    "Accomodation",
    "Research",
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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

  const [selected, setSelected] = useState([]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = parseInt(e.dataTransfer.getData("index"));
    const draggedItem = choices[dragIndex];

    let newItems = choices.filter((item, index) => index !== dragIndex);
    newItems.splice(dropIndex, 0, draggedItem);

    setChoices(newItems);
  };

  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <div className="w-1/4 bg-[#C4DAFF] rounded-2xl drop-shadow-2xl p-5">
        <div className="flex justify-between border-b-2 border-black pb-5">
          <h3 className="text-3xl">Features</h3>
          <TbFilterPlus
            size={35}
            className="cursor-pointer font-thin"
            onClick={toggleModal}
          />
        </div>
        <div className="my-4">
          {choices.map((ele, index) => (
            <div
              className="flex justify-between gap-4 items-center mb-3"
              key={index}
            >
              <span>{index + 1}.</span>
              <FeaturesCard
                title={ele}
                index={index}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
              />
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
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4 py-5 pr-5 h-screen overflow-hidden">
        <div className="bg-[#C4DAFF] p-2 flex flex-col justify-end h-fit rounded-xl drop-shadow-lg border">
          <select
            name="colleges"
            id="colleges"
            className="outline-none p-2 m-4 rounded-xl w-[50%]"
          >
            {colleges.map((college, index) => (
              <option value={college.name} key={index}>
                {college.name}
              </option>
            ))}
          </select>
          <BarChart />
        </div>
        <div className="bg-[#C4DAFF] flex flex-col gap-2 h-fit rounded-xl drop-shadow-lg border mt-5 px-5 py-3">
          <span className="italic w-fit m-auto mb-2">Compare two Colleges</span>
          <div className="flex items-center gap-3">
            <span>1.</span>
            <select
              name="colleges"
              id="colleges"
              className="outline-none p-2 rounded-xl w-[100%]"
            >
              {colleges.map((college, index) => (
                <option value={college.name} key={index}>
                  {college.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <span>2.</span>
            <select
              name="colleges"
              id="colleges"
              className="outline-none p-2 rounded-xl w-[100%]"
            >
              {colleges.map((college, index) => (
                <option value={college.name} key={index}>
                  {college.name}
                </option>
              ))}
            </select>
          </div>
          <Button title={"Compare"} handleClick={() => {}} className={"mt-2"} />
        </div>
        <div
          className="bg-[#C4DAFF] h-fit rounded-xl drop-shadow-lg border mt-5 flex flex-col gap-2 py-5"
          style={{
            backgroundImage: `url(${BlurSSImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Button title={"Preview"} handleClick={() => {}} className={""} />
          <Button title={"Download"} handleClick={() => {}} />
        </div>
      </div>
      {isOpen && (
        <Modal
          toggleModal={toggleModal}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

export default Colleges;
