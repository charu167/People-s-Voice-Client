import React, { useEffect, useState, useContext } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import axios from "axios";
import "./Home.css";
import AuthContext from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";
import Imagelist from "../../../components/ImageList/ImageList";

export default function Home() {
  return (
    <div className="Home-Page">
      <div className="one">
        <div className="left">
          <Typography id="h4" variant="h4">
            We make sure that
          </Typography>
          <Typography id="h3" variant="h3">
            Your Voice Reaches The World
          </Typography>
          <div className="get-started">
            <NavLink className="link" to="/user/login">
              <Button variant="contained">GET STARTED</Button>
            </NavLink>
          </div>
        </div>
        <div className="right">
          {/* <Imagelist /> */}
          <img
            src="https://www.seekpng.com/png/detail/15-158352_phoenix-png-clipart-phoenix-clipart-transparent.png"
            alt=""
          />
        </div>
      </div>

      <div className="hero">
        <div className="_1">How It Works</div>
        <div className="item" id="_1">
          <h3 className="title">Create an account</h3>
          <h6 className="content">
            Create an user account to register new complaints or grievances and
            get full benifits of our data analysis model.
          </h6>
        </div>
        <div className="item" id="_2">
          <h3 className="title">Raise New Tickets</h3>
          <h6 className="content">
            Once you are a registered user, you can raise unlimited number of
            tickets about your daily problems which will be solved by higher
            aithorities.
          </h6>
        </div>
        <div className="item" id="_3">
          <h3 className="title">Data Ananlysis</h3>
          <h6 className="content">
            We provide a comprehensive data analysis regarding the grievance
            handling situation in your region.
          </h6>
        </div>
      </div>
    </div>
  );
}
