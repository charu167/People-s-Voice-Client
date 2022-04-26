import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
  const history = useHistory();
  const { path, url } = useRouteMatch();

  let region = sessionStorage.getItem("GSRegion");

  const [notification, setNotification] = useState("notification inactive");
  const [notiCount, setNotiCount] = useState("notiCount inactive");
  const [notiData, setNotiData] = useState(null);
  const [notiCountData, setNotiCountData] = useState(0);
  const [settings, setSettings] = useState("set inactive");
  //FETCHING NOTIFICATION DATA
  const url_get = props.notification;
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url_get, {
          headers: {
            region: region,
          },
        })
        .then((res) => {
          const sample = [];
          res.data.map((e, i) => {
            sample.push([i, e.u_name, e.c_description]);
          });
          setNotiData(sample);
          if (res.data.length > 9) {
            setNotiCountData("9+");
          } else {
            setNotiCountData(res.data.length);
          }
          if (res.data.length !== 0) {
            setNotiCount("notiCount");
          } else {
            setNotiCount("notiCount inactive");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [notiCountData, notiData]);

  const mediaLinksData = [
    {
      icon: (
        <i
          onClick={() => {
            settings === "set inactive"
              ? setSettings("set")
              : setSettings("set inactive");
          }}
          class="bx bxs-user-circle"
        >
          <div className={settings}>
            <NavLink
              className="link"
              to={props.path}
              style={
                props.logout === "gramsevak"
                  ? {
                      display: "flex",
                    }
                  : {
                      display: "none",
                    }
              }
            >
              <span>Edit Profile</span>
            </NavLink>
            <span className="link">
              <i
                onClick={
                  props.logout === "gramsevak"
                    ? () => {
                        sessionStorage.removeItem("loggedinGramSevak");
                        history.push("/gramsevak/login");
                      }
                    : () => {
                        sessionStorage.removeItem("loggedin");
                        history.push("/admin/login");
                      }
                }
                class="bx bx-log-out"
              ></i>
            </span>
          </div>
        </i>
      ),
      path: "#",
    },
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
