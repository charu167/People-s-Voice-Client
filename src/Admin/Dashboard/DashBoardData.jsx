//IMPORTING LIBRARIES
import React, { useState } from "react";
import axios from "axios";

//DATA
let newCard = [];
let inProcessCard = [];
let completedCard = [];
let chartdata = [];
let newdata = [];
let inprodata = [];
let completedata = [];

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

//CARD DATA
axios.get(url_new).then((res) => {
  newCard.push(res.data);
});
axios.get(url_inprocess).then((res) => {
  inProcessCard.push(res.data);
});
axios.get(url_completed).then((res) => {
  completedCard.push(res.data);
});

//CHART DATA
axios.get(url_newdata).then((res) => {
  for (const i of res.data) {
    newdata.push(parseInt(i));
  }
});
axios.get(url_inprodata).then((res) => {
  for (const i of res.data) {
    inprodata.push(parseInt(i));
  }
});
axios.get(url_completedata).then((res) => {
  for (const i of res.data) {
    completedata.push(parseInt(i));
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

export { cardData, BarChartDataSets, BarChartLabels, chartdata };
