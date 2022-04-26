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
      redirect="/user"
    />
  );
};

export default Login;
