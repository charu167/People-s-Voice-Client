import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Pie.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#b0c4de",
        "#87cefa",
        "#87ceeb",
        "#6495ed",
        "#4169e1",
        "#1e90ff",
      ],
      borderColor: [
        "#b0c4de",
        "#87cefa",
        "#87ceeb",
        "#6495ed",
        "#4169e1",
        "#1e90ff",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function Pie1() {
  return (
    <div className="pie">
      <Doughnut data={data} options={options} />
    </div>
  );
}
