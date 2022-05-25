import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";

export default function LineChart(props) {
  return (
    <div className="line-chart">
      <Line
        data={{
          labels: props.labels,
          datasets: props.datasets,
        }}
        height={200}
        width={600}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
          maintainAspectRation: true,
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
