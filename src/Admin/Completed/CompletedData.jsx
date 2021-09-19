import axios from "axios";

const titles = ["Complain ID", "Name", "Location", "Status"];

let dbdata = [];

const url = "/politician_image_building/Admin Dashboard/Complaints Retrieval/CompletedComplaintsRetrieve.php";

const dataPush = async () => {
  await axios.get(url).then((response) => {
    response.data.map((e) => {
      dbdata.push([e.ID, e.name, e.location, "completed"]);
    });
  });
};

dataPush();

export { titles, dbdata };
