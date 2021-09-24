import React from "react";
import axios from "axios";
import ToggleSwitch from "../../components/Buttons/ToggleSwitch";

let dbdata = [];
const url = "/politician_image_building/retrieveGramSevakData.php";
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

const titles = ["Sr. No.", "Name", "Address", "Phone", "Email", "Status"];

// export {DATA}

export { titles };

export { dbdata };
