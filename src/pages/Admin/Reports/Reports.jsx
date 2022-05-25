//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";

import axios from "axios";
import Modal from "../../../components/Modal/Modal";
import { Button, Chip } from "@mui/material";
import Table from "../../../components/Table/Table";

const Reports = () => {
  //URL
  const url = "http://localhost:8000/reports/";

  const titles = [
    "Date",
    "Name",
    "Address",
    "Phone",
    "Region",
    "Type",
    "Gramsevak",
    // "Status",
    "View",
  ];
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const date = new Date();

      await axios
        .get(url, {
          params: {
            admin: 1,
          },
        })
        .then((res) => {
          const sample = [];
          console.log(res.data);
          res.data.forEach((e, i) => {
            sample.push({
              description: e.description,
              status: e.forAdmin,
              Date: date.toDateString(e.date),
              Name: e.user.name,
              Address: e.user.address,
              Phone: e.user.phone,
              Region: e.user.region,
              Type: e.type,
              Gramsevak: e.gs.name,
              // Status: (
              //   <Chip
              //     color={e.forAdmin === 0 ? "warning" : "success"}
              //     label={e.forAdmin === 0 ? "In Process" : "Resolved"}
              //   />
              // ),
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
