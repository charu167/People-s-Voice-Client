import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const Sidebar = (props) => {
  const { path, url } = useRouteMatch();
  const [inactive, setInactive] = useState(true);
  const [expand, setExpand] = useState(false);

  const sideBarData = [
    {
      title: "Dashboard",
      path: `${path}/`,
      icon: <i class="bx bxl-sketch"></i>,
    },
    {
      title: "Complaint",
      path: `${path}/complainreg`,
      icon: <i class="bx bx-qr"></i>,
    },
    {
      title: "User Details",
      path: `${path}/userdetail`,
      icon: <i class="bx bxs-user-detail"></i>,
    },
    {
      title: "Reports",
      path: `${path}/reports`,
      icon: <i class="bx bxs-report"></i>,
    },
  ];

  const sideBarItems = sideBarData.map((e) => {
    return (
      <li
        className="menu-item-major"
        onClick={() => {
          if (inactive) {
            setInactive(false);
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


  console.log(url)
  //Rendering JSX
  return (
    <div className={`side-bar ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div
          className="logo"
          onClick={() => {
            setInactive(!inactive);
            props.changeNav(!props.variable);
          }}
        >
          <i class="bx bx-menu"></i>
        </div>
      </div>

      <div className="main-menu">
        <ul>
          {sideBarItems}

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
              <li>
                <NavLink to={`${path}/gsreg`}>Registeration</NavLink>
              </li>
              <li>
                <NavLink to={`${path}/gslist`}>List</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
