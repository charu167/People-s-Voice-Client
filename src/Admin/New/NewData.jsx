//IMPORTING LIBRARIES
import axios from "axios";
import swal from "sweetalert";

//DATA
const titles = ["Complain ID", "Name", "Location", "Action Button"];
let dbdata = [];

//URL GET
const url_get =
  "/politician_image_building/Admin Dashboard/Complaints Retrieval/NewComplaintsRetrieve.php";

//URL PUT
const url_put =
  "/politician_image_building/Admin Dashboard/Complaint Status Handling/NewToInProcess.php";

//HANDLING GET AND PUT REQUESTS
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
                  swal(
                    "Good job!",
                    "The complaint is in process now!",
                    "success"
                  );
                } else {
                  swal({
                    title: "Oh No!",
                    text: "An Error Occured",
                    icon: "error",
                    button: "OK",
                  });
                }
              })
              .catch((error) => {
                swal({
                  title: "Oh No!",
                  text: "An Error Occured",
                  icon: "error",
                  button: "OK",
                });
              });
          }}
        >
          action
        </button>,
      ]);
    });
  });
};

dataPush();

export { titles, dbdata };
