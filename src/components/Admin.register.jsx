import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const Adminreg = () => {
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

    const url = "/politician_image_building/admin-register.php";

    await axios
      .post(url, formData)
      .then((res) => {
        if (res.data === 0) {
          window.alert(
            `User refistered successfully! Click 'OK' to go to login page`
          );
          history.push("/admin/login");
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
          <div className="card-title">Admin Registeration Form</div>
        </div>
      </div>

      <div className="card-body">
        <form className="form-horizontal" method="POST">
          <div className="form-group row">
            <label htmlFor="inputName" className="col-md-3 col-form-label">
              User Name
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
                onChange={handleInput}
                name="name"
                value={user.name}
                autoComplete="off"
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
                onChange={handleInput}
                name="email"
                value={user.email}
                autoComplete="Off"
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
                onChange={handleInput}
                name="password"
                value={user.password}
                autoComplete="off"
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
                onChange={handleInput}
                name="address"
                value={user.address}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="input-group-text" className="col-md-3 col-form-label">
              Phone Number
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="input-group-text"
                placeholder="Phone"
                onChange={handleInput}
                name="phone"
                value={user.phone}
                autoComplete="off"
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
                <NavLink className="link" to="/admin/login">
                  I'm already registered!
                </NavLink>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminreg;
