import React, { useState } from "react";

import { NavLink, useRouteMatch } from "react-router-dom";

const Navbar = (props) => {
  const { path, url } = useRouteMatch();

  const menuLinksData = [
    { title: "Home", path: "/" },
    { title: "About", path: "/admin" },
    { title: "Contact", path: "/admin" },
    { title: "Services", path: "/admin" },
  ];

  const menuLinks = menuLinksData.map((e) => {
    return (
      <li>
        <NavLink to={e.path}>{e.title}</NavLink>
      </li>
    );
  });

  const mediaLinksData = [
    { icon: <i class="bx bxs-bell"></i>, path: "#" },
    { icon: <i class="bx bxs-cog"></i>, path: "/settings" },
    { icon: <i class="bx bx-fullscreen"></i>, path: "#" },
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
          <h2>LOGO</h2>
          {/* <i class="bx bx-podcast"></i> */}
        </div>

        {/* main links */}
        <div className="menu-links">
          <ul>{menuLinks}</ul>
        </div>

        {/* media */}
        <div className="media-links ">
          <ul className="media-social">{mediaLinks}</ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
