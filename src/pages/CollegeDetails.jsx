import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CollegeInfo from "../components/CollegeInfo";

const CollegeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selected, setSelected] = useState("College Info");

  const navBar = ["College Info", "Review", "Cutoff", "QnA", "Scholarship"];

  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/6836/204d/8cd3702e949f299be228695104300383?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HP9PVVsg0EGtdOHHZhvo4Yq9KatITXSLf5Z2HhDKSoH~W9G6UtPPl76u27V985e9rSgf0M0ALh7qdIspevJkq4kD~T~K2cYt7lEiFI-4C4h8j6HQyfEKo8QJV4D7JDphjk5Zhi5XI7Vl-aw0-7GT-UMJ-aupoJuy5lj1VJiHCOno9lyQWgsRNoXSW6v~w9cuj~7vHQOak8nEyHxlBQ0NRousingNtWWwFFOC7XreDWEdU2zLQZYPXD5K32pc7R2xNab~dQRVGc-NuhtIq24nq1mVwNuJibLonGnomLKIpbxjSFUSrREjJVVtkicRj1yKbXQOykkDED1BpIpEMnv5bw__";

  return (
    <div className="bg-[#C4DAFF] h-screen w-screen overflow-hidden">
      {/* Top Header */}
      <div className="w-full h-[15%] mb-2 flex overflow-hidden drop-shadow-2xl">
        <div className="w-1/2 h-full bg-[#192952] text-white flex items-center pl-5 gap-5">
          <div className="flex items-center gap-4">
            <IoIosArrowBack
              className="cursor-pointer"
              size={30}
              onClick={() => {
                navigate("/colleges");
              }}
            />

            <span className="text-3xl pb-1">{id.toUpperCase()}</span>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-1/2 h-full overlayGradient2 relative"
        ></div>
      </div>
      <div className="w-full h-[85%]">
        {/* Navbar */}
        <div className="flex justify-between px-32 mt-5">
          {navBar.map((ele, index) => (
            <div
              className={`${
                selected === ele ? "bg-white italic drop-shadow-xl" : ""
              } py-4 w-48 text-center rounded-t-xl cursor-pointer`}
              key={index}
              onClick={() => setSelected(ele)}
            >
              {ele}
            </div>
          ))}
        </div>

        {/* Main Routes of College */}
        <div className="h-full w-full bg-white text-black drop-shadow-sm px-10 py-12 overflow-y-scroll">
          <CollegeInfo /> 
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
