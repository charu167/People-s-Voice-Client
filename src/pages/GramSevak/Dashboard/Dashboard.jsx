//IMPORTING CSS
import "./Dashboard.css";

//IMPORTING LIBRARIES
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

import AuthContext from "../../../context/AuthContext";

//IMPORTING COMPONENTS
import Card from "../../../components/Cards/Cards";
import BarChart from "../../../components/Charts/BarChart";

//GET URLs FOR CARDS
const GramSevakDashboard = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  const BarChartLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [BarChartDataSets, setBraChartData] = useState([
    {
      label: "new",
      data: [],
      backgroundColor: [" #F75D81"],
    },
    {
      label: "in process",
      data: [],
      backgroundColor: [" #42A5F6"],
    },
    {
      label: "completed",
      data: [],
      backgroundColor: ["#7ED320"],
    },
  ]);

  const [categoryDataSets, setCategoryDataSets] = useState([
    {
      label: "Water",
      data: [],
      backgroundColor: [" #F75D81"],
    },
    {
      label: "Healthcare",
      data: [],
      backgroundColor: [" #42A5F6"],
    },
    {
      label: "Unemployment",
      data: [],
      backgroundColor: ["#7ED320"],
    },
    {
      label: "Illiteracy",
      data: [],
      backgroundColor: [" #F75D81"],
    },
    {
      label: "Poverty",
      data: [],
      backgroundColor: [" #42A5F6"],
    },
    {
      label: "Transportation",
      data: [],
      backgroundColor: ["#7ED320"],
    },
  ]);

  const [cardData, setCardData] = useState([
    {
      color: "red",
      title: "New",
      count: null,
      path: "/gramsevak/new",
      icon: <i class="bx bx-error-circle"></i>,
    },
    {
      color: "blue",
      title: "In Process",
      count: null,
      path: "/gramsevak/inprocess",
      icon: <i class="bx bx-loader-circle"></i>,
    },
    {
      color: "yellow",
      title: "Completed",
      count: null,
      path: "/gramsevak/completed",
      icon: <i class="bx bx-check-circle"></i>,
    },
  ]);

  const getData = async () => {
    await axios
      .get("http://localhost:8000/count/", {
        params: {
          admin: 0,
          gsid: localStorage.getItem("gsid"),
          type: 0,
        },
      })
      .then((res) => {
        let sampleBar = BarChartDataSets;
        let sampleCard = cardData;
        for (let i = 0; i < 3; i++) {
          sampleCard[i].count = res.data[2][i];
          res.data.forEach((e) => {
            sampleBar[i].data.push(e[i]);
          });
        }
        setBraChartData(sampleBar);
        setCardData(sampleCard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData2 = async () => {
    await axios
      .get("http://localhost:8000/count/", {
        params: {
          admin: 0,
          gsid: localStorage.getItem("gsid"),
          type: 1,
        },
      })
      .then((res) => {
        let sampleBar = categoryDataSets;

        for (let i = 0; i < 6; i++) {
          res.data.forEach((e) => {
            sampleBar[i].data.push(e[i]);
          });
        }
        setCategoryDataSets(sampleBar);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkAuth = () => {
    if (isLoggedIn("gsid")) {
      return;
    } else {
      history.push("/gramsevak/login");
    }
  };

  useEffect(() => {
    getData2();
    getData();
    // checkAuth();
  }, []);

  //CARDS
  const Cards = cardData.map((e) => {
    return (
      <Card
        color={e.color}
        title={e.title}
        count={e.count}
        path={e.path}
        icon={e.icon}
      />
    );
  });

  //JSX
  return (
    <motion.div
      className="outermost-container"
      initial={{ y: 500 }}
      animate={{
        y: 0,
        transition: { duration: 0.5, type: "spring" },
      }}
      exit={{
        y: -500,
        transition: { duration: 0.3, type: "spring", ease: "ease-in-out" },
      }}
    >
      <div className="dashboard">
        <div className="dashboard-item">
          <div className="dashboard-title">
            Complaint Dashboard <h1>GS {isLoggedIn("gsid")}</h1>
          </div>
          <div className="dashboard-data">{Cards}</div>
        </div>

        <div className="dashboard-item">
          <div className="dashboard-title">Monthly Analysis</div>
          <div className="dashboard-data">
            <BarChart labels={BarChartLabels} datasets={BarChartDataSets} />
          </div>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-title">Monthly Category Wise Analysis</div>
          <div className="dashboard-data">
            <BarChart labels={BarChartLabels} datasets={categoryDataSets} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GramSevakDashboard;
