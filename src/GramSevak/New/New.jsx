import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useHistory } from "react-router-dom";
import Table from "../../components/Table/Table";
import axios from "axios";

const New = () => {
  //LOGIN CHECK
  const history = useHistory();
  let k = sessionStorage.getItem("loggedinGramSevak");
  let region = sessionStorage.getItem("GSRegion");

  useEffect(() => {
    if (!k) {
      history.push("/gramsevak/login");
    }
    const check = async () => {
      await axios
        .get(
          "/politician_image_building/Gramsevak Dashboard/Get Gramsevak Status/GetStatus.php",
          {
            headers: {
              region: region,
            },
          }
        )
        .then((res) => {
          if (parseInt(res.data) === 0) {
            sessionStorage.removeItem("loggedinGramSevak");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    check();
  });

  const titles = ["Complain ID", "Name", "Location", "Action Button"];
  const [data, setData] = useState(null);
  const url_get =
    "/politician_image_building/Gramsevak Dashboard/Complaints Retrieval/New.php";

  const url_put =
    "/politician_image_building/Gramsevak Dashboard/Complaint Status Handling/ForwardToAdmin.php";

  const handleClick = (ID) => {
    axios.put(url_put, ID).then((res) => {
      console.log(res.data);
    });
  };

  const handleNothing = () => {
    return 0;
  };

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
            e.u_name,
            e.c_location,
            <button
              onClick={() => {
                parseInt(e.forAdmin) === 0
                  ? handleClick(e.C_ID)
                  : handleNothing();
              }}
              className={`new_btn  ${
                parseInt(e.forAdmin) !== 0 ? "inactive" : ""
              }`}
            >
              {parseInt(e.forAdmin) !== 0 ? "forwarded" : "forward to admin"}
            </button>,
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
        regions={[]}
      />
    </motion.div>
  );
};

export default New;
