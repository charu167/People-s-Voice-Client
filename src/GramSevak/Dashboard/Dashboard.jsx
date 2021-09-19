import React from "react";
import { motion } from "framer-motion";
import Card from "../../components/Cards/Cards";
import BarChart from "../../components/Charts/BarChart";
import "./Dashboard.css";
import { cardData, BarChartLabels, BarChartDataSets } from "./DashBoardData";

const GramSevakDashboard = () => {
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
            <BarChart labels={BarChartLabels} datasets={BarChartDataSets} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GramSevakDashboard;
