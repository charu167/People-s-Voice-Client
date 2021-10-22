import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Importing components
import Login from "../../Admin/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";
import GramSevakRegisteration from "../../Admin/GramSevakRegisteration/GramSevakRegisteration";
import GramSevakList from "../../Admin/GramSevakList/GramSevakList";
import ComplaintRegisteration from "../../Admin/ComplaintRegisteration/ComplaintRegisteration";
import UserDetails from "../../Admin/UserDetails/UserDetails";
import Settings from "../../Admin/Settings/Settings";
import Reports from "../../Admin/Reports/Reports";
import New from "../../Admin/New/New";
import InProcess from "../../Admin/InProcess/InProcess";
import Completed from "../../Admin/Completed/Completed";

//Importing data
import { sideBarData, submenuData } from "./AdminData";

const Admin = () => {
  const { path, url } = useRouteMatch();
  const [a, setA] = useState(0);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Route path={`${path}`}>
          <Sidebar
            changeNav={(a) => setA(a)}
            variable={a}
            sideBarData={sideBarData}
            submenuData={submenuData}
            submenu={1}
          />
        </Route>

        <Route path={`${path}`}>
          <Navbar
            prop={a ? "" : "inactive"}
            logo={"Admin"}
            path={"/admin/settings"}
            notification={
              "/politician_image_building/Admin Dashboard/Complaints Retrieval/NewComplaintsRetrieve.php"
            }
            viewAll={`${path}/new`}
          />
        </Route>

        <Route exact path={`${path}/login`}>
          <Login />
        </Route>

        <Route exact path={`${path}`}>
          <AdminDashboard />
        </Route>

        <Route path={`${path}/gsreg`}>
          <GramSevakRegisteration />
        </Route>

        <Route path={`${path}/gslist`}>
          <GramSevakList />
        </Route>

        <Route path={`${path}/complainreg`}>
          <ComplaintRegisteration />
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
          <New />
        </Route>

        <Route path={`${path}/inprocess`}>
          <InProcess />
        </Route>

        <Route path={`${path}/completed`}>
          <Completed />
        </Route>
      </AnimatePresence>
    </>
  );
};

export default Admin;
