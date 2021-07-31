import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const GsLogin = () => {
  const history = useHistory();

  //useState hook
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;

  //handling form inputs
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  //passing form input to backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("email", user.email);
    formData.append("password", user.password);

    const url = "/politician_image_building/gs-login.php";

    await axios
      .post(url, formData)
      .then((res) => {
        if (res.data === 0) {
          window.alert(`Successfully logged in! Redirecting to home page.`);
          history.push("/");
        } else {
          window.alert(`error`);
        }
      })
      .catch((err) => console.log(err));
  };

  //rendering jsx
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header">
          <div className="card-title">Gram Sevak Login Form</div>
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
                  value={user.email}
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
                  value={user.password}
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
                Submit
              </button>
              <button type="submit" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GsLogin;
