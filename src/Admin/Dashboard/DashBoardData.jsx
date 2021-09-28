import React, { useState } from "react";
import axios from "axios";

let newCard = [];
let inProcessCard = [];
let completedCard = [];
let chartdata = [];

const url_chart =
  "/politician_image_building/Admin Dashboard/Chart/chartData.php";

const url_new =
  "/politician_image_building/Admin Dashboard/Complaints Count/NewCount.php";
const url_inprocess =
  "/politician_image_building/Admin Dashboard/Complaints Count/InPRocessCount.php";
const url_completed =
  "/politician_image_building/Admin Dashboard/Complaints Count/CompletedCount.php";

axios.get(url_new).then((res) => {
  newCard.push(res.data);
});
axios.get(url_inprocess).then((res) => {
  inProcessCard.push(res.data);
});
axios.get(url_completed).then((res) => {
  completedCard.push(res.data);
});

// New data
let newData = [];
axios.get(url_chart).then((res) => {
  for (let i = 0; i < 12; i++) {
    if (res.data[i] !== []) {
      console.log(res.data[i][0]);
    }
    // newData.push(res.data[8][0].ct);
  }
});

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
    data: [10, 20, 30, 25, 47, 50, 12, 46, 46, 67, 34, 56],
    backgroundColor: [" #F75D81"],
  },
  {
    label: "in process",
    data: [12, 25, 20, 45, 47, 40, 45, 73, 34, 56, 49, 52],
    backgroundColor: [" #42A5F6"],
  },
  {
    label: "completed",
    data: [5, 10, 14, 30, 28, 34, 29, 40, 36, 49, 28, 29],
    backgroundColor: ["#7ED320"],
  },
];

// export default DashBoardData;
export { newData, cardData, BarChartDataSets, BarChartLabels, chartdata };
