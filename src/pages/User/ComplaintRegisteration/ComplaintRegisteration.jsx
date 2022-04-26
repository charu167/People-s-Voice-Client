import React from "react";
import ComplainForm from "../../../components/ComplainForm/ComplainForm";

const ComplaintRegisteration = () => {
  const input_names = [
    {
      name: "c_description",
      type: "text ",
      placeholder: "Enter the description of your complaint in detail",
    },
    { name: "c_location", type: "text", placeholder: "Enter location" },
    { name: "c_region", type: "text", placeholder: "Enter region" },
    { name: "uid", type: "number", placeholder: "Enter User ID" },
    { name: "gsid", type: "number", placeholder: "Enter Gram Sevak ID" },
  ];

  const inputs_ = {
    c_description: "",
    c_location: "",
    c_region: "",
    uid: "",
    gsid: "",
  };

  const api = "complain/";

  return <ComplainForm input_names={input_names} inputs_={inputs_} api={api} />;
};

export default ComplaintRegisteration;
