import React, { useState } from "react";
import "./SingleComplain.css";

export default function SingleComplain() {
  const [data, setData] = useState([
    {
      title: "complaint id",
      actual_data: 10,
    },
    {
      title: "User",
      actual_data: "Clark Kent",
    },
    {
      title: "Filed On",
      actual_data: "16-03-2022",
    },
    {
      title: "Updated On",
      actual_data: "30-03-2022",
    },
    {
      title: "Complaint type",
      actual_data: "Water",
    },
    {
      title: "Complaint Description",
      actual_data: "The drainage pipe near Brooklyn area is broken and we have water cut from the past 4 days",
    },
    {
      title: "Location",
      actual_data: "Brooklyn",
    },
    {
      title: "Region",
      actual_data: "Akurdi",
    },
    {
      title: "Status",
      actual_data: "Resolved",
    },
  ]);

  return (
    <div className="SingleComplaint">
      <h1>Complaint Details</h1>
      <div className="tbl">
        {data.map((e, i) => {
          return (
            <>
              <div className="item" key={i}>
                <span className="title">{e.title}</span>
                <span className="data">{e.actual_data}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
