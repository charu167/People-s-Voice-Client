import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import "./BarChart.css";
const BarChart = (props) => {
  return (
    <div className="bar-chart">
      <Bar
        data={{
          labels: props.labels,
          datasets: props.datasets,
        }}
        height={200}
        width={300}
        options={{
          maintainAspectRation: true,
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default BarChart;
