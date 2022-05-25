import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ComplainForm.css";
import {
  Typography,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Container,
  Paper,
  CssBaseline,
  Button,
} from "@mui/material";

const theme = createTheme();

export default function ComplainForm({ input_names, inputs_, api }) {
  const [inputNames, setInputNames] = useState(input_names);
  const [inputs, setInputs] = useState(inputs_);

  console.log(inputs);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    for (let i = 0; i < inputNames.length; i++) {
      formdata.append(inputNames[i].name, inputs[inputNames[i].name]);
    }
    await axios
      .post("http://localhost:8000/" + api, formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cform">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography
              textAlign="center"
              variant="h5"
              fontWeight="500"
              gutterBottom
            >
              Register Your Cmplaint
            </Typography>
            <Grid container spacing={3}>
              {inputNames.map((e, i) => {
                return (
                  <Grid
                    key={i}
                    item
                    xs={12}
                    sm={e.name === "c_description" ? 0 : 6}
                  >
                    <TextField
                      onChange={(event) => {
                        setInputs({ ...inputs, [e.name]: event.target.value });
                      }}
                      required
                      id={e.name}
                      name={e.name}
                      label={e.placeholder}
                      fullWidth
                      variant="outlined"
                      multiline={e.name === "c_description" ? true : false}
                      rows={4}
                    />
                  </Grid>
                );
              })}
            </Grid>

            <Button
              className="btncform"
              onClick={handleSubmit}
              variant="contained"
            >
              SUBMIT
            </Button>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}
