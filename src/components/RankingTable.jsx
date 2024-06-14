import React from "react";

const RankingsTable = ({ data }) => {
  // console.log(data)

  const renderTableSubHeader = () => {
    return (
      <tr>
        <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Department
        </th>
        <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Cutoff Ranks 2018
        </th>
        {/* <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Closing Rank 2018
        </th> */}
        <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Cutoff Ranks 2019
        </th>
        {/* <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Closing Rank 2019
        </th> */}
        <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Cutoff Ranks 2020
        </th>
        {/* <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Closing Rank 2020
        </th> */}
        <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Cutoff Ranks 2021
        </th>
        {/* <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Closing Rank 2021
        </th> */}
        <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Cutoff Ranks 2022
        </th>
        {/* <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Closing Rank 2022
        </th> */}
        <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Cutoff Ranks 2023
        </th>
        {/* <th className="px-4 py-2 border border-gray-300 bg-gray-100">
          Closing Rank 2023
        </th> */}
      </tr>
    );
  };

  const renderTableRows = (entries) => {
    if (entries.length === 0) {
      return (
        <tr>
          <td
            colSpan="13"
            className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold text-center text-2xl"
          >
            Not Found!
          </td>
        </tr>
      );
    }
    return entries?.map((entry, index) => (
      <tr key={index}>
        <td className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold">
          {entry.Department}
        </td>
        <td className="px-4 py-2 border text-center">
          {entry.Opening_Rank_2018} - {entry.Closing_Rank_2018}
        </td>
        {/* <td className="px-4 py-2 border text-center">
          {entry.Closing_Rank_2018}
        </td> */}
        <td className="px-4 py-2 border text-center">
          {entry.Opening_Rank_2019} - {entry.Closing_Rank_2019}
        </td>
        {/* <td className="px-4 py-2 border text-center">
          {entry.Closing_Rank_2019}
        </td> */}
        <td className="px-4 py-2 border text-center">
          {entry.Opening_Rank_2020} - {entry.Closing_Rank_2020}
        </td>
        {/* <td className="px-4 py-2 border text-center">
          {entry.Closing_Rank_2020}
        </td> */}
        <td className="px-4 py-2 border text-center">
          {entry.Opening_Rank_2021} - {entry.Closing_Rank_2021}
        </td>
        {/* <td className="px-4 py-2 border text-center">
          {entry.Closing_Rank_2021}
        </td> */}
        <td className="px-4 py-2 border text-center">
          {entry.Opening_Rank_2022} - {entry.Closing_Rank_2022}
        </td>
        {/* <td className="px-4 py-2 border text-center">
          {entry.Closing_Rank_2022}
        </td> */}
        <td className="px-4 py-2 border text-center">
          {entry.Opening_Rank_2023} - {entry.Closing_Rank_2023}
        </td>
        {/* <td className="px-4 py-2 border text-center">
          {entry.Closing_Rank_2023}
        </td> */}
      </tr>
    ));
  };

  return (
    <div>
      <table
        border="1"
        style={{
          marginBottom: "20px",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>{renderTableSubHeader()}</thead>
        <tbody>{renderTableRows(data)}</tbody>
      </table>
    </div>
  );
};

export default RankingsTable;
