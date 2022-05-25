import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

//Importing components
import Home from "../../pages/User/Home/Home";
import ComplaintRegisteration from "../../pages/User/ComplaintRegisteration/ComplaintRegisteration";
import Register from "../../pages/User/Register/Register";
import Login from "../../pages/User/Login/Login";
import Complaint from "../../pages/User/Complaint/Complaint";
import Dashboard from "../../pages/User/Dashboard/Dashboard";
import Navbar2 from "../../components/Navbar2/Navbar2";

import { AuthProvider } from "../../context/AuthContext";

const User = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Navbar2 />
      <Route exact path={path}>
        <Home />
      </Route>
      <Route path={`${path}/complain`}>
        <ComplaintRegisteration />
      </Route>
      <Route path={`${path}/register`}>
        <Register />
      </Route>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/complaint`}>
        <Complaint />
      </Route>
      <Route path={`${path}/dashboard`}>
        <Dashboard />
      </Route>
    </>
  );
};

export default User;
