import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const Navbar = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light mt-0 border-bottom-5 fixed-top Navbar">
      <div className="d-flex justify-content-around">
        <NavLink className="navbar-brand" to="#">
          Logo
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </div>

          <div className="navbar-nav">
            <NavLink className="nav-link bell-icon" aria-current="page" to={`${path}/priority`}>
              <img src="https://img.icons8.com/material-two-tone/24/000000/bell--v2.png" />
            </NavLink>
          </div>
          
          <div className="navbar-nav">
            <NavLink className="nav-link bell-icon" aria-current="page" to={`${path}/settings`}>
            <img src="https://img.icons8.com/material-sharp/24/000000/settings.png"/>
            </NavLink>
          </div>
        </div>
      </div>
    </nav> */}

      <header className="app-header header">
        <div className="container-fluid">
          <div className="d-flex">
            <NavLink className="header-brand" to="/">
              LOGO
            </NavLink>

            <NavLink
              aria-label="Hide Sidebar"
              className="app-sidebar__toggle"
              data-toggle="sidebar"
              to="#"
            ></NavLink>

            <div className="d-flex order-lg-2 ml-auto">
              <div className="dropdown d-sm-flex d-none header-message">
                <NavLink
                  className="nav-link icon"
                  data-toggle="dropdown"
                  to={`${path}/priority`}
                >
                  <i className="fe fe-bell"></i>
                  <span className=" nav-unread badge badge-warning  badge-pill">
                    
                  </span>
                </NavLink>
              </div>

              <div className="dropdown">
                <NavLink
                  className="nav-link pr-0 leading-none d-flex"
                  data-toggle="dropdown"
                  to={`${path}/settings`}
                >
                  <img src="https://img.icons8.com/color/50/000000/settings.png" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
