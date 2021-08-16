import React from "react";
import { motion } from "framer-motion";

const Reports = () => {
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
        <div className="report">
          <div className="title">
            <h1>Repors</h1>
          </div>
          <div className="dropdown">
            <button>Categoris</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;
