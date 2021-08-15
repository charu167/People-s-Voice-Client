import React from "react";
import { NavLink } from "react-router-dom";

const PriorityComplaints = () => {
  return (
    <div className="outermost-container">
      <div className="inner-container">
        <div className="dashboard">
          <div className="dashboard-item">
            <div className="dashboard-title">Priority Complaints</div>
            <div className="dashboard-data">
              <div className="dash-card">
                <div className="dash-card-half">
                  <span>New</span>
                  <h1>69</h1>
                </div>
                <div className="dash-card-half">
                  <NavLink to="#"><i class="bx bxl-flutter"></i></NavLink>
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-card-half">
                  <span>In Process</span>
                  <h1>69</h1>
                </div>
                <div className="dash-card-half">
                  <NavLink to="#"><i class="bx bxl-flutter"></i></NavLink>
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-card-half">
                  <span>Completed</span>
                  <h1>69</h1>
                </div>
                <div className="dash-card-half">
                  <NavLink to="#"><i class="bx bxl-flutter"></i></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriorityComplaints;
