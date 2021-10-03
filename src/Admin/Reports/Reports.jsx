//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";

//IMPORTING COMPONENTS
import Table from "../../components/Table/Table";

const Reports = () => {
  //URL
  const url =
    "/politician_image_building/Admin Dashboard/Reports/FetchReport.php";

  const titles = [
    "Sr. No.",
    "Name",
    "Address",
    "Phone",
    "Status",
    "Region",
    "Date",
    "Gramsevak",
  ];
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        const sample = [];
        res.data.map((e, i) => {
          sample.push([
            i + 1,
            e.name,
            e.address,
            e.phone,
            e.status,
            e.region,
            e.date,
            e.g,
          ]);
        });
        setData(sample);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data]);

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
        header={"Reports"}
        additional={true}
      />
    </motion.div>
  );
};

export default Reports;
