//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

//IMPORTING COMPONENTS
import Table from "../../../components/Table/Table";

const Reports = () => {
  //URL
  const url = "http://localhost:8000/reports/";

  const titles = ["Name", "Address", "Phone", "Type", "Date", "View"];
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const date = new Date();
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
            sample.push({
              description: e.description,
              status: e.forGS,
              Date: date.toDateString(e.date),
              Name: e.user.name,
              Address: e.user.address,
              Phone: e.user.phone,
              Type: e.type,
              View: (
                <Button
                  onClick={() => {
                    setCurrentData(i);
                    setOpen(true);
                  }}
                  size="small"
                  variant="contained"
                >
                  View
                </Button>
              ),
            });
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
  // const history = useHistory();
  // if (!sessionStorage.getItem("loggedin")) {
  //   history.push("/admin/login");
  // }

  //JSX
  return (
    <div className="outermost-container">
      <Table
        titles={titles}
        data={data !== null ? data : []}
        header={"Reports"}
      />
      <Modal
        data={
          data !== null
            ? {
                type: data[currentData].Type,
                status: data[currentData].status,
                description: data[currentData].description,
                location: data[currentData].Location,
                date: data[currentData].Date,
              }
            : {
                type: "",
                status: "",
                description: "",
                location: "",
                date: "",
              }
        }
        setOpen={setOpen}
        open={open}
      />
    </div>
  );
};

export default Reports;
