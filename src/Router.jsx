import "./App.css";
import "./css/Admin/sidebar.css";
import "./css/Utilities/styled.css";
import "./css/Utilities/card.css";
import "./css/Utilities/custom.css";
import "./css/Admin/gsreg.css";
import "./css/Admin/gslist.css";
import "./css/Admin/navbar.css";
import "./css/Admin/adminDashboard.css";
import "./css/Admin/complainReg.css";
import "./css/Utilities/pageOne.css";
import "./css/Utilities/barChart.css";
import "./css/Utilities/table.css";
import "./css/Utilities/toggleSwitch.css";

import { Route } from "react-router-dom";

import Gramsevak from "../src/routes/Gramsevak";
import User from "../src/routes/User";
import Admin from "../src/routes/Admin";
import PageOne from "./components/utilities/PageOne";

import React from "react";

const Router = () => {
  return (
    <>
      <Route exact path="/">
        <PageOne />
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>

      <Route path="/gramsevak">
        <Gramsevak />
      </Route>

      <Route path="/user">
        <User />
      </Route>
    </>
  );
};

export default Router;
