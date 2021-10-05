//IMPORTING LIBRARIES
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

//IMPORTING COMPONENTS
import Table from "../../components/Table/Table";

const Completed = () => {
  const titles = ["Complain ID", "Name", "Location", "Action Button"];
  const [data, setData] = useState(null);

  //LOGIN CHECK
  const history = useHistory();
  let k = sessionStorage.getItem("loggedinGramSevak");
  if (!k) {
    history.push("/gramsevak/login");
  }

  //GET REQUEST
  const url =
    "/politician_image_building/Admin Dashboard/Complaints Retrieval/CompletedComplaintsRetrieve.php";

  //GET REQUEST
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        const sample = [];

        res.data.map((e, i) => {
          sample.push([i + 1, e.name, e.location, e.status]);
        });
        setData(sample);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

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
      <Table
        titles={titles}
        data={data !== null ? data : []}
        header={"Completed Complaints"}
      />
    </motion.div>
  );
};
export default Completed;
