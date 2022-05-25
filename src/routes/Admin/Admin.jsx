import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

//Importing components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Login from "../../pages/Admin/Login/Login";
import AdminDashboard from "../../pages/Admin/Dashboard/Dashboard";
import GramSevakRegisteration from "../../pages/Admin/GramSevakRegisteration/GramSevakRegisteration";
import GramSevakList from "../../pages/Admin/GramSevakList/GramSevakList";
import UserDetails from "../../pages/Admin/UserDetails/UserDetails";
import Settings from "../../pages/Admin/Settings/Settings";
import Reports from "../../pages/Admin/Reports/Reports";
import New from "../../pages/Admin/New/New";
import InProcess from "../../pages/Admin/InProcess/InProcess";
import Completed from "../../pages/Admin/Completed/Completed";

const Admin = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Sidebar />
      <Navbar />

      <Route exact path={`${path}`}>
        <AdminDashboard />
      </Route>

      <Route path={`${path}/new`}>
        <New />
      </Route>

      <Route path={`${path}/inprocess`}>
        <InProcess />
      </Route>

      <Route path={`${path}/completed`}>
        <Completed />
      </Route>

      <Route path={`${path}/reports`}>
        <Reports />
      </Route>

      <Route path={`${path}/gslist`}>
        <GramSevakList />
      </Route>

      <Route path={`${path}/gsreg`}>
        <GramSevakRegisteration />
      </Route>

      <Route path={`${path}/userdetail`}>
        <UserDetails />
      </Route>

      <Route exact path={`${path}/login`}>
        <Login />
      </Route>

      <Route path={`${path}/settings`}>
        <Settings />
      </Route>
    </>
  );
};

export default Admin;
