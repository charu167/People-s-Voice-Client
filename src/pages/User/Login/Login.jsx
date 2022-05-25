import React from "react";
import Auth from "../../../components/Auth/Auth";

const Login = () => {
  const input_names = [
    { name: "email", type: "email", placeholder: "Enter your email" },
    { name: "password", type: "password", placeholder: "Enter password" },
  ];

  const inputs_ = {
    email: "",
    password: "",
  };

  const api = "user/";
  const login = true;
  return (
    <Auth
      input_names={input_names}
      inputs_={inputs_}
      api={api}
      login={login}
      user="userid"
      redirect="/user/dashboard"
      button_text={"Log In"}
      bottom_text={"Don't have an account? Sign Up."}
      header={"Log In"}
      push="/user/register"
    />
  );
};

export default Login;
