import React from "react";
import Auth2 from "../../../components/Auth/Auth2";

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

  return (
    <Auth2
      input_names={input_names}
      inputs_={inputs_}
      api={api}
      user="userid"
      redirect="/user"
      button_text={"Sign Up"}
      bottom_text={"Already have an account? Sign In."}
      header={"Sign Up"}
      push="/user/login"
    />
  );
};

export default Register;
