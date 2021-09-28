//IMPORTING LIBRARIES
import React from "react";
import axios from "axios";

//IMPORTING COMPONENTS
import ToggleSwitch from "../../components/Buttons/ToggleSwitch";

//GRAM SEVAK LIST GET REQUEST
const url = "/politician_image_building/retrieveGramSevakData.php";

//DATA
let dbdata = [];
const titles = ["Sr. No.", "Name", "Address", "Phone", "Email", "Status"];

//GET REQUEST
axios.get(url).then((res) =>
  res.data.map((e) => {
    dbdata.push([
      e.ID,
      e.Name,
      e.address,
      e.phone,
      e.email,
      <ToggleSwitch checked={true} />,
    ]);
  })
);

export { titles, dbdata };
