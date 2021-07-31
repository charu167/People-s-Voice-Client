import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
// import dotenv from 'dotenv'
// import env from 'react-dotenv'

import Navbar from "./components/Navbar";
import PageOne from "./components/PageOne";
import GSRegLog from "./components/GSRegLog";
import AdminRegLog from "./components/AdminRegLog";
import Form from "./components/Form";
import Error from "./components/Error";

// import './assets/css/boxed.css'
// import './assets/css/color-styles.css'
// import './assets/css/dark-boxed.css'
// import './assets/css/dark-style.css'
// import './assets/css/side-menu.css'
// import './assets/css/sidemenu-2.css'
// import './assets/css/sidemenu-closed.css'
// import './assets/css/sidemenu-overlay.css'
// import './assets/css/sidemenu-responsive-tabs.css'
// import './assets/css/sidemenu.css'
// import './assets/css/skin-modes.css'

import './css/styled.css'
// import './assets/css/style.css'

// env.config({path: '../config.env'})


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
      <Route path = "/admin">
        <AdminRegLog/>
      </Route>

      {/* Gram Sevak Registeration Path */}
      <Route path = "/gramsevak">
        <GSRegLog/>
      </Route>

      {/* Error Page */}
      {/* <Route path="">
        <Error/>
      </Route> */}

    </>
  );
}

export default App;
