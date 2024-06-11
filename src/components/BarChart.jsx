import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ seletedCollegeRatings }) {
  const labels = [
    "Placements",
    "Faculty & Course Curriculum",
    "Value for Money",
    "Infrastructure",
    "Crowd & Campus Life",
  ];
  const data = {
    labels,
    datasets: [
      {
        minBarLength: 20,
        maxBarThickness: 50,
        barPercentage: 0.7,

        label: "Stats",
        data: [
          seletedCollegeRatings["Placements"],
          seletedCollegeRatings["Faculty & Course Curriculum"],
          seletedCollegeRatings["Value for Money"],
          seletedCollegeRatings["Infrastructure"],
          seletedCollegeRatings["Crowd & Campus Life"],
        ],
        backgroundColor: "#334C8A",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Bar options={options} data={data} className="w-full" />;
}
