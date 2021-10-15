import React from "react";
import { useHistory } from "react-router-dom";
// import "./Settings.css";

const Settings = () => {
  const history = useHistory();
  if (!sessionStorage.getItem("loggedinGramSevak")) {
    history.push("/gramsevak/login");
  }

  const handleLogout = () => {
    sessionStorage.removeItem("loggedinGramSevak");
    // sessionStorage.clear();
    history.push("/gramsevak/login");
  };

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
