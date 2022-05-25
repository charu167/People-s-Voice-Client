import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import Card from "../../../components/Cards/Cards";
import { NavLink } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import {
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Alert,
  Chip,
  Divider,
  Typography,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "April", resolved: 40, registered: 100 },
  { name: "March", resolved: 20, registered: 80 },
];

const tblData = [
  {
    date: "16 Mar, 2022",
    type: "Water",
    summary: "Drainage pipe broken",
    location: "brooklyn",
    status: 1,
    description:
      "Pt Shiv Kumar Sharma, who exalted the santoor – once a little-known trapezoid-shaped, stringed instrument – from the folk circuit of Jammu and Kashmir and placed it on the proscenium alongside other more traditional and heavyweight classical instruments such as the sitar and sarod, passed away in Mumbai after suffering a cardiac arrest. He was 84 and is survived by his wife Manorama, and sons Rahul and Rohit.",
  },
  {
    date: "22 Aug, 2022",
    type: "Illiteracy",
    summary: "No schools in village",
    location: "talegaon",
    status: 1,
    description:
      "Pt Shiv Kumar Sharma, who exalted the santoor – once a little-known trapezoid-shaped, stringed instrument – from the folk circuit of Jammu and Kashmir and placed it on the proscenium alongside other more traditional and heavyweight classical instruments such as the sitar and sarod, passed away in Mumbai after suffering a cardiac arrest. He was 84 and is survived by his wife Manorama, and sons Rahul and Rohit.",
  },
  {
    date: "05 April, 2022",
    type: "Healthcare",
    summary: "Poor healthcare in village",
    location: "nigdi",
    status: 0,
    description:
      "Pt Shiv Kumar Sharma, who exalted the santoor – once a little-known trapezoid-shaped, stringed instrument – from the folk circuit of Jammu and Kashmir and placed it on the proscenium alongside other more traditional and heavyweight classical instruments such as the sitar and sarod, passed away in Mumbai after suffering a cardiac arrest. He was 84 and is survived by his wife Manorama, and sons Rahul and Rohit.",
  },
];

export default function Dashboard() {
  //useful useStates
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      return;
    } else {
      history.push("/user/login");
    }
  });

  return (
    <div className="user-dashboard">
      <div className="alert">
        <Alert severity="success">
          Your complaint is forwarded to water department. We will notify you
          when it is resolved.
        </Alert>
      </div>
      <div className="top">
        <div className="chart">
          {/* <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Today
          </Typography> */}
          <BarChart layout="vertical" width={800} height={200} data={data}>
            <YAxis dataKey="name" stroke="#1FCECB" type="category" width={80} />
            <XAxis type="number" stroke="#1FCECB" />
            <Tooltip />

            <Bar
              barSize={20}
              type="monotone"
              dataKey="resolved"
              // stroke="#00FFFF"
              fill="#32CD32"
              label="label"
            />
            <Bar
              barSize={20}
              type="monotone"
              dataKey="registered"
              // stroke="#ED6C02"
              fill="#01796F"
            />
          </BarChart>
        </div>

        <div className="cards">
          <Card
            color="light-blue"
            title="My Complaints"
            count="40"
            path="#"
            icon={<i class="bx bxs-analyse"></i>}
          />
          <Card
            color="blue"
            title="Avg. Response Time"
            count="15 days"
            path="#"
            icon={<i class="bx bxs-doughnut-chart"></i>}
          />
        </div>
      </div>

      {/* <Divider /> */}
      <div className="user-table">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Complaint Type</TableCell>
              <TableCell>Summary</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tblData.map((e, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{e.date}</TableCell>
                  <TableCell>{e.type}</TableCell>
                  <TableCell>{e.summary}</TableCell>
                  <TableCell>{e.location}</TableCell>
                  <TableCell>
                    <Chip
                      color={e.status === 0 ? "warning" : "success"}
                      label={e.status === 0 ? "In Process" : "Resolved"}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setOpen(true);
                        setCurrentData(i);
                      }}
                      variant="contained"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Modal
          data={{
            type: tblData[currentData].type,
            status: tblData[currentData].status,
            description: tblData[currentData].description,
            location: tblData[currentData].location,
            date: tblData[currentData].date,
          }}
          setOpen={setOpen}
          open={open}
        />
      </div>
    </div>
  );
}
