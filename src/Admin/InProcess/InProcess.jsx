//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

//IMPORTING CSS
import "./InProcess.css";

//IMPORINTG COMPONENTS
import Table from "../../components/Table/Table";

const InProcess = () => {
  //GET URL
  const url_get =
    "/politician_image_building/Admin Dashboard/Complaints Retrieval/InProcessComplaintRetrieve.php";

  //PUT URL
  const url_put =
    "/politician_image_building/Admin Dashboard/Complaint Status Handling/InProcessToCompleted.php";

  //PUT REQUEST
  const handleAction = async (id) => {
    try {
      const res = await axios.put(url_put, id);
      if (res.data) {
        swal("Good job!", "The complaint is completed now!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //DATA
  const titles = ["Sr. No.", "Name", "Location", "Action Button"];
  const [dbdata, setDbdata] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url_get);
        
        const sample = [];
        res.data.map((e, i) => {
          sample.push([
            i + 1,
            e.u_name,
            e.c_location,
            <button
              className="inp_btn"
              onClick={() => {
                handleAction(e.C_ID);
              }}
            >
              Forward
            </button>,
          ]);
        });
        setDbdata(sample);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dbdata]);

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
        header={"In Process Complaints"}
        regions={[]}
      />
    </motion.div>
  );
};

export default InProcess;
