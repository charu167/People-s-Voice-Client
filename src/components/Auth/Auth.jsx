import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import "./Auth.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Auth = ({
  input_names,
  inputs_,
  api,
  login,
  user,
  redirect,
  header,
  button_text,
  bottom_text,
  push,
}) => {
  const [inputNames, setInputNames] = useState(input_names);
  const [inputs, setInputs] = useState(inputs_);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    for (let i = 0; i < inputNames.length; i++) {
      formdata.append(inputNames[i].name, inputs[inputNames[i].name]);
    }
    await axios
      .post("http://localhost:8000/" + api, formdata, {
        params: {
          register: login ? 0 : 1,
        },
      })
      .then((res) => {
        localStorage.setItem(user, res.data[0].id);
        history.push(redirect);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              {header}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              {inputNames.map((e, i) => {
                return (
                  <TextField
                    key={i}
                    margin="normal"
                    required
                    fullWidth
                    name={e.name}
                    label={e.placeholder}
                    type={e.type}
                    id={e.name}
                    autoComplete="current-password"
                    onChange={(event) => {
                      setInputs({ ...inputs, [e.name]: event.target.value });
                    }}
                  />
                );
              })}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="btn-auth"
              >
                {button_text}
              </Button>
              <Grid container>
                <Grid item>
                  <NavLink className="link" to={push} variant="body2">
                    {bottom_text}
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Auth;
