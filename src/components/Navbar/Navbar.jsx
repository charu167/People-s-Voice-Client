import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useRouteMatch } from "react-router-dom";

const Navbar = (props) => {
  const { path, url } = useRouteMatch();

  const mediaLinksData = [
    { icon: <i class="bx bxs-bell"></i>, path: "#" },
    { icon: <i class="bx bxs-cog"></i>, path: "/admin/settings" },
    { icon: <i class="bx bx-fullscreen"></i>, path: "/" },
  ];

  const mediaLinks = mediaLinksData.map((e) => {
    return (
      <li>
        <NavLink to={e.path} id="full">
          {e.icon}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <nav className={`main-nav ${props.prop}`}>
        {/* LOGO */}
        <div className="logo">
          <h2>{props.logo}</h2>
          {/* <i class="bx bx-podcast"></i> */}
        </div>

        {/* main links */}
        <div className="menu-links">{/* <ul>{menuLinks}</ul> */}</div>

        {/* media */}
        <div className="media-links ">
          <ul className="media-social">{mediaLinks}</ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
