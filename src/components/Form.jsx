import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
  const history = useHistory();
  const [flag, setFlag] = useState("");

  const [register, setRegister] = useState({
    register_name: "",
    register_email: "",
    register_password: "",
    register_address: "",
    register_phone: "",
  });

  const [login, setLogin] = useState({
    login_email: "",
    login_password: "",
  });

  let name, value;

  //handling registeration form inputs
  const handleInputRegister = (event) => {
    name = event.target.name;
    value = event.target.value;

    setRegister({ ...register, [name]: value });
  };

  //handling login form inputs
  const handleInputLogin = (event) => {
    name = event.target.name;
    value = event.target.value;

    setLogin({ ...login, [name]: value });
  };

  //Registering user
  const handleRegister = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    if (
      !register.register_name ||
      !register.register_email ||
      !register.register_password ||
      !register.register_phone ||
      !register.register_address
    ) {
      setFlag("Please fill all the fields");
    } else {
      setFlag("");
      formData.append("name", register.register_name);
      formData.append("email", register.register_email);
      formData.append("password", register.register_password);
      formData.append("phone", register.register_phone);
      formData.append("address", register.register_address);

      const url = props.props.url_reg;

      await axios
        .post(url, formData)
        .then((res) => {
          if (res.data === 0) {
            window.alert(`User Registered Successfully!`);
            //   history.push(props.props.url_page)
          }
        })
        .catch((err) => {
          window.alert(`error`);
        });
    }
  };

  //Logging in user
  const handleLogin = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    if (!login.login_email || !login.login_password) {
      setFlag("Please fill all the fields");
    } else {
      setFlag("");
      formData.append("email", login.login_email);
      formData.append("password", login.login_password);

      const url = props.props.url_log;

      await axios
        .post(url, formData)
        .then((res) => {
          if (res.data === 123) {
            window.alert(`User logged in successfully!`);
            history.push("/");
          } else {
            window.alert(`error`);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //Rendering jsx
  return (
    <>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover"></div>
        <form action="#">
          <div className="form-content">
            {/* Login form */}
            <div className="login-form">
              <div className="title">Login</div>
              <h5>{flag}</h5>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelop"></i>
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    required
                    name="login_email"
                    value={login.login_email}
                    onChange={handleInputLogin}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelop"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    name="login_password"
                    value={login.login_password}
                    onChange={handleInputLogin}
                  />
                </div>
                <div className="button input-box">
                  <i className="fas fa-envelop"></i>
                  <button className="" type="submit" onClick={handleLogin}>
                    Submit
                  </button>
                </div>
                <div className="text">
                  Don't have an account ? <label for="flip">Sign Up now</label>{" "}
                </div>
              </div>
            </div>

            {/* Registeration form */}
            <div className="Signup-form">
              <div className="title">Register</div>
              <h5>{flag}</h5>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelop"></i>
                  <input
                    type="text"
                    placeholder="Enter your Username"
                    required
                    name="register_name"
                    value={register.register_name}
                    onChange={handleInputRegister}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelop"></i>
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    required
                    name="register_email"
                    value={register.register_email}
                    onChange={handleInputRegister}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelop"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    name="register_password"
                    value={register.register_password}
                    onChange={handleInputRegister}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelop"></i>
                  <input
                    type="text"
                    placeholder="Enter your Address"
                    required
                    name="register_address"
                    value={register.register_address}
                    onChange={handleInputRegister}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelop"></i>
                  <input
                    type="text"
                    placeholder="Enter your Phone No."
                    required
                    name="register_phone"
                    value={register.register_phone}
                    onChange={handleInputRegister}
                  />
                </div>
                <div className="button input-box">
                  <i className="fas fa-envelop"></i>
                  <button type="submit" onClick={handleRegister}>
                    Submit
                  </button>
                </div>
                <div className="text">
                  Already have an account? <label for="flip">Login now</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
