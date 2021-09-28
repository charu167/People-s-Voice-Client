import axios from "axios";
const titles = ["Sr. No.", "Name", "Address", "Phone", "Email"];

const data = [];
const url_details = "/politician_image_building/Admin Dashboard/UserDetails/userdetails.php"
const pushdata =()=>{
  axios.get(url_details).then((res)=>{
    data.push(res.data);
    console.log(data);
  })

}

export default data
export {titles}