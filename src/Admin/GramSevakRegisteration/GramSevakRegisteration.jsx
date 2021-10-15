//IMPORTING CSS
import "./GramSevakRegisteration.css";

//IMPORINTG LIBRARIES
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const GramSevakRegisteration = () => {
  //LOGIN CHECK
  const history = useHistory();
  if (!sessionStorage.getItem("loggedin")) {
    history.push("/admin/login");
  }

  //POST REQUEST URL
  const url = "/politician_image_building/Admin Dashboard/Gramsevak Registeration/gramsevakReg.php";

  //INPUTS
  const [inputs, setInputs] = useState({
    name: "",
    phone: null,
    email: "",
    address: "",
    password: "",
    confirm_password: "",
    region: "",
  });

  //CONNECTING INPUTS AND INPUTS USESTATE
  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  //VALIDATION
  function validation() {
    if (
      inputs.name === "" ||
      inputs.phone === null ||
      inputs.email === "" ||
      inputs.address === "" ||
      inputs.password === "" ||
      inputs.confirm_password === "" ||
      inputs.region === ""
    ) {
      swal({
        title: "Oh no!",
        text: "Please fill all the details.",
        icon: "error",
      });
      return false;
    } else {
      const regexPhone = new RegExp(/^[6789][0-9]{9}/);
      const regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (inputs.phone.lenght !== 10 && !regexPhone.test(inputs.phone)) {
        swal({
          title: "Oh No!",
          text: "Please enter valid Phone number",
          icon: "error",
          button: "OK",
        });
        return false;
      } else if (!regexEmail.test(inputs.email)) {
        swal({
          title: "Oh No!",
          text: "Please enter valid Email address",
          icon: "error",
          button: "OK",
        });
        return false;
      } else if (inputs.password !== inputs.confirm_password) {
        swal({
          title: "Oh No!",
          text: "Password and confirm password should match",
          icon: "error",
          button: "OK",
        });
        return false;
      } else {
        return true;
      }
    }
  }

  //POST REQUEST
  const Register = async (event) => {
    event.preventDefault();

    if (validation()) {
      let formdata = new FormData();

      formdata.append("name", inputs.name);
      formdata.append("email", inputs.email);
      formdata.append("phone", inputs.phone);
      formdata.append("address", inputs.address);
      formdata.append("region", inputs.region);
      formdata.append("password", inputs.password);

      await axios
        .post(url, formdata)
        .then((res) => {
          console.log(res);
          if (res.data) {
            swal("Good job!", "You've registered a Gramsevak!", "success");
          } else {
            swal({
              title: "Oh No!",
              text: "An Error Occured",
              icon: "error",
              button: "OK",
            });
          }
        })
        .catch((err) =>
          swal({
            title: "Oh No!",
            text: "An Error Occured",
            icon: "error",
            button: "OK",
          })
        );
    }
  };

  //JSX
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
          <span className="title">Gramsevak Registeration</span>

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
            value={inputs.region}
            type="text"
            name="region"
            placeholder="Region"
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
