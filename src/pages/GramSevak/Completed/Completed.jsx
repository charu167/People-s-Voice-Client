//IMPORTING LIBRARIES
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../../components/Table/Table";
import { Button } from "@mui/material";
import Modal from "../../../components/Modal/Modal";

const Completed = () => {
  const titles = ["Date", "Type", "Location", "View"];
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getComplaints = async () => {
      await axios
        .get("http://localhost:8000/complain/", {
          params: {
            admin: 0,
            status: 3,
            gsid: localStorage.getItem("gsid"),
          },
        })
        .then((res) => {
          const sample = [];
          const date = new Date();
          res.data.forEach((e, i) => {
            sample.push({
              description: e.c_description,
              status: e.forAdmin,
              Date: date.toDateString(e.c_date),
              Type: e.c_type,
              Location: e.c_location,
              View: (
                <Button
                  onClick={() => {
                    setOpen(true);
                    setCurrentData(i);
                  }}
                  variant="contained"
                  color="info"
                  size="small"
                >
                  View
                </Button>
              ),
            });
          });
          setData(sample);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getComplaints();
  }, []);

  //JSX
  return (
    <div className="outermost-container">
      <Table
        titles={titles}
        data={data !== null ? data : []}
        header={"Completed Complaints"}
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
export default Completed;
