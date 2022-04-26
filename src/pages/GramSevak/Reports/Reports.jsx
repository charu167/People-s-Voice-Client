//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";

//IMPORTING COMPONENTS
import Table from "../../../components/Table/Table";

const Reports = () => {
  //URL
  const url = "http://localhost:8000/reports/";

  const titles = ["Sr. No.", "Name", "Address", "Phone", "Status", "Date"];
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url, {
          params: {
            admin: 0,
            gsid: localStorage.getItem("gsid"),
          },
        })
        .then((res) => {
          console.log(res.data[0]);
          const sample = [];

          res.data.forEach((e, i) => {
            sample.push([
              i + 1,
              e.user.name,
              e.user.address,
              e.user.phone,
              1,
              e.date,
            ]);
            setData(sample);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

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
        regions={[]}
      />
    </motion.div>
  );
};

export default Reports;
