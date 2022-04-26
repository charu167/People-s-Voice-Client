import React, { useState, useContext, useEffect } from "react";
import { Route, useRouteMatch, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Importing components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Login from "../../pages/GramSevak/Login/Login";
import GramSevakDashboard from "../../pages/GramSevak/Dashboard/Dashboard";
import ComplaintRegisteration from "../../pages/GramSevak/ComplaintRegisteration/ComplaintRegisteration";
import UserDetails from "../../pages/GramSevak/UserDetails/UserDetails";
import Settings from "../../pages/GramSevak/Settings/Settings";
import Reports from "../../pages/GramSevak/Reports/Reports";
import New from "../../pages/GramSevak/New/New";
import InProcess from "../../pages/GramSevak/InProcess/InProcess";
import Completed from "../../pages/GramSevak/Completed/Completed";

//Importing Context
import AuthContext from "../../context/AuthContext";

//Importing data
import { sideBarData } from "./GramSevakData";

const Gramsevak = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const { path, url } = useRouteMatch();
  const [a, setA] = useState(0);
  const history = useHistory();

  useEffect(() => {
    console.log("lavda");
    if (isLoggedIn("gsid")) {
      return;
    } else {
      history.push(`${path}/login`);
    }
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <>
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
            logout={"gramsevak"}
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

        <Route exact path={`${path}/login`}>
          <Login />
        </Route>
      </>
    </AnimatePresence>
  );
};

export default Gramsevak;
