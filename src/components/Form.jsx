import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
  let regx_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  let regx_mobile = /^[89][0-9]{9}/;

  const history = useHistory();
  const [flagRegister, setFlagRegister] = useState("");
  const [flagLogin, setFlagLogin] = useState("");

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
      setFlagRegister("Please fill all the fields");
    } else {
      if (!regx_email.test(register.register_email)) {
        setFlagRegister("Invalid email");
      } else if (register.register_name === register.register_password) {
        setFlagRegister("Username and Password cannot be same");
      } else if (!regx_mobile.test(register.register_phone)) {
        setFlagRegister("Mobile number is invalid");
      } else {
        setFlagRegister("");
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
    }
  };

  //Logging in user
  const handleLogin = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    if (!login.login_email || !login.login_password) {
      setFlagLogin("Please fill all the fields");
    } else {
      if (!regx_email.test(login.login_email)) {
        setFlagLogin("Inavlid email");
      } else {
        setFlagLogin("");
        formData.append("email", login.login_email);
        formData.append("password", login.login_password);

        const url = props.props.url_log;

        await axios
          .post(url, formData)
          .then((res) => {
            if (res.data === 123) {
              // window.alert(`User logged in successfully!`);
              history.push("/");
            } else if(res.data === 1){
              setFlagLogin("Invalid Credentials")
            } else{
              setFlagLogin("User doesn't exist")
            }
          })
          .catch((err) => console.log(err));
      }
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
              <div className="title">{props.props.title} Login</div>
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

                <button
                  className="form-btn"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="flag">{flagLogin}</p>
                <div className="text">
                  Don't have an account ? <label for="flip">Sign Up now</label>{" "}
                </div>
              </div>
            </div>

            {/* Registeration form */}
            <div className="Signup-form">
              <div className="title">{props.props.title} Register</div>

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

                <button type="submit" class="form-btn" onClick={handleRegister}>
                  Register
                </button>
                <p className="flag">{flagRegister}</p>
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
