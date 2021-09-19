import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./Cards.css";
const Card = (props) => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    setCount(props.count);
  });

  return (
    <div className={`card ${props.color}`}>
      <div className="logo">
        <NavLink to={props.path}>{props.icon}</NavLink>
      </div>
      <div className="data">
        <span className="count">{count}</span>
        <span className="title">{props.title}</span>
      </div>
    </div>
  );
};

export default Card;
