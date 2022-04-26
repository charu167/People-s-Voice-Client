import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

import Table from "../../../components/Table/Table";

const InProcess = () => {
  const titles = [
    "Complain ID",
    "Type",
    "Description",
    "Location",
    "Date",
    "Action Button",
  ];
  const [data, setData] = useState(null);

  const getComplaints = async () => {
    await axios
      .get("http://localhost:8000/complain/", {
        params: {
          admin: 0,
          status: 2,
          gsid: localStorage.getItem("gsid"),
        },
      })
      .then((res) => {
        // console.log(res.data);
        const sample = [];
        res.data.forEach((e, i) => {
          sample.push([
            i + 1,
            e.c_type,
            e.c_description,
            e.c_location,
            e.c_date,
            <button
              onClick={() => {
                handleUpdate(e.id);
              }}
            >
              Forward
            </button>,
          ]);
        });
        setData(sample);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = async (id) => {
    await axios
      .put("http://localhost:8000/complain/?admin=0&status=3&id=" + id)
      .then((res) => {
        console.log(res.data);
        getComplaints();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getComplaints();
  }, []);

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
        header={"In Process Complaints"}
        regions={[]}
      />
    </motion.div>
  );
};

export default InProcess;
