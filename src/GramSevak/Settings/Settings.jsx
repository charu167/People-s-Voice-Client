import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import "./Settings.css";

const Settings = () => {
  const history = useHistory();
  const region = sessionStorage.getItem("GSRegion");
  useEffect(() => {
    if (!sessionStorage.getItem("loggedinGramSevak")) {
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
