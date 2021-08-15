import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="outermost-container">
        <div className="inner-container">
          <div className="dashboard">
            <div className="dashboard-item">
              <div className="dashboard-title">
                Complaint Dashboard
              </div>
              <div className="dashboard-data">
                <div className="dash-card">
                  <div className="dash-card-half">
                    <span>New</span>
                  </div>
                  <div className="dash-card-half">
                    <span>69</span>
                    <NavLink to="#">
                      view
                    </NavLink>
                  </div>
                </div>
                <div className="dash-card">
                  <div className="dash-card-half">
                    <span>In Process</span>
                  </div>
                  <div className="dash-card-half">
                    <span>69</span>
                    <NavLink to="#">
                      view
                    </NavLink>
                  </div>
                </div>
                <div className="dash-card">
                  <div className="dash-card-half">
                    <span>Completed</span>
                  </div>
                  <div className="dash-card-half">
                    <span>69</span>
                    <NavLink to="#">
                      view
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-title">
                Monthly Analysis
              </div>
              <div className="dashboard-data">
                <div className="dash-card"></div>
                <div className="dash-card"></div>
              </div>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-title">
                Latest Complaints
              </div>
              <div className="dashboard-data"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
