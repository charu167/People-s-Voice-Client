//IMPORTING CSS
import "./Dashboard.css";

//IMPORINTG COMPONENTS
import Card from "../../../components/Cards/Cards";
import BarChart from "../../../components/Charts/BarChart";
import Pie1 from "../../../components/Pie/Pie";
import LineChart from "../../../components/LineChart/LineChart";

//IMPORTING LIBRARIES
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Box, Typography } from "@mui/material";

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
      backgroundColor: [" #b0c4de"],
    },
    {
      label: "Healthcare",
      data: [],
      backgroundColor: [" #87cefa"],
    },
    {
      label: "Unemployment",
      data: [],
      backgroundColor: ["#87ceeb"],
    },
    {
      label: "Illiteracy",
      data: [],
      backgroundColor: [" #6495ed"],
    },
    {
      label: "Poverty",
      data: [],
      backgroundColor: [" #1e90ff"],
    },
    {
      label: "Transportation",
      data: [],
      backgroundColor: ["#00bfff"],
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
        const date = new Date();
        let sampleBar = BarChartDataSets;
        let sampleCard = cardData;
        for (let i = 0; i < 3; i++) {
          sampleCard[i].count = res.data[date.getMonth()][i];
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

  //JSX
  return (
    <>
      <Box className="dashboard">
        <Grid className="box1" container pb={5} rowSpacing={5}>
          <Grid container rowSpacing={1} textAlign="center" item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h4">Admin Dashboard</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h3"></Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {cardData.map((e, i) => {
              return (
                <Card
                  color={e.color}
                  title={e.title}
                  count={e.count}
                  path={e.path}
                  icon={e.icon}
                />
              );
            })}
          </Grid>

          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            xs={12}
          >
            <Grid
              border="1px solid #cccccc"
              bgcolor="white"
              pt={2}
              pb={2}
              pl={3}
              pr={3}
              xs={7}
              container
              direction="column"
              alignItems="center"
              item
            >
              <Typography
                bgcolor="#DAE6F5"
                sx={{ width: "108%" }}
                p={0}
                mb={6}
                variant="overline"
                fontSize={20}
                textAlign="center"
                mt={-2.2}
                ml={-3}
              >
                Monthly Analysis
              </Typography>
              <BarChart labels={BarChartLabels} datasets={BarChartDataSets} />
            </Grid>
            <Grid
              xs={4}
              item
              container
              direction="column"
              alignItems="stretch"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  bgcolor="#DAE6F5"
                  px={10.2}
                  paddingY={2}
                  variant="overline"
                  fontSize={20}
                  textAlign="center"
                >
                  Monthly Analysis
                </Typography>
              </Grid>
              <Grid
                pt={9}
                pb={3}
                // px={2}
                border="1px solid #cccccc"
                bgcolor="white"
                // container
                item
              >
                <Pie1 />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            border="1px solid #cccccc"
            item
            xs={12}
            bgcolor="white"
            pt={2}
            pb={2}
            pl={3}
            pr={3}
            mt={4}
            container
            direction="column"
            // justifyContent="center"
            alignItems="center"
          >
            <Typography
              bgcolor="#DAE6F5"
              sx={{ width: "104.5%" }}
              p={0}
              mb={6}
              variant="overline"
              fontSize={20}
              textAlign="center"
              mt={-5.2}
              ml={-3}
            >
              Category Wise Analysis
            </Typography>

            <LineChart labels={BarChartLabels} datasets={categoryDataSets} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminDashboard;
