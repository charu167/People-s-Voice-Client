import { Route, useRouteMatch, useHistory } from "react-router-dom";

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

const Gramsevak = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Sidebar />
      <Navbar />

      <Route exact path={`${path}`}>
        <GramSevakDashboard />
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

      <Route path={`${path}/complainreg`}>
        <ComplaintRegisteration />
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

export default Gramsevak;
