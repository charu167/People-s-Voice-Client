//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

//IMPORINTG COMPONENETS
import Table from "../../components/Table/Table";
import ToggleSwitch from "../../components/Buttons/ToggleSwitch";

const GramSevakList = () => {
  //LOGIN CHECK
  const history = useHistory();
  if (!sessionStorage.getItem("loggedin")) {
    history.push("/admin/login");
  }

  //GET URL
  const url =
    "/politician_image_building/Admin Dashboard/Gramsevak List/GramsevakList.php";

  //PUT URL
  const url_put =
    "/politician_image_building/Admin Dashboard/GramsevakStatusHandling/status.php";

  //DATA
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

  const handleToggle = (id) => {
    try {
      swal({
        title: "Are you sure, you want to change the status?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (change) => {
        if (change) {
          const res = await axios.put(url_put, id);

          if (res.data === 1) {
            swal("Status changed", {
              icon: "success",
            });
          } else {
            swal({
              title: "Oh No!",
              text: "An Error Occured",
              icon: "error",
              button: "OK",
            });
          }
        } else {
          swal("Status not changed");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

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
            e.email,
            e.region,
            <label className="switch">
              <input
                onChange={() => {
                  handleToggle(e.GS_ID);
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
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dbdata]);

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
