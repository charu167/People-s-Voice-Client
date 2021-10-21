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
console.log(res.data);
        const sample = [];
        res.data.map((e, i) => {
          sample.push([
            i + 1,
            e.u_name,
            e.u_address,
            e.u_phone,
            e.forAdmin,
            e.c_region,
            e.date,
            e.g,
          ]);
        });
        setData(sample);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data]);

  //GETTING REGIONS LIST FROM BACKEND
  const url_regions = "/politician_image_building/User/GetRegions.php";
  const [regions, setRegions] = useState(null);
  useEffect(() => {
    const getData = async () => {
      axios.get(url_regions).then((res) => {
        const sample = [];
        sample.push("all");
        res.data.map((e) => {
          sample.push(e.region);
        });

        setRegions(sample);
      });
    };
    getData();
  }, [regions]);


 


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
        regionList={true}
        regions={regions === null ? [] : regions}
      />
    </motion.div>
  );
};

export default Reports;
