import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./GramSevakRegisteration.css";

const GramSevakRegisteration = () => {
  const history = useHistory();
  if (!sessionStorage.getItem("loggedin")) {
    history.push("/admin/login");
  }

  const url = "/politician_image_building/gramsevakReg.php";

  const [inputs, setInputs] = useState({
    name: "",
    phone: null,
    email: "",
    address: "",
    password: "",
    confirm_password: "",
  });

  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const Register = async (event) => {
    event.preventDefault();

    let formdata = new FormData();

    formdata.append("name", inputs.name);
    formdata.append("email", inputs.email);
    formdata.append("password", inputs.password);
    formdata.append("address", inputs.address);
    formdata.append("phone", inputs.phone);

    await axios
      .post(url, formdata)
      .then((res) => {
        if (res.data) {
          window.alert("Registered");
        }
      })
      .catch((err) => window.alert("arror"));
  };

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
      <div className="form-container">
        <div className="cover"></div>
        <form className="form">
          <span className="title">Complaint Registeration</span>

          <input
            onChange={handleInputs}
            value={inputs.name}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={handleInputs}
            value={inputs.phone}
            type="number"
            name="phone"
            placeholder="Phone Number (10 digits only)"
          />
          <input
            onChange={handleInputs}
            value={inputs.email}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={handleInputs}
            value={inputs.address}
            type="text"
            name="address"
            placeholder="Address"
          />
          <input
            onChange={handleInputs}
            value={inputs.password}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            onChange={handleInputs}
            value={inputs.confirm_password}
            type="password"
            name="confirm_password"
            placeholder="Confirm  Password"
          />

          <button onClick={Register}>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default GramSevakRegisteration;
