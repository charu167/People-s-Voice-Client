import React from "react";
import { NavLink } from "react-router-dom";

const PriorityComplaints = () => {
  return (
    <div className="outermost-container">
      <div className="inner-container">
        <div className="dashboard">
          <div className="dashboard-item">
            <div className="dashboard-title">Complaint Dashboard</div>
            <div className="dashboard-data">
              <div className="dash-card">
                <div className="dash-card-half">
                  <span>New</span>
                </div>
                <div className="dash-card-half">
                  <span>69</span>
                  <NavLink to="#">view</NavLink>
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-card-half">
                  <span>In Process</span>
                </div>
                <div className="dash-card-half">
                  <span>69</span>
                  <NavLink to="#">view</NavLink>
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-card-half">
                  <span>Completed</span>
                </div>
                <div className="dash-card-half">
                  <span>69</span>
                  <NavLink to="#">view</NavLink>
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
