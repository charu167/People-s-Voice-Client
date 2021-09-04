import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "../components/utilities/Navbar";
import Sidebar from "../components/utilities/Sidebar";
import AdminDashboard from "../components/admin/AdminDashboard";
import GSRegLog from "../components/admin/GSRegLog";
import GSList from "../components/admin/GSList";
import ComplaintReg from "../components/admin/ComplaintReg";
import UserDetails from "../components/admin/UserDetails";
import Settings from "../components/admin/Settings";
import Reports from "../components/admin/Reports";
import NewComplaints from "../components/admin/NewComplaints";
import InProcessComplaints from "../components/admin/InProcessComplaints";
import CompletedComplaints from "../components/admin/CompletedComplaints";

const Admin = () => {
  const { path, url } = useRouteMatch();
  const [a, setA] = useState(0);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Route path={`${path}`}>
          <Sidebar changeNav={(a) => setA(a)} variable={a} />
        </Route>

        <Route path={`${path}`}>
          <Navbar prop={a ? "" : "inactive"} />
        </Route>

        <Route exact path={`${path}`}>
          <AdminDashboard />
        </Route>

        <Route path={`${path}/gsreg`}>
          <GSRegLog />
        </Route>

        <Route path={`${path}/gslist`}>
          <GSList />
        </Route>

        <Route path={`${path}/complainreg`}>
          <ComplaintReg />
        </Route>

        <Route path={`${path}/userdetail`}>
          <UserDetails />
        </Route>

        <Route path={`${path}/reports`}>
          <Reports />
        </Route>

        <Route path={`${path}/settings`}>
          <Settings />
        </Route>

        <Route path={`${path}/new`}>
          <NewComplaints />
        </Route>

        <Route path={`${path}/inprocess`}>
          <InProcessComplaints />
        </Route>

        <Route path={`${path}/completed`}>
          <CompletedComplaints />
        </Route>
      </AnimatePresence>
    </>
  );
};

export default Admin;
