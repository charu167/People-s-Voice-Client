const cardData = [
  {
    color: "red",
    title: "New",
    count: 20000,
    path: "/gramsevak/new",
    icon: <i class="bx bx-error-circle"></i>,
  },
  {
    color: "blue",
    title: "In Process",
    count: 34000,
    path: "/gramsevak/inprocess",
    icon: <i class="bx bx-loader-circle"></i>,
  },
  {
    color: "yellow",
    title: "Completed",
    count: 0,
    path: "/gramsevak/completed",
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
    data: [5, 20, 38, 25, 87, 30, 12, 46, 46, 27, 34, 66],
    backgroundColor: [" #F75D81"],
  },
  {
    label: "in process",
    data: [92, 35, 20, 95, 47, 80, 45, 13, 14, 56, 29, 52],
    backgroundColor: [" #42A5F6"],
  },
  {
    label: "completed",
    data: [5, 10, 14, 30, 28, 34, 29, 40, 36, 49, 28, 29],
    backgroundColor: ["#7ED320"],
  },
];

export { cardData, BarChartDataSets };
export { BarChartLabels };
