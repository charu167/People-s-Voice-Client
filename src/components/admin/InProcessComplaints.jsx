import React, { useState } from "react";
import { motion } from "framer-motion";
import Table from "../utilities/Table";

const InProcessComplaints = () => {
  const [titles, setTitles] = useState([
    "Complain ID",
    "Name",
    "Location",
    "Action Button",
  ]);

  const [data, setData] = useState([
    [1, "test1", "location1", <button>action</button>],
    [2, "test2", "marianaTrench", <button>action</button>],
    [3, "test2", "testAdrress2", <button>action</button>],
    [4, "test2", "testAdrress2", <button>action</button>],
    [5, "test2", "testAdrress2", <button>action</button>],
    [6, "test2", "testAdrress2", <button>action</button>],
    [7, "test2", "testAdrress2", <button>action</button>],
    [8, "test2", "testAdrress2", <button>action</button>],
    [9, "test2", "testAdrress2", <button>action</button>],
    [10, "test2", "testAdrress2", <button>action</button>],
    [11, "test2", "testAdrress2", <button>action</button>],
    [12, "test2", "testAdrress2", <button>action</button>],
    [13, "test2", "testAdrress2", <button>action</button>],
    [14, "test2", "testAdrress2", <button>action</button>],
    [15, "test2", "testAdrress2", <button>action</button>],
    [16, "test2", "testAdrress2", <button>action</button>],
    [17, "test2", "testAdrress2", <button>action</button>],
    [18, "test2", "testAdrress2", <button>action</button>],
    [19, "test2", "testAdrress2", <button>action</button>],
    [20, "test2", "testAdrress2", <button>action</button>],
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
      <Table titles={titles} data={data} header={"In Process Complaints"} />
    </motion.div>
  );
};

export default InProcessComplaints;
