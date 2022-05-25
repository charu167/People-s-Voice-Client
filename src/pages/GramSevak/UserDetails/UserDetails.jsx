import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Table from "../../../components/Table/Table";
import axios from "axios";

const UserDetails = () => {
  const history = useHistory();

  //Data
  const titles = ["Name", "Email", "Address", "Phone", "Region"];
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
              Name: e.name,
              Email: e.email,
              Address: e.address,
              Phone: e.phone,
              Region: e.region,
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
