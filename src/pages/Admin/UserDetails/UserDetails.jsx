//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";

//IMPORTING COMPONENTS
import Table from "../../../components/Table/Table";

const UserDetails = () => {
  //DATA
  const titles = ["Sr. No.", "Name", "Email", "Address", "Phone", "Region"];
  const [data, setData] = useState(null);

  //URL GET
  const url = "http://localhost:8000/user/";

  //FETCH DATA
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((res) => {
          const sample = [];
          res.data.forEach((e, i) => {
            sample.push([i + 1, e.name, e.email, e.address, e.phone, e.region]);
          });
          setData(sample);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
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
        header={"User Details"}
        regions={[]}
      />
    </motion.div>
  );
};

export default UserDetails;
