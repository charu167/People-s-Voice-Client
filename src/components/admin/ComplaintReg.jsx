import React from "react";

const ComplaintReg = () => {
  return (
    <>
      <div className="outermost-container ">
        <div className="inner-container">
          <div className="complain">
            <div className="title">
              <h1>Register Your Complaint</h1>
            </div>
            <form method="post" className="complain-form">
              <input type="text" name="uname" id="" placeholder="Name" />
              <input type="text" name="address" id="" placeholder="Adrress" />
              <input
                type="number"
                name="phone"
                id=""
                placeholder="Phone Number"
              />
              <input type="text" name="location" id="" placeholder="Location" />
              <input
                type="text"
                name="cpoint"
                id=""
                placeholder="Complaint Point"
              />
              <textarea
                name="cdescription"
                id=""
                cols="30"
                rows="10"
                placeholder="Complaint Description"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintReg;
