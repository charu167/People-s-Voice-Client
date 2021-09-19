import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const Form = (props) => {
  let vals = {};
  props.inputs.map((e) => {
    vals[e.name] = "";
  });

  const [register, setRegister] = useState({
    register_name: "",
    register_email: "",
    register_password: "",
    register_address: "",
    register_phone: "",
  });

  //Registering user
  const handleRegister = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("name", "a");
    formData.append("email", "b");
    formData.append("password", 5);
    formData.append("phone", 78);
    formData.append("address", "park");

    console.log(formData);

    const url = props.props.url_reg;

    await axios
      .post(url, formData)
      .then((res) => {
        if (res.data === 0) {
          window.alert(`User Registered Successfully!`);
        }
      })
      .catch((err) => {
        window.alert(`error`);
      });
  };

  //Rendering jsx
  return (
    <>
      <div className="form-container">
        <div className="cover"></div>
        <form className="form">
          <span className="title">{props.title}</span>
          {props.inputs.map((e) => {
            return (
              <input
                type={e.type}
                name={e.name}
                placeholder={e.placeholder}
                onChange={(event) => {
                  vals[e.name] = event.target.value;
                  console.log(vals);
                }}
              />
            );
          })}

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
