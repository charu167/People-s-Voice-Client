//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";

//IMPORTING COMPONENTS
import Table from "../../components/Table/Table";

const UserDetails = () => {
  //DATA
  const titles = ["Sr. No.", "Name", "Address", "Phone", "Email"];
  const [data, setData] = useState(null);

  //URL GET
  const url =
    "/politician_image_building/Admin Dashboard/UserDetails/userdetails.php";

  //FETCH DATA
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        const sample = [];
        res.data.map((e, i) => {
          sample.push([i + 1, e.u_name, e.u_address, e.u_phone, e.u_email]);
        });
        setData(sample);
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
        data={data !== null ? data : []}
        header={"User Details"}
      />
    </motion.div>
  );
};

export default UserDetails;
