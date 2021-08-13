import React from "react";
import { NavLink } from "react-router-dom";

const Reports = () => {
  return (
    <>
      <div className="outermost-container">
        <div className="outer-container">
          <h1>Report Charts</h1>
          <div className="inner-container">
            <NavLink to="#" className="link">
              Complaint type wise
            </NavLink>
            <NavLink to="#" className="link">
              Location wise
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
