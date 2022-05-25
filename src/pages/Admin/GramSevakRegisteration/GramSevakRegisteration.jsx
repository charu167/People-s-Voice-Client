import React from "react";
import Auth2 from "../../../components/Auth/Auth2";

export default function GramSevakRegisteration() {
  const input_names = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "phone", type: "number", placeholder: "Phone Number" },
    { name: "address", type: "text", placeholder: "Address" },
    { name: "region", type: "text", placeholder: "Region" },
    { name: "status", type: "number", placeholder: "Status" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  const inputs_ = {
    name: "",
    email: "",
    phone: "",
    address: "",
    region: "",
    status: 1,
    password: "",
  };

  const api = "gramsevak/";
  return (
    <Auth2
      header={"Register a new Gramsevak"}
      button_text={"Register"}
      bottom_text={""}
      input_names={input_names}
      inputs_={inputs_}
      login={false}
      api={api}
      push={"#"}
    />
  );
}
