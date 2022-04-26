import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const Auth = ({ input_names, inputs_, api, login, user, redirect }) => {
  const [inputNames, setInputNames] = useState(input_names);
  const [inputs, setInputs] = useState(inputs_);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    for (let i = 0; i < inputNames.length; i++) {
      formdata.append(inputNames[i].name, inputs[inputNames[i].name]);
    }
    await axios
      .post("http://localhost:8000/" + api, formdata, {
        params: {
          register: login ? 0 : 1,
        },
      })
      .then((res) => {
        localStorage.setItem(user, res.data[0].id);
        history.push(redirect);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth">
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
};

export default Auth;
