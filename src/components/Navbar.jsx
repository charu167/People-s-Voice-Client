import React from "react";
import { NavLink } from "react-router-dom";

// import "../assets/plugins/bootstrap/css/bootstrap.min.css"
// import "../assets/css/style.css"
// import "../assets/css/dark-style.css"
// import "../assets/css/color-styles.css"
// import "../assets/css/skin-modes.css"
// import "../assets/plugins/p-scroll/p-scroll.css"
// import "../assets/css/sidemenu.css"
// import "../assets/plugins/p-scroll/p-scroll.css"
// import "../assets/plugins/iconfonts/plugin.css"
// import "../assets/plugins/fontawesome-free/css/all.css"
// import "../assets/plugins/sidebar/sidebar.css"
// import "../assets/skins/color-skins/color15.css"
// import "../assets/skins/demo.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-0 Navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          Logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/Admin">
              Admin
            </NavLink>
            <NavLink className="nav-link" to="/gramsevak">
              GramSevak
            </NavLink>
            {/* <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
