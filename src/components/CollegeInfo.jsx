import React, { useState } from "react";
import RankingsTable from "./RankingTable";

const CollegeInfo = ({ selected, setSelected, collegeDetails }) => {
  const topics = ["About", "Courses Info", "News"];

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
  const data = [
    { course: "Mathematics", fees: "$200", eligibility: "High School" },
    { course: "Physics", fees: "$250", eligibility: "High School" },
    { course: "Chemistry", fees: "$220", eligibility: "High School" },
  ];

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  // const lineWidth = 400; // Adjust as needed
  // const filledWidth = (percentage / 100) * lineWidth;

  const [selectedQuota, setSelectedQuota] = useState({
    state: Object.keys(collegeDetails.Cutoff)[0] || "OS",
    category: "OPEN-Gender-Neutral",
  });
  const splitText = (text) => {
    // Use regular expression to split the text at numbered indices
    return text?.split(/\s(?=\d+\.)/)?.map((item) => item.trim());
  };

  let counter = 1;

  const newsLinksText = collegeDetails?.News_link;
  const newsText = collegeDetails?.News;
  // const reviewText = collegeDetails?.Review?.replace(/\n/g, "<br>");
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
          <div key={index}>
            {/* <div key={index} className="text-black font-bold text-xl">
              {index + 1}. {topic}
            </div> */}
            <div className="mx-5 md:mx-10 mb-5">
              {topic === "About" && (
                <div className="h-fit overflow-auto rounded-xl border border-gray-700 drop-shadow-xl p-5">
                  <div>
                    <div className="flex flex-col items-center md:relative">
                      <h3 className="text-2xl font-bold w-full md:w-[60%] h-fit md:p-5 mx-auto text-center font-sans">
                        About {collegeDetails.Institute}
                      </h3>
                      <span className="bg-[#C4DAFF] text-lg text-center my-5 md:my-0 drop-shadow-lg w-fit h-fit p-5 rounded-xl italic md:absolute md:top-0 md:right-0">
                        NIRF Ranking: 30
                      </span>
                    </div>
                  </div>
                  <div className="text-purple-950 my-3 md:px-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore libero laboriosam obcaecati magnam voluptatibus
                    nam alias ex maiores hic suscipit quo iure unde, odit
                    consectetur earum rerum velit! Ipsa maxime itaque rerum
                    harum quas eius temporibus, veniam veritatis iusto enim
                    quidem optio labore nisi autem! Totam magni amet eius, animi
                    ratione ipsa! Exercitationem vel voluptatum consequatur id
                    tenetur soluta. Voluptatum assumenda vel maxime molestiae
                    mollitia odio, non ad quis praesentium, natus reiciendis
                    dolor aliquid id voluptates a laborum error doloribus eaque
                    quae magnam obcaecati quo velit officiis. Reprehenderit
                    beatae eius unde! Quo corporis odit ad corrupti natus
                    pariatur sapiente explicabo nobis eveniet laborum? Tempore
                    dolorem optio perferendis nisi dignissimos iusto enim
                    placeat atque molestiae saepe ullam, quod expedita? Rem iure
                    aliquam quam est quidem molestiae vel dicta asperiores,
                    similique officiis. Mollitia debitis expedita repellendus
                    nemo voluptatem quaerat quam laboriosam. Molestias quas amet
                    omnis sunt voluptas earum aut sed accusamus libero ipsum
                    maiores expedita eius, sit minus, suscipit ducimus ut.
                    Commodi qui similique eaque obcaecati laudantium saepe fuga
                    placeat corporis impedit labore dolores ab doloribus,
                    assumenda iste, quos voluptate sint laboriosam praesentium.
                    Porro tenetur delectus doloremque accusamus culpa, animi
                    fuga aspernatur? Nesciunt hic architecto beatae illo iste
                    rem animi dicta inventore cum tempora ipsam non in, sit
                    aperiam quos? Hic dolore omnis fugiat distinctio delectus
                    quae, praesentium aliquam esse atque minima exercitationem,
                    laboriosam natus laborum nesciunt, ipsa corrupti porro nisi
                    quas sequi eaque nemo veniam veritatis?
                  </div>
                </div>
              )}
              {topic === "Courses Info" && (
                <div>
                  <div className="container md:relative md:px-10 mx-auto mt-10 flex flex-col items-center justify-center py-10">
                    <h1 className="text-2xl md:top-1/2 md:left-0 md:-translate-y-1/2 text-[#122D74] font-bold mb-4 text-center font-sans md:absolute md:transform md:-rotate-90">
                      Courses Information
                    </h1>
                    <table className="bg-white border-2 border-gray-200 drop-shadow-lg mx-auto w-full md:w-[70%]">
                      <thead>
                        <tr>
                          <th className="p-4 border-b-2 w-1/3 border-gray-200 text-lg bg-[#C4DAFF]">
                            Courses
                          </th>
                          <th className="p-4 border-b-2 w-1/3 border-gray-200 text-lg">
                            Fees
                          </th>
                          <th className="p-4 border-b-2 w-1/3 border-gray-200 bg-[#C4DAFF] text-lg">
                            Eligibility
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index} className="border-2 border-gray-200">
                            <td className="p-4 text-center bg-[#C4DAFF]">
                              {item.course}
                            </td>
                            <td className="p-4 text-center ">{item.fees}</td>
                            <td className="p-4 text-center  bg-[#C4DAFF]">
                              {item.eligibility}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {topic === "News" && (
                <div className="py-3">
                  <div className="mb-5 max-w-5xl">
                    <h3 className="text-3xl font-bold mb-8">Recent News</h3>
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
                          Read More
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
              {Object.keys(collegeDetails.Cutoff).length > 0 &&
                Object.keys(collegeDetails.Cutoff).map((ele, index) => {
                  return (
                    <>
                      <option value={ele} key={index}>
                        {mapping[ele]}
                      </option>
                    </>
                  );
                })}
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
