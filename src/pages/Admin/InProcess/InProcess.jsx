//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import Table from "../../../components/Table/Table";
import axios from "axios";
import { Button } from "@mui/material";
import Modal from "../../../components/Modal/Modal";

const InProcess = () => {
  const titles = ["Date", "Type", "Location", "Action", "View"];
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState(0);
  const [open, setOpen] = useState(false);

  const handleUpdate = async (id) => {
    await axios
      .put("http://localhost:8000/complain/?admin=1&status=3&id=" + id)
      .then((res) => {
        getComplaints();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComplaints = async () => {
    await axios
      .get("http://localhost:8000/complain/", {
        params: {
          admin: 1,
          status: 2,
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
            Action: (
              <Button
                onClick={() => {
                  handleUpdate(e.id);
                }}
                variant="contained"
                color="warning"
                size="small"
              >
                Forward
              </Button>
            ),
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

  useEffect(() => {
    getComplaints();
  }, []);

  //JSX
  return (
    <div className="outermost-container">
      <Table
        titles={titles}
        data={data !== null ? data : []}
        header={"In Process Complaints"}
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

export default InProcess;
