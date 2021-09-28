import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import Table from "../../components/Table/Table";
import axios from "axios";
import data, { titles } from "./NewData";

const New = () => {
  const history = useHistory();
  let k = sessionStorage.getItem("loggedinGramSevak");
  if (!k) {
    history.push("/gramsevak/login");
  }

  let dbdata = [];

  const url = "/politician_image_building/retrieveComplaints.php";
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      response.data.map((e) => {
        dbdata.push([
          [e.ID],
          [e.name],
          [e.location],
          [<button>action</button>],
        ]);
      });
      console.log(dbdata);
    });
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
      <Table titles={titles} data={data} header={"New Complaints"} />
    </motion.div>
  );
};

export default New;
