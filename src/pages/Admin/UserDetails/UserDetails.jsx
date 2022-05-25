//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

//IMPORTING COMPONENTS
import Table from "../../../components/Table/Table";

const UserDetails = () => {
  //DATA
  const titles = ["ID", "Name", "Email", "Address", "Phone", "Region"];
  const [data, setData] = useState(null);

  //URL GET
  const url = "http://localhost:8000/user/";

  //FETCH DATA
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((res) => {
          const sample = [];
          res.data.forEach((e, i) => {
            sample.push({
              ID: e.id,
              Name: e.name,
              Email: e.email,
              Address: e.address,
              Phone: e.phone,
              Region: <Chip color="secondary" label={e.region} />,
            });
          });
          setData(sample);
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
        header={"User Details"}
      />
    </div>
  );
};

export default UserDetails;
