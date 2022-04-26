//IMPORTING CSS
import "./Dashboard.css";

//IMPORINTG COMPONENTS
import Card from "../../../components/Cards/Cards";
import BarChart from "../../../components/Charts/BarChart";

//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import axios from "axios";

const AdminDashboard = () => {
  //DATA
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
      backgroundColor: ["#F75D81"],
    },
    {
      label: "in process",
      data: [],
      backgroundColor: ["#42A5F6"],
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
      path: "/admin/new",
      icon: <i class="bx bx-error-circle"></i>,
    },
    {
      color: "blue",
      title: "In Process",
      count: null,
      path: "/admin/inprocess",
      icon: <i class="bx bx-loader-circle"></i>,
    },
    {
      color: "yellow",
      title: "Completed",
      count: null,
      path: "/admin/completed",
      icon: <i class="bx bx-check-circle"></i>,
    },
  ]);

  //LOGIN CHECK
  // const history = useHistory();
  // let k = sessionStorage.getItem("loggedin");
  // if (!k) {
  //   history.push("/admin/login");
  // }

  const getData = async () => {
    await axios
      .get("http://localhost:8000/count/", {
        params: {
          admin: 1,
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
          admin: 1,
          type: 1,
        },
      })
      .then((res) => {
        console.log(res.data);
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

  useEffect(() => {
    getData();
    getData2();
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
          <div className="dashboard-title">Complaint Dashboard</div>
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

export default AdminDashboard;
