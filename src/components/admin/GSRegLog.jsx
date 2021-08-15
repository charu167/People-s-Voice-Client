import React, { useState } from "react";
import Form from "../Form";

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
      <div className="outer-container">
        {/* <Form props={url} /> */}
        <h1>Grmsevak Registeration</h1>
      </div>
    </div>
  );
};

export default GSRegLog;
