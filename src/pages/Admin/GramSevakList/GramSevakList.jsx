//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

//IMPORINTG COMPONENETS
import Table from "../../../components/Table/Table";
import ToggleSwitch from "../../../components/Buttons/ToggleSwitch";

const GramSevakList = () => {
  //DATA
  const [state, setState] = useState(true);
  let [dbdata, setDbdata] = useState(null);
  const titles = [
    "Sr. No.",
    "Name",
    "Address",
    "Phone",
    "Email",
    "Region",
    "Status",
  ];

  const handleToggle = async (id, status) => {
    const formdata = new FormData();
    formdata.append("status", status);

    await axios
      .put("http://localhost:8000/gramsevak/", formdata, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        setState(!state);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:8000/gramsevak/")
        .then((res) => {
          // console.log(res.data)
          const sample = [];
          res.data.forEach((e, i) => {
            sample.push([
              i + 1,
              e.name,
              e.address,
              e.phone,
              e.email,
              e.region,
              <label className="switch">
                <input
                  onChange={() => {
                    handleToggle(e.id, parseInt(e.status) === 1 ? 0 : 1);
                  }}
                  checked={parseInt(e.status) === 1 ? true : false}
                  type="checkbox"
                  name="toggle"
                />
                <span className="slider" />
              </label>,
            ]);
          });
          setDbdata(sample);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [state]);

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
        regions={[]}
      />
    </motion.div>
  );
};

export default GramSevakList;
