import React, { useState } from "react";
import { Bar, Line, Pie, Radar, Bubble, Scatter } from "react-chartjs-2";
import "./BarChart.css";
const BarChart = (props) => {
  const [GraphType, setGraphType] = useState(1);
  return (
    <div className="bar-chart">
      <button onClick={() => setGraphType(!GraphType)}>
        Change Graph Type
      </button>

      {GraphType ? (
        <Bar
          data={{
            labels: props.labels,
            datasets: props.datasets,
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRation: true,
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      ) : (
        <Line
          data={{
            labels: props.labels,
            datasets: props.datasets,
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRation: true,
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      )}
    </div>
  );
};

export default BarChart;
