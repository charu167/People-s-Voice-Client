import React from "react";
import $ from "jquery";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  const { path, url } = useRouteMatch();

  const dropDown = () =>{
    document.getElementById("dropdown").classList.toggle("show")
  }

  return (
    <>
      {/* <div className="flex-shrink-0 p-3 bg-white Sidebar" >
        <NavLink
          to={`${url}`}
          className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          
          <span className="fs-5 fw-semibold">Dashboard</span>
        </NavLink>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              Gramsevak
            </button>
            <div className="collapse" id="home-collapse" >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <NavLink to={`${url}/gsreg`} className="link-dark rounded">
                    Registeration
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${url}/gslist`} className="link-dark rounded">
                    Gramsevak List
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <NavLink to={`${url}/complainreg`}> 
              Complaint registeration
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to={`${url}/userdetail`}> 
              User details
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to={`${url}/reports`}> 
              Reports
            </NavLink>
          </li>
          
        </ul>
      </div> */}

      <div className="sidebar">
        <div className="logo-details">
          <i className="nav-links-i bx bxl-react"></i>
          <span className="logo-name">People's Voice</span>
        </div>
        <ul className="nav-links">
          <li className="nav-links-li">
            <NavLink className="nav-links-navlink" to="#">
              <i className="nav-links-i bx bxs-dashboard"></i>
              <span className="link-name">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-links-li">
            <div className="icon-link" id="dropdown">
              <NavLink className="nav-links-navlink" to="#">
                <i className="nav-links-i bx bx-box"></i>
                <span className="link-name">Complaint</span>
              </NavLink>
              <i className="nav-links-i bx bx-chevron-down"></i>
            </div>
          </li>

          <li className="nav-links-li">
            <div className="icon-link"  onClick={dropDown}>
              <NavLink className="nav-links-navlink" to="#">
              <i class='nav-links-i bx bx-ghost'></i>
                <span className="link-name">Gramsevak</span>
              </NavLink>
              <i className="nav-links-i bx bx-chevron-down"></i>
            </div>
            <ul className="sub-menu" id="dropdown">
              <li className="nav-links-li">
                <NavLink className="nav-links-navlink" to="#">
                  Registeration
                </NavLink>
              </li>
              <li className="nav-links-li">
                <NavLink className="nav-links-navlink" to="#">
                  List
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
