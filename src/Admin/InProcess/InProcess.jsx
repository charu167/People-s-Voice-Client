//IMPORTING LIBRARIES
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

//IMPORINTG COMPONENTS
import Table from "../../components/Table/Table";

//IMPORINTG DATA
import { titles, dbdata } from "./InProcessData";

const InProcess = () => {
  //LOGIN CHECK
  const history = useHistory();
  if (!sessionStorage.getItem("loggedin")) {
    history.push("/admin/login");
  }

  //JSX
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
      <Table titles={titles} data={dbdata} header={"In Process Complaints"} />
    </motion.div>
  );
};

export default InProcess;
