import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import "./Sidebar.css";
const Sidebar = (props) => {
  const { path, url } = useRouteMatch();
  const [inactive, setInactive] = useState(true);
  const [expand, setExpand] = useState(false);

  const sideBarItems = props.sideBarData.map((e) => {
    return (
      <li
        className="menu-item-major"
        onClick={() => {
          if (inactive) {
            setInactive(false);
            props.changeNav(!props.variable);
          }
        }}
      >
        <NavLink className="menu-item" to={e.path}>
          <div className="menu-icon">{e.icon}</div>
          <span>{e.title}</span>
        </NavLink>
      </li>
    );
  });

  //Rendering JSX
  return (
    <div className={`side-bar ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div
          className="logo"
          onClick={() => {
            setInactive(!inactive);
            props.changeNav(!props.variable);
            setExpand(0);
          }}
        >
          <i class="bx bx-menu"></i>
        </div>
      </div>

      <div className="main-menu">
        <ul>
          {sideBarItems}
          {props.submenu ? (
            <li className="menu-item-major" onClick={() => setExpand(!expand)}>
              <NavLink className="menu-item" to="#">
                <div className="menu-icon">
                  <i class="bx bxs-user"></i>
                </div>
                <span>
                  Gramsevak <i class="bx bx-right-arrow"></i>
                </span>
              </NavLink>
              <ul className={`sub-menu ${expand ? "active" : ""}`}>
                {props.submenuData.map((e) => {
                  return (
                    <li>
                      <NavLink to={e.path}>{e.title}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
