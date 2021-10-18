//IMPORTING CSS
import "./ComplaintRegisteration.css";

//IMPORTING LIBRARIES
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useHistory } from "react-router";
import swal from "sweetalert";

const ComplaintRegisteration = () => {
  //LOGIN CHECK
  const history = useHistory();
  let k = sessionStorage.getItem("loggedinGramSevak");
  const region = sessionStorage.getItem("GSRegion");
  useEffect(() => {
    if (!k) {
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

  //POST REQUEST URL
  const url =
    "/politician_image_building/Gramsevak Dashboard/Complaint Registeration/ComplaintReg.php";

  //INPUTS
  const [inputs, setInputs] = useState({
    name: "",
    phone: null,
    email: "",
    address: "",
    location: "",
    complaint_type: "",
    complaint_description: "",
  });

  //CONNECTING FORM INPUTS AND INPUTS USESTATE
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
      inputs.location === "" ||
      inputs.complaint_type === "" ||
      inputs.complaint_description === ""
    ) {
      swal({
        title: "Oh No!",
        text: "Please enter all the fields",
        icon: "error",
        button: "OK",
      });
      return false;
    } else {
      let pattern_phone = new RegExp(/^[6789][0-9]{9}/);
      let pattern_email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (inputs.phone.length != 10 || !pattern_phone.test(inputs.phone)) {
        swal({
          title: "Oh No!",
          text: "Please enter valid Phone number",
          icon: "error",
          button: "OK",
        });
        return false;
      } else if (!pattern_email.test(inputs.email)) {
        swal({
          title: "Oh No!",
          text: "Please enter valid Email address",
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

      formdata.append("c_type", inputs.complaint_type);
      formdata.append("c_description", inputs.complaint_description);
      formdata.append("c_location", inputs.location);
      formdata.append("u_name", inputs.name);
      formdata.append("u_email", inputs.email);
      formdata.append("u_address", inputs.address);
      formdata.append("u_phone", inputs.phone);

      await axios
        .post(url, formdata, {
          headers: {
            region: region,
          },
        })
        .then((res) => {
          if (res.data) {
            swal(
              "Good job!",
              "Your complaint is registered, we'll get back to you soon",
              "success"
            );
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
        {/* <div className="cover"></div> */}
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
