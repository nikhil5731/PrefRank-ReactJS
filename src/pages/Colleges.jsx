import React, { useEffect, useState } from "react";
import { TbFilterPlus } from "react-icons/tb";
import FeaturesCard from "../components/FeaturesCard";
import CollegeCard from "../components/CollegeCard";
import BarChart from "../components/BarChart";
import Button from "../components/Button";
import BlurSSImage from "../assets/blurSS.png";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Colleges = ({
  eligibleColleges,
  setEligibleColleges,
  ratings,
  branches,
  states,
  uniqueColleges,
  setRatings,
}) => {
  const navigate = useNavigate();
  const [choices, setChoices] = useState([
    "Placements",
    "Faculty & Course Curriculum",
    "Value for Money",
    "Infrastructure",
    "Crowd & Campus Life",
  ]);
  const [compareColleges, setCompareColleges] = useState({
    college1: "",
    college2: "",
  });
  const [isCheck, setIsCheck] = useState({
    Placements: true,
    "Faculty & Course Curriculum": true,
    "Value for Money": true,
    Infrastructure: true,
    "Crowd & Campus Life": true,
  });
  const [viewColleges, setViewColleges] = useState([]);
  const [seletedCollegeRatings, setSelectedCollegeRatings] = useState({});
  const weights = [1, 0.8, 0.6, 0.4, 0.2];

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [selected, setSelected] = useState({
    states: [],
    branches: [],
  });

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

  useEffect(() => {
    if (eligibleColleges.length <= 0) {
      alert("No College Found!");
      navigate("/");
    }
  }, [eligibleColleges, navigate]);

  useEffect(() => {
    if (ratings.length > 0) {
      setSelectedCollegeRatings(ratings[0]);
    }
  }, [ratings]);

  useEffect(() => {
    if (uniqueColleges.length > 1) {
      setCompareColleges({
        college1: uniqueColleges[0],
        college2: uniqueColleges[1],
      });
    }
  }, [uniqueColleges]);

  useEffect(() => {
    if (eligibleColleges) {
      let tempColleges = eligibleColleges;

      if (selected.states.length > 0) {
        tempColleges = tempColleges.filter((college) =>
          selected.states.includes(college.State)
        );
      }

      if (selected.branches.length > 0) {
        tempColleges = tempColleges.filter((college) =>
          selected.branches.includes(college.department)
        );
      }

      tempColleges = tempColleges.slice(0, 10);

      setViewColleges(tempColleges);
    }
  }, [eligibleColleges, selected]);

  useEffect(() => {
    if (eligibleColleges.length > 0 && ratings.length > 0) {
      let tempColleges = eligibleColleges?.map((college) => {
        let collegeName = college.institute_name;
        let newscore = 0;
        const ratingsArray = ratings.find(
          (item) =>
            item.Institute?.split("(")[1]?.split(")")[0].toLowerCase() ===
              collegeName?.split("(")[1]?.split(")")[0].toLowerCase() ||
            item.Institute?.split(" (")[0].toLowerCase() ===
              collegeName?.split(" (")[0].toLowerCase()
        );
        if (ratingsArray) {
          newscore =
            (ratingsArray[choices[0]] * weights[0] * isCheck[choices[0]] +
              ratingsArray[choices[1]] * weights[1] * isCheck[choices[1]] +
              ratingsArray[choices[2]] * weights[2] * isCheck[choices[2]] +
              ratingsArray[choices[3]] * weights[3] * isCheck[choices[3]] +
              ratingsArray[choices[4]] * weights[4] * isCheck[choices[4]]) /
            (weights[0] * isCheck[choices[0]] +
              weights[1] * isCheck[choices[1]] +
              weights[2] * isCheck[choices[2]] +
              weights[3] * isCheck[choices[3]] +
              weights[4] * isCheck[choices[4]]);
          return { ...college, overallRating: parseFloat(newscore) };
        }
        return college;
      });
      tempColleges.sort((a, b) => {
        const rating1 = a.overallRating || 0;
        const rating2 = b.overallRating || 0;
        const avg1 = (a.Opening_Rank_2024 + a.Closing_Rank_2024) / 2;
        const avg2 = (b.Opening_Rank_2024 + b.Closing_Rank_2024) / 2;
        const priorityScore1 = rating1 / avg1;
        const priorityScore2 = rating2 / avg2;
        return priorityScore2 - priorityScore1;
      });

      setEligibleColleges(tempColleges);
    }
  }, [choices, isCheck]);

  useEffect(() => {
    const getRatings = async () => {
      let tempColleges = [];
      eligibleColleges.forEach((college) => {
        if (!tempColleges.includes(college.institute_name))
          tempColleges.push(college.institute_name);
      });
      const ratings = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/get-ratings`,
        {
          colleges: tempColleges,
        }
      );
      setRatings(ratings.data);
    };
    getRatings();
  }, [eligibleColleges]);

  return (
    <>
      <div className="h-screen w-screen hidden md:flex">
        <div className="w-1/4 bg-[#C4DAFF] rounded-2xl drop-shadow-2xl p-5">
          <div className="flex justify-between border-b-2 border-black pb-5">
            <h3 className="text-3xl">Features</h3>
            <TbFilterPlus
              size={35}
              className="cursor-pointer font-thin"
              onClick={toggleModal}
            />
          </div>
          <div className="my-4 w-full overflow-x-auto">
            {choices?.map((ele, index) => (
              <div className="flex items-center gap-3 w-full mb-5" key={index}>
                <span>{index + 1}.</span>
                <FeaturesCard
                  title={ele}
                  index={index}
                  handleDragStart={handleDragStart}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  isChecked={isCheck}
                  setIsChecked={setIsCheck}
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
            {viewColleges?.map((ele, index) => (
              <CollegeCard
                collegeName={ele.institute_name}
                collegeBranch={ele.department}
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
              defaultValue={seletedCollegeRatings.Institute}
              onChange={(e) => {
                const collegeName = e.target.value;
                const ratingsArray = ratings.find(
                  (item) =>
                    item.Institute?.split("(")[1]
                      ?.split(")")[0]
                      .toLowerCase() ===
                      collegeName?.split("(")[1]?.split(")")[0].toLowerCase() ||
                    item.Institute?.split(" (")[0].toLowerCase() ===
                      collegeName?.split(" (")[0].toLowerCase()
                );
                setSelectedCollegeRatings(ratingsArray);
              }}
            >
              {uniqueColleges?.map((college, index) => (
                <option value={college} key={index}>
                  {college}
                </option>
              ))}
            </select>
            <BarChart seletedCollegeRatings={seletedCollegeRatings} />
          </div>
          <div className="bg-[#C4DAFF] flex flex-col gap-2 h-fit rounded-xl drop-shadow-lg border mt-5 px-5 py-3">
            <span className="italic w-fit m-auto mb-2">
              Compare two Colleges
            </span>
            <div className="flex items-center gap-3">
              <span>1.</span>
              <select
                name="college1"
                id="college1"
                value={compareColleges.college1}
                className="outline-none p-2 rounded-xl w-[100%]"
                onChange={(e) => {
                  setCompareColleges({
                    ...compareColleges,
                    college1: e.target.value,
                  });
                }}
              >
                {/* <option value="">Choose a college1</option> */}
                {uniqueColleges?.map(
                  (college, index) =>
                    college !== compareColleges.college2 && (
                      <option value={college} key={index}>
                        {college}
                      </option>
                    )
                )}
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span>2.</span>
              <select
                name="college2"
                id="college2"
                value={compareColleges.college2}
                className="outline-none p-2 rounded-xl w-[100%]"
                onChange={(e) => {
                  setCompareColleges({
                    ...compareColleges,
                    college2: e.target.value,
                  });
                }}
              >
                {/* <option value="">Choose a college2</option> */}
                {uniqueColleges?.map(
                  (college, index) =>
                    college !== compareColleges.college1 && (
                      <option value={college} key={index}>
                        {college}
                      </option>
                    )
                )}
              </select>
            </div>
            <Button
              title={"Compare"}
              handleClick={() => {
                if (
                  compareColleges.college1.length < 1 ||
                  compareColleges.college2.length < 1
                ) {
                  alert("Choose both colleges!");
                  return;
                }
                navigate(
                  `/compareColleges?college1=${compareColleges.college1}&college2=${compareColleges.college2}`
                );
              }}
              className={"mt-2"}
            />
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
            branches={branches}
            states={states}
          />
        )}
      </div>
      <div className="flex justify-center items-center h-screen bg-gray-200 text-2xl text-center px-5 my-auto md:hidden">
        Please Use Desktop for better experience!
      </div>
    </>
  );
};

export default Colleges;
