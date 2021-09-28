//IMPORTING LIBRARIES
import axios from "axios";

//DATA
const titles = ["Sr. No.", "Name", "Address", "Phone", "Email"];
const data = [];

//URL GET
const url =
  "/politician_image_building/Admin Dashboard/UserDetails/userdetails.php";

//GET REQUEST
const pushdata = () => {
  axios.get(url).then((res) => {
    res.data.map((e) => {
      data.push([e.ID, e.name, e.address, e.phone, e.email]);
    });
  });
};

pushdata();

export default data;
export { titles };
