import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const Navbar = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-0 border-bottom-5 fixed-top Navbar">
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
    </nav>

      {/* <header class="app-header header">
        <div class="container-fluid">
          <div class="d-flex">
            <a class="header-brand" href="index.html">
              
            </a>

            <a
              aria-label="Hide Sidebar"
              class="app-sidebar__toggle"
              data-toggle="sidebar"
              href="#"
            ></a>
            <div class="dropdown d-sm-flex d-none">
              <div class="dropdown-menu header-search dropdown-menu-left dropdown-menu-arrow">
                <div class="input-group w-100 p-2">
                  <div class="input-group-append ">
                    <button type="button" class="btn btn-primary ">
                      <i class="fas fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex order-lg-2 ml-auto">
              
              <button
                class="navbar-toggler navresponsive-toggler d-sm-none"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon fe fe-more-vertical text-white"></span>
              </button>

              
                
              
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Navbar;
