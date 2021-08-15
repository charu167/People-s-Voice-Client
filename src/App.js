import "./App.css";
import "./css/sidebar.css";
import "./css/styled.css";
import "./css/custom.css";

import "./css/gslist.css"
import "./css/navbar.css";
import "./css/adminDashboard.css";

// -Bootstrap.min css
import "../src/assets/plugins/bootstrap/css/bootstrap.min.css";

// Font Awesome
import "../src/assets/plugins/fontawesome-free/css/all.css";

//Dashboard css
import "../src/assets/css/style.css";
import "../src/assets/css/dark-style.css";
import "../src/assets/css/color-styles.css";
import "../src/assets/css/skin-modes.css";

// p-scroll bar css
import "../src/assets/plugins/p-scroll/p-scroll.css";

// Sidemenu Css
import "../src/assets/css/sidemenu.css";

// Morris.js Charts Plugin
import "../src/assets/plugins/morris/morris.css";

// Font icons
import "../src/assets/plugins/iconfonts/plugin.css";

// Sidebar css
import "../src/assets/plugins/sidebar/sidebar.css";

// COLOR-SKINS
import "../src/assets/skins/color-skins/color15.css";
import "../src/assets/skins/demo.css";

import { Route } from "react-router-dom";

import Gramsevak from "./components/Gramsevak";
import User from "./components/User";
import Admin from "./components/Admin";
import PageOne from "./components/PageOne";

function App() {
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
}

export default App;
