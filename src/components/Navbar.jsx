import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-md-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Navigation Styles</h3>
          </div>
          <div className="card-body">
            <ul className="nav1 mb-2">
              <li className="nav-item1">
                <NavLink className="nav-link active" to="/">
                  <i className="si si-screen-desktop mr-2"></i>Home
                </NavLink>
              </li>
              <li className="nav-item1">
                <NavLink className="nav-link text-dark" to="#">
                  <i className="si si-layers mr-2"></i>About
                </NavLink>
              </li>
              <li className="nav-item1">
                <NavLink className="nav-link text-dark" to="#">
                  <i className="si si-screen-desktop mr-2"></i>Pages
                </NavLink>
              </li>
            </ul>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav-style ">
              <div className="container">
                <NavLink className="navbar-brand" to="#">
                  Sample Heading
                </NavLink>
                <ul className="navbar-nav ml-lg-auto">
                  <li className="nav-item d-none d-lg-flex">
                    <NavLink className="nav-link nav-link-icon" to="#">
                      <i className="si si-heart"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item d-none d-lg-flex">
                    <NavLink className="nav-link nav-link-icon" to="#">
                      <i className="si si-envelope"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link nav-link-icon" to="#">
                      <i className="si si-settings"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
