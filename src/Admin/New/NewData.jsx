import axios from "axios";
import swal from 'sweetalert';

const titles = ["Complain ID", "Name", "Location", "Action Button"];

let dbdata = [];

const url_get = "/politician_image_building/Admin Dashboard/Complaints Retrieval/NewComplaintsRetrieve.php";
const url_put =
  "/politician_image_building/Admin Dashboard/Complaint Status Handling/NewToInProcess.php";

const dataPush = async () => {
  await axios.get(url_get).then((response) => {
    response.data.map((e) => {
      dbdata.push([
        e.ID,
        e.name,
        e.location,
        <button
          onClick={() => {
            axios
              .put(url_put, e.ID)
              .then((response) => {
                if (response) {
                  swal("Good job!", "The complaint is in process now!", "success");
                }
                else{
                  swal({
                    title: "Oh No!",
                    text: "An Error Occured",
                    icon: "error",
                    button: "OK",
                  })
                }
              })
              .catch((error) => {
                swal({
                  title: "Oh No!",
                  text: "An Error Occured",
                  icon: "error",
                  button: "OK",
                })
              });
          }}
        >
          action
        </button>,
      ]);
    });
  });
  console.log(dbdata)
};

dataPush();

export { titles, dbdata };