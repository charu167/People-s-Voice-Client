import React, { useState } from "react";
import { motion } from "framer-motion";
import Table from "../utilities/Table";
import ToggleSwitch from "../utilities/ToggleSwitch";

const GSList = () => {
  const [titles, setTitles] = useState([
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
      <ToggleSwitch />,
    ],
    [
      2,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
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
    [
      9,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      10,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      11,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      12,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      13,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      14,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      15,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      16,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      17,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      18,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      19,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
    [
      20,
      "test2",
      "testAdrress2",
      "0987654321",
      "test2@gmail.com",
      <ToggleSwitch />,
    ],
  ]);

  return (
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
      <Table titles={titles} data={data} header={"Gram Sevak List"} />
    </motion.div>
  );
};

export default GSList;
