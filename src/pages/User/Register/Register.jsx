import React from "react";
import Auth from "../../../components/Auth/Auth";

const Register = () => {
  const input_names = [
    { name: "name", type: "text", placeholder: "Enter your name" },
    { name: "email", type: "email", placeholder: "Enter your email" },
    { name: "phone", type: "number", placeholder: "Enter your phone number" },
    { name: "address", type: "text", placeholder: "Enter your address" },
    { name: "region", type: "text", placeholder: "Enter your region" },
    { name: "password", type: "password", placeholder: "Enter password" },
  ];

  const inputs_ = {
    name: "",
    email: "",
    phone: "",
    address: "",
    region: "",
    password: "",
  };

  const api = "user/";

  return <Auth input_names={input_names} inputs_={inputs_} api={api} />;
};

export default Register;
