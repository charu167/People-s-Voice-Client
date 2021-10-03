//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { motion } from "framer-motion";
import axios from "axios";
import { useHistory } from "react-router-dom";

//IMPORTING CSS
import "./New.css";

//IMPORTING COMPONENTS
import Table from "../../components/Table/Table";

const New = () => {
  //URL GET
  const url_get =
    "/politician_image_building/Admin Dashboard/Complaints Retrieval/NewComplaintsRetrieve.php";

  //URL PUT
  const url_put =
    "/politician_image_building/Admin Dashboard/Complaint Status Handling/NewToInProcess.php";
  const titles = ["Complain ID", "Name", "Location", "Action Button"];
  const [sample, setSample] = useState(null);
  const sample2 = [];

  const handleClick = async (id) => {
    try {
      const res = await axios.put(url_put, id);
      if (res.data) {
        swal("Good job!", "The complaint is in process now!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url_get);

        res.data.map((e, i) => {
          sample2.push([
            i + 1,
            e.name,
            e.location,
            <button className="new_btn" onClick={() => handleClick(e.C_ID)}>
              Forward
            </button>,
          ]);
        });
        setSample(sample2);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [sample]);

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
        data={sample !== null ? sample : []}
        header={"New Complaints"}
      />
    </motion.div>
  );
};

export default New;
