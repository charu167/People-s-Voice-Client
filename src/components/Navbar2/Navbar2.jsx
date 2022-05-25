import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar2.css";

export default function Navbar2() {
  const items = [
    {
      title: "Complain",
      link: "/user/complain",
    },
    {
      title: "Login",
      link: "/user/login",
    },
    {
      title: "Register",
      link: "/user/register",
    },
    {
      title: "Dashboard",
      link: "/user/dashboard",
    },
  ];

  return (
    <div className="Navbar2">
      <div className="left">
        <span className="brand">
          <NavLink className="link" to="/user">
            People's Voice
          </NavLink>
        </span>
      </div>
      <div className="right">
        {items.map((e, i) => {
          return (
            <NavLink className="link link1" key={i} to={e.link}>
              {e.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
