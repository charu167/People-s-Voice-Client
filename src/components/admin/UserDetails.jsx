import React, { useState } from "react";
import { motion } from "framer-motion";
import Table from "../utilities/Table";
import ToggleSwitch from "../utilities/ToggleSwitch";

const UserDetails = () => {
  const [titles, settitles] = useState([
    "Sr. No.",
    "Name",
    "Address",
    "Phone",
    "Email",
    "Status",
  ]);

  const [data, setData] = useState([
    [
      1,
      "test1",
      "testAdrress1",
      "1234567890",
      "test1@gmail.com",
      <ToggleSwitch checked = {true} />,
    ],
    [
      2,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch checked = {true}/>,
    ],
    [
      3,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      4,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      5,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      6,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      7,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      8,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
  ]);

  return (
    <>
      <motion.div
        className="outermost-container"
        initial={{ y: 500 }}
        animate={{
          y: 0,
          transition: { duration: 0.5, type: "spring" },
        }}
        exit={{
          y: -500,
          transition: { duration: 0.3, type: "spring", ease: "ease-in-out" },
        }}
      >
        <Table titles={titles} data={data} header={"User Details"} />
      </motion.div>
    </>
  );
};

export default UserDetails;
