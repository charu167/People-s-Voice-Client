import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const GSreg = () => {
  const history = useHistory();

  //useState hook
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  let name, value;

  //Handling form inputs
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  //passing form input to backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("phone", user.phone);
    formData.append("address", user.address);

    const url = "/politician_image_building/gs-register.php";

    await axios
      .post(url, formData)
      .then((res) => {
        if (res.data === 0) {
          window.alert(
            `User refistered successfully! Click 'OK' to go to login page`
          );
          history.push("/gramsevak/login");
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
          <div className="card-title">GramSevak Registeration Form</div>
        </div>
        <div className="card-body">
          <form className="form-horizontal">
            <div className="form-group row">
              <label for="inputName" className="col-md-3 col-form-label">
                Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail3" className="col-md-3 col-form-label">
                Email
              </label>
              <div className="col-md-9">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-md-3 col-form-label">
                Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="input-group-text" className="col-md-3 col-form-label">
                Address
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="input-group-text"
                  placeholder="Address"
                  name="address"
                  value={user.address}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="Input" className="col-md-3 col-form-label">
                Phone Number
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="Input"
                  placeholder="Phone Number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="form-group mb-0 mt-2 row justify-content-end">
              <div className="col-md-9">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Register
                </button>
                <button type="submit" className="btn btn-secondary">
                  <NavLink className="link" to="/gramsevak/login">
                    I'm already registered!
                  </NavLink>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GSreg;
