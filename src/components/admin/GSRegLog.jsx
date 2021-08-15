import React, { useState } from "react";
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
    <div className="outermost-container">
      <div className="inner-container">
        <div className="gsreg">
          <div className="title">
            <h1>Gram Sevak Registeration</h1>
          </div>
          <form method="post" className="gsform">
            <input
              type="text"
              name="gsname"
              id=""
              placeholder="Name"
              autoComplete="OFF"
            />
            <input
              type="text"
              name="address"
              id=""
              placeholder="Address"
              autoComplete="OFF"
            />
            <input
              type="number"
              name="gsphone"
              id=""
              placeholder="Phone number"
              autoComplete="OFF"
            />
            <input
              type="email"
              name="gsemail"
              id=""
              placeholder="Email"
              autoComplete="OFF"
            />
            <input
              type="password"
              name="gspassword"
              id=""
              placeholder="Password"
              autoComplete="OFF"
            />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GSRegLog;
