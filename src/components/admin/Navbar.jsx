import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
// import $ from "jquery";
import { NavLink, useRouteMatch } from "react-router-dom";

const Navbar = (props) => {
  const { path, url } = useRouteMatch();
  let elem = document.documentElement;

  const goFS = document.getElementById("full");

  const[b, setB] = useState('inactive')
  if(props.prop.a === 1){
    setB('active')
  }
  
  
  return (
    <>
      <nav className="main-nav">
        {/* LOGO */}
        <div className={`logo ${props.prop}`}>
          <h2>People's Voice</h2>
          <i class="bx bx-podcast"></i>
        </div>

        {/* main links */}
        <div className="menu-links">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">About</NavLink>
            </li>
            <li>
              <NavLink to="#">Contact</NavLink>
            </li>
            <li>
              <NavLink to="#">Services</NavLink>
            </li>
          </ul>
        </div>

        {/* media */}
        <div className="media-links">
          <ul className="media-social">
            <li>
              <NavLink to={`${url}/priority`}>
                <i class="far fa-bell"></i>
              </NavLink>
            </li>

            <li>
              <NavLink to={`${url}/settings`}>
                <i class="fas fa-cog"></i>
              </NavLink>
            </li>

            <li>
              <NavLink to="#" id="full">
                <i class="bx bx-fullscreen"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

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
    </>
  );
};

export default Navbar;
