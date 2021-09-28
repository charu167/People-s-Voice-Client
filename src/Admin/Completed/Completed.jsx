//IMPORTING CSS
import Table from "../../components/Table/Table";

//IMPORTING LIBRARIES
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

//IMPORTING DATA
import { titles, dbdata } from "./CompletedData";

const Completed = () => {
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
      <Table titles={titles} data={dbdata} header={"Completed Complaints"} />
    </motion.div>
  );
};

export default Completed;
