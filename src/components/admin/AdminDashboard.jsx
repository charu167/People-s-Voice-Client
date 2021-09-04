import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

import Card from "../utilities/Card";
import BarChart from "../utilities/BarChart";

const AdminDashboard = () => {
  const paths = ["new", "inprocess", "completed"];

  const cardData = [
    {
      color: "red",
      title: "New",
      count: 210,
      path: "new",
      icon: <i class="bx bx-loader-circle"></i>,
    },
    {
      color: "blue",
      title: "In Process",
      count: 340,
      path: "inprocess",
      icon: <i class="bx bx-loader-circle"></i>,
    },
    {
      color: "yellow",
      title: "Completed",
      count: 520,
      path: "completed",
      icon: <i class="bx bx-loader-circle"></i>,
    },
  ];

  const Cards = cardData.map((e) => {
    return (
      <Card
        color={e.color}
        title={e.title}
        count={e.count}
        path={e.path}
        icon={e.icon}
      />
    );
  });

  return (
    <>
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
        <div className="dashboard">
          <div className="dashboard-item">
            <div className="dashboard-title">Complaint Dashboard</div>
            <div className="dashboard-data">{Cards}</div>
          </div>

          <div className="dashboard-item">
            <div className="dashboard-title">Monthly Analysis</div>
            <div className="dashboard-data">
              <BarChart />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// const AdminDashboard = MotionHoc(AdminDashboardComponent);

export default AdminDashboard;
