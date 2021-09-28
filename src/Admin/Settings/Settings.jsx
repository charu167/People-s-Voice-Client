//IMPORTING CSS
import "./Settings.css";

//IMPORTING LIBRARIES
import React from "react";
import { useHistory } from "react-router-dom";

const Settings = () => {
  //LOGIN CHECK
  const history = useHistory();
  if (!sessionStorage.getItem("loggedin")) {
    history.push("/admin/login");
  }

  //CLEARING SESSION STORAGE
  const handleLogout = () => {
    sessionStorage.removeItem("loggedin");
    sessionStorage.clear();
    history.push("/admin/login");
  };

  //JSX
  return (
    <div className="outermost-container">
      <div className="settings">
        <h3 className="title">settings</h3>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Settings;
