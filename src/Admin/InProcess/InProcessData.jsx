//IMPORTING LIBRARIES
import axios from "axios";
import swal from "sweetalert";

//DATA
const titles = ["Complain ID", "Name", "Location", "Action Button"];
let dbdata = [];

//GET URL
const url_get =
  "/politician_image_building/Admin Dashboard/Complaints Retrieval/InProcessComplaintRetrieve.php";

//PUT URL
const url_put =
  "/politician_image_building/Admin Dashboard/Complaint Status Handling/InProcessToCompleted.php";

//HANDLING GET AND PUT REQUEST
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
                  swal("Good job!", "The complaint is completed!", "success");
                  // console.log(response.data);
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
