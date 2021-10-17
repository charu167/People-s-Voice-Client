import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Importing components
import Login from "../../GramSevak/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import GramSevakDashboard from "../../GramSevak/Dashboard/Dashboard";
import ComplaintRegisteration from "../../GramSevak/ComplaintRegisteration/ComplaintRegisteration";
import UserDetails from "../../GramSevak/UserDetails/UserDetails";
import Settings from "../../GramSevak/Settings/Settings";
import Reports from "../../GramSevak/Reports/Reports";
import New from "../../GramSevak/New/New";
import InProcess from "../../GramSevak/InProcess/InProcess";
import Completed from "../../GramSevak/Completed/Completed";

//Importing data
import { sideBarData } from "./GramSevakData";

const Gramsevak = () => {
  const { path, url } = useRouteMatch();
  const [a, setA] = useState(0);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Route exact path={`${path}/login`}>
          <Login />
        </Route>

        <Route path={`${path}`}>
          <Sidebar
            changeNav={(a) => setA(a)}
            variable={a}
            sideBarData={sideBarData}
            // submenuData={submenuData}
            submenu={0}
          />
        </Route>

        <Route path={`${path}`}>
          <Navbar
            prop={a ? "" : "inactive"}
            logo={"GramSevak"}
            path={"/gramsevak/settings"}
            notification={
              "/politician_image_building/Gramsevak Dashboard/Complaints Retrieval/New.php"
            }
            viewAll={`${path}/new`}
          />
        </Route>

        <Route exact path={`${path}`}>
          <GramSevakDashboard />
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

export default Gramsevak;
