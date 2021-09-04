import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const Card = (props) => {
  const { path, url } = useRouteMatch();

  return (
    <div className={`card ${props.color}`}>
      <div className="logo">
        <NavLink to={`/admin/${props.path}`}>
          {props.icon}
        </NavLink>
      </div>
      <div className="data">
        <span className="count">{props.count}</span>
        <span className="title">{props.title}</span>
      </div>
    </div>
  );
};

export default Card;
