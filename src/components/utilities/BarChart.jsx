import React from "react";
import { Bar, Line, Pie, Radar, Bubble, Scatter } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div className="bar-chart">
      <Bar
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "new",
              data: [10, 20, 30, 25, 47, 50, 12, 46, 46, 67, 34, 56],
              backgroundColor: [" #F75D81"],
            },
            {
              label: "in process",
              data: [12, 25, 20, 45, 47, 40, 45, 73, 34, 56, 49, 52],
              backgroundColor: [" #42A5F6"],
            },
            {
              label: "completed",
              data: [5, 10, 14, 30, 28, 34, 29, 40, 36, 49, 28, 29],
              backgroundColor: ["#7ED320"],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRation: true,
          legend: {
            display: true,
            position: 'right',
          },

          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  steps: 5,
                  stepValue: 20,
                  max:100
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
