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

export default function BarChart() {
  const labels = [
    "College Life",
    "Placement",
    "Alumini",
    "Infrastructure",
    "Academic Load",
    "Accomodation",
    "Research",
  ];
  const data = {
    labels,
    datasets: [
      {
        minBarLength:20,
        maxBarThickness: 50,
        barPercentage: 0.7,

        label: "Stats",
        data: [
          4.89546998, 4.82206209, 3.88327817, 1.43458175, 4.14694159,
          3.60963966, 4.8832994,
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
