import React, { useEffect, useState, useContext } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import axios from "axios";
import "./Home.css";
import AuthContext from "../../../context/AuthContext";

export default function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  const [rows, setRows] = useState([]);

  const columns = [
    { field: "col1", headerName: "Sr. no.", width: 80 },
    { field: "col2", headerName: "Type", width: 150 },
    { field: "col3", headerName: "Location", width: 150 },
    { field: "col4", headerName: "Status", width: 150 },
    { field: "col5", headerName: "Date", width: 150 },
    {
      field: "col6",
      headerName: "View",
      width: 150,
      renderCell: (params) => <Button variant="contained">{"params"}</Button>,
    },
  ];

  const getData = async () => {
    axios
      .get("http://localhost:8000/complain/", {
        params: {
          admin: 2,
          userid: 2,
          // userid: localStorage.getItem("userid"),
        },
      })
      .then((res) => {
        console.log(localStorage.getItem("userid"));
        const sample = [];
        res.data.forEach((e, i) => {
          sample.push({
            id: i,
            col1: i,
            col2: e.c_type,
            col3: e.c_location,
            col4: e.forAdmin,
            col5: e.c_date,
            // col6: renderCell("somtig"),
          });
        });

        setRows(sample);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();
  const auth1 = () => {
    if (isLoggedIn("userid")) {
      return;
    } else {
      history.push("/user/login");
    }
  };
  useEffect(() => {
    getData();
    auth1();
  }, []);

  return (
    <div>
      <h1>Home page for end user</h1>

      <div className="grid-cover">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
