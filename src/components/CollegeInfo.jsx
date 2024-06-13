import React, { useEffect, useState } from "react";
import RankingsTable from "./RankingTable";

const CollegeInfo = ({ selected, setSelected, collegeDetails }) => {
  const topics = ["NIRF Ranking", "Courses and Fees", "Placements"];

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

  const [selectedQuota, setSelectedQuota] = useState({
    state: "OS",
    category: "OPEN-Gender-Neutral",
  });
  const splitText = (text) => {
    // Use regular expression to split the text at numbered indices
    return text?.split(/\s(?=\d+\.)/)?.map((item) => item.trim());
  };

  const newsLinksText = collegeDetails?.News_link;
  const newsText = collegeDetails?.News;
  const reviewText = collegeDetails?.Review?.replace(/\n/g, "<br>");
  const scolarships = collegeDetails?.Scholarship_Details?.replace(
    /\n/g,
    "<br>"
  );
  const news = splitText(newsText);
  const review = splitText(reviewText);
  const newsLinks = splitText(newsLinksText);

  const temp1 = {
    "College Info": (
      <div className="text-black pb-[5rem] pt-5">
        {topics?.map((topic, index) => (
          <div>
            <div key={index} className="text-black font-bold text-xl">
              {index + 1}. {topic}
            </div>
            <div className="mx-10 mb-5">
              {topic === "Placements" && (
                <span className="text-lg">{collegeDetails.Placements}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
    Review: (
      <div
        dangerouslySetInnerHTML={{ __html: review }}
        className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-800 text-lg font-semibold h-[100%] overflow-auto"
      ></div>
    ),
    Cutoff: (
      <div className="pb-24">
        <div className="flex justify-between items-end my-5">
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
              className="text-lg outline-none p-3 border border-black rounded-xl mr-5"
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
    News: (
      <div className="py-5 pb-24">
        <div className="mx-auto mb-5 max-w-5xl">
          <h3 className="text-3xl font-bold mx-auto text-center mb-8">
            Recent News:
          </h3>
          {news?.map((text, index) => (
            <div key={index} className="mb-4 py-1 border-b border-gray-400">
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
    ),
    Scholarship: (
      <div
        dangerouslySetInnerHTML={{ __html: scolarships }}
        className="bg-white rounded-lg shadow-lg p-6 text-gray-800 text-lg font-semibold pb-24 "
      ></div>
    ),
  };

  return temp1[selected];
};

export default CollegeInfo;
