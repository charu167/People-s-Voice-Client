//IMPORTING CSS
import Table from "../../components/Table/Table";

//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Completed = () => {
  const url =
    "/politician_image_building/Admin Dashboard/Complaints Retrieval/CompletedComplaintsRetrieve.php";

  //DATA
  const titles = ["Complain ID", "Name", "Location", "Status"];
  let [dbdata, setDbdata] = useState(null);

  //GET REQUEST
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        const sample = [];

        res.data.map((e, i) => {
          sample.push([i + 1, e.name, e.location, e.status]);
        });
        setDbdata(sample);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

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
      <Table
        titles={titles}
        data={dbdata !== null ? dbdata : []}
        header={"Completed Complaints"}
      />
    </motion.div>
  );
};

export default Completed;
