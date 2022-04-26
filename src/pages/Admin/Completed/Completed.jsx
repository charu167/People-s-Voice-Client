//IMPORTING LIBRARIES
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

//IMPORTING COMPONENTS
import Table from "../../../components/Table/Table";

const Completed = () => {
  const titles = [
    "Complain ID",
    "Type",
    "Description",
    "Location",
    "Date",
    "Action Button",
  ];
  const [data, setData] = useState(null);

  useEffect(() => {
    const getComplaints = async () => {
      await axios
        .get("http://localhost:8000/complain/", {
          params: {
            admin: 1,
            status: 3,
          },
        })
        .then((res) => {
          console.log(res.data);
          const sample = [];
          res.data.forEach((e, i) => {
            sample.push([
              i + 1,
              e.c_type,
              e.c_description,
              e.c_location,
              e.c_date,
              e.forGS,
            ]);
          });
          setData(sample);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getComplaints();
  }, []);

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
        regions={[]}
      />
    </motion.div>
  );
};
export default Completed;
