import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import PageOne from "./components/PageOne";
import GSRegLog from "./components/GSRegLog";
import AdminRegLog from "./components/AdminRegLog";
import Error from "./components/Error";

import "./css/styled.css";

function App() {
  return (
    <>
      navbar
      <Navbar />
      {/* First page route */}
      <Route exact path="/">
        <PageOne />
      </Route>
      {/* Admin Registeration path */}
      <Route path="/admin">
        <AdminRegLog />
      </Route>
      {/* Gram Sevak Registeration Path */}
      <Route path="/gramsevak">
        <GSRegLog />
      </Route>


      {/* Error Page */}
      {/* <Route path="">
        <Error/>
      </Route> */}
    </>
  );
}

export default App;
