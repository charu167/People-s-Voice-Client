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
            setInactive(!inactive);
            props.changeNav(!props.variable);
          }
        }}
      >
        <div className="menu-item" to="#">
          <div className="menu-icon">{e.icon}</div>
          <NavLink
            onClick={() => {
              setInactive(true);
            }}
            className="link"
            to={e.path}
          >
            <span>{e.title}</span>
          </NavLink>
        </div>
      </li>
    );
  });

  const handleDocClick = () => {
    setInactive(true);
    props.changeNav(false);
    setExpand(false);
  };

  document.addEventListener("click", handleDocClick, true);

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
            <li className="menu-item-major">
              <div className="menu-item">
                <div className="menu-icon">
                  <i
                    onClick={() => {
                      setInactive(!inactive);
                      props.changeNav(1);
                    }}
                    class="bx bxs-user"
                  ></i>
                </div>
                <span
                  onClick={() => {
                    setExpand(!expand);
                    setInactive(false);
                    props.changeNav(1);
                  }}
                >
                  Gramsevak <i class="bx bx-right-arrow"></i>
                </span>
              </div>
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
