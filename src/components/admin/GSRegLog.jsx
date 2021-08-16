import React, { useState } from "react";
import { motion } from "framer-motion";
// import Form from "../Form";

const GSRegLog = () => {
  const url = {
    url_reg: "/politician_image_building/gs-register.php",
    url_log: "/politician_image_building/gs-login.php",
    url_page: "/gramsevak",
    title: "Gram Sevak",
  };

  //rendering jsx form
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
      <div className="inner-container">
        <div className="gs">
          <input type="checkbox" checked id="flip" />
          <div className="cover"></div>
          <form action="#">
            <div className="form-content">
              {/* Login form */}
              <div className="login-form">
                <div className="title"> Login</div>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelop"></i>
                    <input
                      type="email"
                      placeholder="Enter your email id"
                      required
                      name="login_email"
                      // value={login.login_email}
                      // onChange={handleInputLogin}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelop"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                      name="login_password"
                      // value={login.login_password}
                      // onChange={handleInputLogin}
                    />
                  </div>

                  <button
                    className="form-btn"
                    type="submit"
                    // onClick={handleLogin}
                  >
                    Login
                  </button>
                  <p className="flag"></p>
                  <div className="text">
                    Don't have an account ?{" "}
                    <label for="flip">Sign Up now</label>{" "}
                  </div>
                </div>
              </div>

              {/* Registeration form */}
              <div className="Signup-form">
                <div className="title">Gramsevak Register</div>

                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelop"></i>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      name="name"
                      // value={register.register_name}
                      // onChange={handleInputRegister}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelop"></i>
                    <input
                      type="text"
                      placeholder="Address"
                      required
                      name="address"
                      // value={register.register_email}
                      // onChange={handleInputRegister}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelop"></i>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      required
                      name="phone"
                      // value={register.register_password}
                      // onChange={handleInputRegister}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelop"></i>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      // value={register.register_address}
                      // onChange={handleInputRegister}
                    />
                  </div>
                  
                  <div className="input-box">
                    <i className="fas fa-envelop"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      // value={register.register_address}
                      // onChange={handleInputRegister}
                    />
                  </div>
                  

                  <button
                    type="submit"
                    class="form-btn"
                    // onClick={handleRegister}
                  >
                    Register
                  </button>
                  {/* <p className="flag"></p> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default GSRegLog;
