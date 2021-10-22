import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";


const Settings = () => {
  const history = useHistory();
  const region = sessionStorage.getItem("GSRegion");
  useEffect(() => {
    if (!sessionStorage.getItem("loggedinGramSevak")) {
      history.push("/gramsevak/login");
    }
    const check = async () => {
      await axios
        .get(
          "/politician_image_building/Gramsevak Dashboard/Get Gramsevak Status/GetStatus.php",
          {
            headers: {
              region: region,
            },
          }
        )
        .then((res) => {
          if (parseInt(res.data) === 0) {
            sessionStorage.removeItem("loggedinGramSevak");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    check();
  });

  // const handleLogout = () => {
  //   sessionStorage.removeItem("loggedinGramSevak");
    
  //   history.push("/gramsevak/login");
  // };

  const [update, setUpdate] = useState({
    name: "",
    phone: null,
    address: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (event) => {
    event.preventDefault();

    value = event.target.value;
    name = event.target.name;

    setUpdate({ ...update, [name]: value });
  };

  

  const handleSubmit = async() => {
    
    let formdata = new FormData();

    formdata.append("name", update.name);
    let pattern_phone = new RegExp(/^[6789][0-9]{9}/);
      let pattern_email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

      if(update.phone!=null) {
      if (update.phone.length != 10 || !pattern_phone.test(update.phone)) {
        swal({
          title: "Oh No!",
          text: "Please enter valid Phone number",
          icon: "error",
          button: "OK",
        });
        
      }  else {
        formdata.append("phone", update.phone);
      swal(
        "Update Complete",
        "Your details have been updated",
        "success"
      );
      }
    }
  
    if(update.email!=""){
    if (!pattern_email.test(update.email)) {
      swal({
        title: "Oh No!",
        text: "Please enter valid Email address",
        icon: "error",
        button: "OK",
      });
     
    }
    else{
      formdata.append("email", update.email);
      swal(
        "Update Complete",
        "Your details have been updated",
        "success"
      );
    }
  }
  
 
    
    formdata.append("address", update.address);
   
    formdata.append("password", update.password);
    

    await axios
      .post(
        "/politician_image_building/Gramsevak Dashboard/Update/Update.php",
       formdata,
        {
          headers: {
            region: sessionStorage.getItem("GSRegion"),
          }
        }
        
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  return (
    <div className="outermost-container">
      <div className="settings">
        <h3 className="title">Settings</h3>

        <form className="update">
          <div className="main">
              <div className="heading">
                <p>Name</p>
                </div>
              <div className="heading">
              <input
                placeholder="name"
                type="text"
                name="name"
                onChange={handleChange}
              />
              </div>
          </div>
          <div  className="main">
          <div className="heading"><p>Phone</p></div>
         <div className="heading">

          <input
            placeholder="phone"
            type="number"
            name="phone"
            onChange={handleChange}
          />
          </div>
          </div>
          <div  className="main"> 
          <div className="heading"><p>Address</p></div>
          <div>
          <input
            placeholder="address"
            type="text"
            name="address"
            onChange={handleChange}
          />
          </div>
          </div>
          <div  className="main">
          <div className="heading"><p>Email</p></div>
          <div>
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          </div>
          </div>
          <div  className="main">
          <div className="heading"><p>Password</p></div>
          <div>
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          </div>
          </div>
        </form>
        <button onClick={handleSubmit}>Update</button>

        {/* <button onClick={handleLogout}>logout</button> */}
      </div>
    </div>
  );
};

export default Settings;
