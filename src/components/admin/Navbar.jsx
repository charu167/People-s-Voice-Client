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
          <h2>LOGO</h2>
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

      
    </>
  );
};

export default Navbar;
