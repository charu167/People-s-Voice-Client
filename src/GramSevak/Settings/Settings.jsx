import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import "./Settings.css";

const Settings = () => {
  const history = useHistory();
  const region = sessionStorage.getItem("GSRegion");
  useEffect(() => {
    if (!sessionStorage.getItem("loggedinGramSevak")) {
      history.push("/gramsevak/login");
    }
    const check = async () => {
      await axios
        .get(
          "/politician_image_building/Gramsevak Dashboard/Get Gramsevak Status/GetStatus.php",
          {
            headers: {
              region: region,
            },
          }
        )
        .then((res) => {
          if (parseInt(res.data) === 0) {
            sessionStorage.removeItem("loggedinGramSevak");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    check();
  });

  const handleLogout = () => {
    sessionStorage.removeItem("loggedinGramSevak");
    // sessionStorage.clear();
    history.push("/gramsevak/login");
  };

  const [update, setUpdate] = useState({
    name: "",
    phone: null,
    address: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (event) => {
    event.preventDefault();

    value = event.target.value;
    name = event.target.name;

    setUpdate({ ...update, [name]: value });
  };

  const handleSubmit = async () => {
    let formdata = new FormData();

    formdata.append("name", update.name);
    formdata.append("phone", update.phone);
    formdata.append("address", update.address);
    formdata.append("email", update.email);
    formdata.append("password", update.password);

    await axios
      .put(
        "/politician_image_building/Gramsevak Dashboard/Update/Update.php",
        formdata,
        {
          headers: {
            region: sessionStorage.getItem("GSRegion"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="outermost-container">
      <div className="settings">
        <h3 className="title">settings</h3>

        <form className="update">
          <input
            placeholder="name"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <input
            placeholder="phone"
            type="number"
            name="phone"
            onChange={handleChange}
          />
          <input
            placeholder="address"
            type="text"
            name="address"
            onChange={handleChange}
          />
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </form>
        <button onClick={handleSubmit}>Update</button>

        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Settings;
