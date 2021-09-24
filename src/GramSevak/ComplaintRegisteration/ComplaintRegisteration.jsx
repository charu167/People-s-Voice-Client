import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./ComplaintRegisteration.css";

const ComplaintRegisteration = () => {
  const history = useHistory();
  let k = sessionStorage.getItem("loggedin");
  if (!k) {
    history.push("/gramsevak/login");
  }

  const url = "/politician_image_building/complaintReg.php";

  const [inputs, setInputs] = useState({
    name: "",
    phone: null,
    email: "",
    address: "",
    location: "",
    complaint_type: "",
    complaint_description: "",
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
    formdata.append("phone", inputs.phone);
    formdata.append("email", inputs.email);
    formdata.append("address", inputs.address);
    formdata.append("location", inputs.location);
    formdata.append("complaint_type", inputs.complaint_type);
    formdata.append("complaint_description", inputs.complaint_description);

    await axios
      .post(url, formdata)
      .then((res) => {
        if (res.data) {
          window.alert("Registered");
        }
      })
      .catch((err) => window.alert("error"));
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
            value={inputs.location}
            type="text"
            name="location"
            placeholder="Location"
          />
          <input
            onChange={handleInputs}
            value={inputs.complaint_type}
            type="text"
            name="complaint_type"
            placeholder="Complaint Type"
          />
          <input
            onChange={handleInputs}
            value={inputs.complaint_description}
            type="text"
            name="complaint_description"
            placeholder="Complaint Description"
          />
          <button onClick={Register}>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default ComplaintRegisteration;
