import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import Table from "../../components/Table/Table";
import axios from "axios";

const Reports = () => {
  //LOGIN CHECK
  const history = useHistory();
  let k = sessionStorage.getItem("loggedinGramSevak");
  if (!k) {
    history.push("/gramsevak/login");
  }
  const region = sessionStorage.getItem("GSRegion");

  // URL
  const url =
    "/politician_image_building/Gramsevak Dashboard/Reports/FetchReport.php";

  //DATA
  const titles = ["Sr. No. ", "Name", "Address", "Phone", "Status", "Date"];
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url, {
          headers: {
            region: region,
          },
        })
        .then((res) => {
          const sample = [];
          res.data.map((e, i) => {
            sample.push([
              i + 1,
              e.u_name,
              e.u_address,
              e.u_phone,
              e.forGS,
              e.date,
            ]);
          });
          setData(sample);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [data]);

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
      />
    </motion.div>
  );
};

export default Reports;
