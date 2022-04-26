//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

//IMPORINTG COMPONENTS
import Table from "../../../components/Table/Table";

const InProcess = () => {
  //DATA
  const titles = ["Sr. No.", "Type", "Description", "Location", "Date"];
  const [dbdata, setDbdata] = useState(null);

  const handleUpdate = async (id) => {
    await axios
      .put("http://localhost:8000/complain/?admin=1&status=3&id=" + id)
      .then((res) => {
        console.log(res.data);
        getComplaints();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComplaints = async () => {
    await axios
      .get("http://localhost:8000/complain/", {
        params: {
          admin: 1,
          status: 2,
        },
      })
      .then((res) => {
        const sample = [];
        res.data.forEach((e, i) => {
          sample.push([
            i + 1,
            e.c_type,
            e.c_description,
            e.c_location,
            <button
              onClick={() => {
                handleUpdate(e.id);
              }}
            >
              Forward
            </button>,
          ]);
        });
        setDbdata(sample);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
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
        data={dbdata !== null ? dbdata : []}
        header={"In Process Complaints"}
        regions={[]}
      />
    </motion.div>
  );
};

export default InProcess;
