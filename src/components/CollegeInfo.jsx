import React, { useState } from "react";
import RankingsTable from "./RankingTable";

const CollegeInfo = ({ selected, setSelected, collegeDetails }) => {
  const topics = ["NIRF Ranking", "Courses and Fees", "News"];

  const mapping = {
    HS: "Home State Quota",
    OS: "Other State Quota",
    AI: "All India Quota",
  };

  const categories = [
    "OPEN-Gender-Neutral",
    "OPEN-Female-only (including Supernumerary)",
    "OPEN (PwD)-Gender-Neutral",
    "OBC-NCL-Gender-Neutral",
    "OBC-NCL-Female-only (including Supernumerary)",
    "SC-Gender-Neutral",
    "SC-Female-only (including Supernumerary)",
    "ST-Gender-Neutral",
    "ST-Female-only (including Supernumerary)",
  ];

  const percentage = parseInt(
    (collegeDetails.Ratings["Overall Rating"] / 5) * 100
  );
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  // const lineWidth = 400; // Adjust as needed
  // const filledWidth = (percentage / 100) * lineWidth;

  const [selectedQuota, setSelectedQuota] = useState({
    state: "OS",
    category: "OPEN-Gender-Neutral",
  });
  const splitText = (text) => {
    // Use regular expression to split the text at numbered indices
    return text?.split(/\s(?=\d+\.)/)?.map((item) => item.trim());
  };

  let counter = 1;

  const newsLinksText = collegeDetails?.News_link;
  const newsText = collegeDetails?.News;
  const reviewText = collegeDetails?.Review?.replace(/\n/g, "<br>");
  const placementText = collegeDetails?.Placements?.replace(
    /\n/g,
    `<br><br>`
  ).replace(
    /Placements:/g,
    () => `<span style="font-weight:bold; color:#0d40c1;">${counter++})</span>`
  );
  const scolarships = collegeDetails?.Scholarship_Details?.replace(
    /\n/g,
    "<br>"
  );
  const news = splitText(newsText);
  // const review = splitText(reviewText);
  const newsLinks = splitText(newsLinksText);
  const placements = splitText(placementText);

  const temp1 = {
    "College Info": (
      <div className="text-black pb-[5rem] pt-5">
        {topics?.map((topic, index) => (
          <div>
            <div key={index} className="text-black font-bold text-xl">
              {index + 1}. {topic}
            </div>
            <div className="mx-5 md:mx-10 mb-5">
              {topic === "News" && (
                <div className="py-5">
                  <div className="mx-auto mb-5 max-w-5xl">
                    <h3 className="text-3xl font-bold mx-auto text-center mb-8">
                      Recent News:
                    </h3>
                    {news?.map((text, index) => (
                      <div
                        key={index}
                        className="mb-4 py-1 border-b border-gray-400"
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: text }}
                          className="text-md mr-3 font-semibold mb-2"
                        ></span>
                        <a
                          href={newsLinks[index].replace(/^\d+\. /, "") || ""}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-500 italic"
                        >
                          Link
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
    Placements: (
      <div className="bg-white rounded-lg shadow-lg p-6 md:pb-24 text-gray-800 text-lg font-semibold">
        <h3 className="text-3xl text-center mb-5">Placement Stats</h3>
        <div dangerouslySetInnerHTML={{ __html: placements }}></div>
      </div>
    ),
    Cutoff: (
      <div className="md:pb-24">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 my-5">
          <h2
            className="text-4xl font-bold"
            onClick={() => console.log(selectedQuota)}
          >
            Cutoffs
          </h2>
          <div>
            <select
              name=""
              onChange={(e) =>
                setSelectedQuota({ ...selectedQuota, state: e.target.value })
              }
              className="text-lg outline-none p-3 border border-black rounded-xl mb-3 md:mr-5"
            >
              {["OS", "HS", "AI"].map((ele) => (
                <>
                  <option value={ele}>{mapping[ele]}</option>
                </>
              ))}
            </select>
            <select
              name=""
              id=""
              onChange={(e) =>
                setSelectedQuota({ ...selectedQuota, category: e.target.value })
              }
              className="text-lg outline-none p-3 w-72 border border-black rounded-xl"
            >
              {categories?.map((ele) => (
                <>
                  <option value={ele}>{ele}</option>
                </>
              ))}
            </select>
          </div>
        </div>
        <RankingsTable
          data={
            collegeDetails.Cutoff &&
            collegeDetails.Cutoff[selectedQuota.state] &&
            collegeDetails.Cutoff[selectedQuota.state][selectedQuota.category]
              ? collegeDetails.Cutoff[selectedQuota.state][
                  selectedQuota.category
                ]
              : []
          }
        />
      </div>
    ),
    Review: (
      <div className="border-2 rounded-xl drop-shadow-lg my-10 w-full py-5 px-10 bg-white flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center font-bold w-full md:w-[45%]">
          <span className="text-center">{collegeDetails.Institute}</span>
          <div className="flex justify-center w-fit items-center m-5 relative">
            <svg
              width="250"
              height="250"
              viewBox="0 0 120 120"
              className="transform rotate-[135deg]"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#082437" />
                  <stop offset="100%" stopColor="#1A80C7" />
                </linearGradient>
              </defs>
              <circle
                className="text-gray-300"
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeDasharray={`${circumference * 0.75} ${
                  circumference * 0.25
                }`} // 3/4 circle, 1/4 empty
                strokeLinecap="round"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                rotate="180"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="15"
                strokeDasharray={circumference * 0.75}
                strokeDashoffset={offset}
                className="transition-stroke-dashoffset duration-300"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
              <div className="text-center">
                <div className="text-[#192952] text-5xl font-bold">
                  {collegeDetails.Ratings["Overall Rating"]}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[55%] gap-4 md:px-16">
          {Object.keys(collegeDetails.Ratings).map(
            (rating, index) =>
              rating !== "Institute" &&
              rating !== "Overall Rating" && (
                <div className="flex flex-col items-center my-2 w-full mt-2">
                  <div
                    key={index}
                    className="w-full flex justify-between px-5 md:px-16 font-black text-lg"
                  >
                    <span> {rating}:</span>
                    <span> {collegeDetails.Ratings[rating]}/5</span>
                  </div>
                  <div className="w-full">
                    <div className="w-full relative">
                      <div className="h-1 w-[90%] left-[6%] top-1 bg-black rounded-full absolute "></div>
                      <div
                        className="h-3 w-[90%] left-[6%] top-0 bg-[#1A7DC2] rounded-full absolute"
                        style={{
                          width: `${parseFloat(
                            (collegeDetails.Ratings[rating] / 5) * 100 * 0.9
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    ),
    Scholarship: (
      <div
        dangerouslySetInnerHTML={{ __html: scolarships }}
        className="bg-white rounded-lg shadow-lg p-6 text-gray-800 text-lg font-semibold md:pb-24 "
      ></div>
    ),
  };

  return temp1[selected];
};

export default CollegeInfo;
