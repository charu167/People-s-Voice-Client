import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
  const { path, url } = useRouteMatch();

  let region = sessionStorage.getItem("GSRegion");

  const [notification, setNotification] = useState("notification inactive");
  const [notiCount, setNotiCount] = useState("notiCount inactive");
  const [notiData, setNotiData] = useState(null);
  const [notiCountData, setNotiCountData] = useState(0);
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
            sample.push([i, e.u_name, e.c_location]);
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
          class="bx bxs-bell"
          onClick={() => {
            notification === "notification inactive"
              ? setNotification("notification ")
              : setNotification("notification inactive");
          }}
        >
          <span className={notiCount}>{notiCountData}</span>
          
          <div className={notification}>
            <h2 className="notification-title">Notification</h2>
            <table>
              <tbody>
                {notiData === null
                  ? []
                  : notiData.map((e) => {
                      return (
                        <tr className="tblrw">
                          {/* <td>{e[0]}</td> */}
                          <div className="noti-name">
                          <td>{e[1]}</td>
                          </div>
                          <div className="noti-info">
                          <td>{e[2]}</td>
                          </div>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
            <NavLink to={props.viewAll}>
              <button>view all</button>
            </NavLink>
          </div>
        </i>
      ),
      path: "#",
    },
    { icon: <i class="bx bxs-cog"></i>, path: props.path },
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
