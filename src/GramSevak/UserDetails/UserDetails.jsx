import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import Table from "../../components/Table/Table";
import axios from "axios";

const UserDetails = () => {
  //Data
  const titles = ["Sr. No.", "Name", "Address", "Phone", "Email"];
  const [data, setData] = useState(null);

  // URL
  const url =
    "/politician_image_building/Gramsevak Dashboard/User Details/UserDetails.php";

  const history = useHistory();
  let k = sessionStorage.getItem("loggedinGramSevak");
  if (!k) {
    history.push("/gramsevak/login");
  }
  const region = sessionStorage.getItem("GSRegion");

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
            sample.push([i + 1, e.u_name, e.u_address, e.u_phone, e.u_email]);
          });
          setData(sample);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

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
