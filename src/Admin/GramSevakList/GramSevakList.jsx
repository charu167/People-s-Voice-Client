//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";

//IMPORINTG COMPONENETS
import Table from "../../components/Table/Table";
import ToggleSwitch from "../../components/Buttons/ToggleSwitch";

const GramSevakList = () => {
  //GET URL
  const url = "/politician_image_building/retrieveGramSevakData.php";

  //DATA
  let [dbdata, setDbdata] = useState(null);
  const titles = ["Sr. No.", "Name", "Address", "Phone", "Email", "Status"];

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        const sample = [];
        res.data.map((e, i) => {
          sample.push([
            i + 1,
            e.Name,
            e.address,
            e.phone,
            e.email,
            <ToggleSwitch
              key={i}
              checked={parseInt(e.status) === 1 ? true : false}
            />,
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
        header={"Gram Sevak List"}
      />
    </motion.div>
  );
};

export default GramSevakList;
