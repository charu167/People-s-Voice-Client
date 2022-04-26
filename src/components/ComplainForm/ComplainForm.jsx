import React, { useState, useEffect } from "react";
import axios from "axios";
import './ComplainForm.css'

export default function ComplainForm({ input_names, inputs_, api }) {
  const [inputNames, setInputNames] = useState(input_names);
  const [inputs, setInputs] = useState(inputs_);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    for (let i = 0; i < inputNames.length; i++) {
      formdata.append(inputNames[i].name, inputs[inputNames[i].name]);
    }
    console.log(inputs);
    await axios
      .post("http://localhost:8000/" + api, formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cform">
      {inputNames.map((e, i) => {
        return (
          <input
            onChange={(event) => {
              setInputs({ ...inputs, [e.name]: event.target.value });
            }}
            type={e.type}
            placeholder={e.placeholder}
            name={e.name}
          />
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
