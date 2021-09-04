import React, { useState } from "react";
import { motion } from "framer-motion";

import Table from "../utilities/Table";

const Reports = () => {
  const [titles, settitles] = useState(["Complain ID", "Name", "Location"]);

  const [data, setData] = useState([
    [1, "test1", "testLocation1"],
    [2, "test2", "testLocation2"],
    [3, "test2", "area51"],
    [4, "test2", "mariana trench"],
    [5, "test2", "barmuda triangle"],
    [6, "test2", "cape of good hope"],
    [7, "test2", "testAdrress2"],
    [8, "test2", "testAdrress2"],
  ]);

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
      <Table titles={titles} data={data} header={'Reports'}/>
    </motion.div>
  );
};

export default Reports;
