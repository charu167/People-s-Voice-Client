import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useHistory } from "react-router-dom";
import Table from "../../components/Table/Table";
import axios from "axios";

const New = () => {
  const titles = ["Complain ID", "Name", "Location", "Action Button"];
  const [data, setData] = useState(null);
  const url_get =
    "/politician_image_building/Admin Dashboard/Complaints Retrieval/NewComplaintsRetrieve.php";

  const history = useHistory();
  let k = sessionStorage.getItem("loggedinGramSevak");
  let region = sessionStorage.getItem("region");
  if (!k) {
    history.push("/gramsevak/login");
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url_get, {
          headers: {
            region: region,
          },
        });
        const sample2 = [];
        res.data.map((e, i) => {
          sample2.push([
            i + 1,
            e.name,
            e.location,
            <button className="new_btn">Forward</button>,
          ]);
        });
        setData(sample2);
      } catch (error) {
        console.log(error);
      }
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
        header={"New Complaints"}
      />
    </motion.div>
  );
};

export default New;
