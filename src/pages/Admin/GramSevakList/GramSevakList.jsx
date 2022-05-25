//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch } from "@mui/material";

//IMPORINTG COMPONENETS
import Table from "../../../components/Table/Table";

const GramSevakList = () => {
  //DATA
  const titles = [
    "ID",
    "Name",
    "Address",
    "Phone",
    "Email",
    "Region",
    "Status",
  ];
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState(0);

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
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = async () => {
    await axios
      .get("http://localhost:8000/gramsevak/")
      .then((res) => {
        console.log(res.data);
        const sample = [];
        res.data.forEach((e, i) => {
          sample.push({
            ID: e.id,
            Name: e.name,
            Address: e.address,
            Phone: e.phone,
            Email: e.email,
            Region: e.region,
            Status: (
              <Switch
                onClick={() => {
                  handleToggle(e.id, e.status === 1 ? 0 : 1);
                }}
                checked={e.status === 1 ? true : false}
              />
            ),
          });
          setData(sample);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //JSX
  return (
    <div className="outermost-container">
      <Table
        titles={titles}
        data={data !== null ? data : []}
        header={"Gram Sevak List"}
      />
    </div>
  );
};

export default GramSevakList;
