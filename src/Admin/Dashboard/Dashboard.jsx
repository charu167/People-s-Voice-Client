//IMPORTING CSS
import "./Dashboard.css";

//IMPORINTG COMPONENTS
import Card from "../../components/Cards/Cards";
import BarChart from "../../components/Charts/BarChart";

//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import axios from "axios";

//GET URLs FOR CARDS
const url_new =
  "/politician_image_building/Admin Dashboard/Complaints Count/NewCount.php";
const url_inprocess =
  "/politician_image_building/Admin Dashboard/Complaints Count/InPRocessCount.php";
const url_completed =
  "/politician_image_building/Admin Dashboard/Complaints Count/CompletedCount.php";

//GET URLs FOR CHART
const url_newdata =
  "/politician_image_building/Admin Dashboard/Chart/chartnewData.php";
const url_inprodata =
  "/politician_image_building/Admin Dashboard/Chart/chartinproData.php";
const url_completedata =
  "/politician_image_building/Admin Dashboard/Chart/chartcompleteData.php";

const AdminDashboard = () => {
  //DATA
  const [newCard, setNewCard] = useState(null);
  const [inProcessCard, setInProcessCard] = useState(null);
  const [completedCard, setCompletedCard] = useState(null);
  const [newdata, setNewData] = useState(null);
  const [inprodata, setInproData] = useState(null);
  const [completedata, setCompletedData] = useState(null);

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

  const BarChartDataSets = [
    {
      label: "new",
      data: newdata,
      backgroundColor: ["#F75D81"],
    },
    {
      label: "in process",
      data: inprodata,
      backgroundColor: ["#42A5F6"],
    },
    {
      label: "completed",
      data: completedata,
      backgroundColor: ["#7ED320"],
    },
  ];

  const cardData = [
    {
      color: "red",
      title: "New",
      count: newCard,
      path: "/admin/new",
      icon: <i class="bx bx-error-circle"></i>,
    },
    {
      color: "blue",
      title: "In Process",
      count: inProcessCard,
      path: "/admin/inprocess",
      icon: <i class="bx bx-loader-circle"></i>,
    },
    {
      color: "yellow",
      title: "Completed",
      count: completedCard,
      path: "/admin/completed",
      icon: <i class="bx bx-check-circle"></i>,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const res4 = await axios.get(url_newdata);
        const sample1 = [];
        res4.data.map((e) => {
          sample1.push(e);
        });
        setNewData(sample1);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res5 = await axios.get(url_inprodata);
        const sample1 = [];
        res5.data.map((e) => {
          sample1.push(e);
        });
        setInproData(sample1);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res6 = await axios.get(url_completedata);
        const sample3 = [];
        res6.data.map((e) => {
          sample3.push(e);
        });
        setCompletedData(sample3);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res1 = await axios.get(url_new);
        setNewCard(res1.data);

        const res2 = await axios.get(url_inprocess);
        setInProcessCard(res2.data);

        const res3 = await axios.get(url_completed);
        setCompletedCard(res3.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [newCard, inProcessCard, completedCard]);

  //LOGIN CHECK
  const history = useHistory();
  let k = sessionStorage.getItem("loggedin");
  if (!k) {
    history.push("/admin/login");
  }

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
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
