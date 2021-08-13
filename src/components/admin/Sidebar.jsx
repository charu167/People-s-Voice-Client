import React from "react";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar fixed-top">
     <div className="dropdown">
        <NavLink className="dropdown-item" exact to={`${url}`}>
          Dashboard
        </NavLink>
      </div>

      <div className="dropdown">
        <button
          className="m-2 btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Gram Sevak
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <NavLink className="dropdown-item" to={`${url}/gsreg`}>
              Registeration
            </NavLink>
          </li>

          <li>
            <NavLink className="dropdown-item" to={`${url}/gslist`}>
              List of Gram sevak
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <NavLink className="dropdown-item" to={`${url}/complainreg`}>
          Complaint Registeration
        </NavLink>
      </div>

      <div className="dropdown">
        <NavLink className="dropdown-item" to={`${url}/userdetail`}>
          User Details
        </NavLink>
      </div>

      <div className="dropdown">
        <NavLink className="dropdown-item" to={`${url}/reports`}>
          Reports
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
