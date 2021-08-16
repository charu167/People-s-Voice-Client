import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const PriorityComplaints = () => {
  return (
    <motion.div
      className="outermost-container"
      initial={{ y: 500 }}
      animate={{
        y: 0,
        transition: { duration: 0.5, type: "spring" },
      }}
      exit={{
        y: -500,
        transition: { duration: 0.3, type: "spring", ease: "ease-in-out" },
      }}
    >
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
                  <NavLink to="#">
                    <i class="bx bxl-flutter"></i>
                  </NavLink>
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-card-half">
                  <span>In Process</span>
                  <h1>69</h1>
                </div>
                <div className="dash-card-half">
                  <NavLink to="#">
                    <i class="bx bxl-flutter"></i>
                  </NavLink>
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-card-half">
                  <span>Completed</span>
                  <h1>69</h1>
                </div>
                <div className="dash-card-half">
                  <NavLink to="#">
                    <i class="bx bxl-flutter"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PriorityComplaints;
