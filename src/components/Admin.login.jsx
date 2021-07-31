import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const history = useHistory();

  //useState hook
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;

  //Handling form inputs
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  //Passing form data to backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("email", user.email);
    formData.append("password", user.password);

    const url = "/politician_image_building/admin-login.php";

    await axios
      .post(url, formData)
      .then((res) => {
        if (res.data === 123) {
          window.alert("Successfully logged in!");
          history.push("/");
        } else {
          window.alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  //Rendering jsx
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header">
          <div className="card-title">Admin Login</div>
        </div>
        <div className="card-body">
          <form>
            <div className="">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className=" mt-2 mb-0">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
