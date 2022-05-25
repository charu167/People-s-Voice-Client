import React from "react";
import "./Modal.css";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import {
  CloseRounded,
  CheckCircle,
  PendingRounded,
  Autorenew,
} from "@mui/icons-material";

export default function Modal({ open, setOpen, data }) {
  return (
    <div>
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="modal">
          <div className="one">
            <Typography variant="h3">{data.type}</Typography>
            <Typography id="status">
              {data.status === 0 ? (
                <Autorenew color="warning" />
              ) : (
                <CheckCircle color="success" />
              )}

              <Button size="large" color={data.status === 1 ? "success" : "warning"}>
                {data.status === 0 ? "In Process" : "Resolved"}
              </Button>
            </Typography>
          </div>
          <div className="two">
            <Typography variant="subtitle1">{data.description}</Typography>
          </div>

          <div className="three">
            <Typography variant="h6">{data.location}</Typography>
            <Typography id="date">{data.date}</Typography>
          </div>
          <Button
            variant="contained"
            style={{ "background-color": "black" }}
            onClick={() => {
              setOpen(false);
            }}
          >
            CLOSE
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
