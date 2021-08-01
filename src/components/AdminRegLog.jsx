import React, { useState } from "react";
import Form from "./Form";

const AdminRegLog = () => {

  const url  = {
    url_reg:"/politician_image_building/admin-register.php" ,
    url_log:"/politician_image_building/admin-login.php",
    url_page:"/admin",
    title: "Admin"
  }

  //rendering jsx form
  return <Form 
           props = {url}
          />;
};

export default AdminRegLog;
