import React, { useState } from "react";
import "./index.css";

const Login = () => {
  const [allValues, setValues] = useState({
    username: "tanuj",
    password: "tanuj@123",
  });
  const onSubmitDetails = async (e) => {
    e.preventDefault();
    console.log(`${allValues.username}, ${allValues.password} `);

    const url = " https://apis.ccbp.in/login";

    const userDetails = {
      username: "rahul",
      password: "rahul@2021",
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const fetchData = await response.json();
    console.log(fetchData);
  };
  return (
    <div className="login-cont">
      <form className="my-form" onSubmit={onSubmitDetails}>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />

        <div className="mb-3 w-100">
          <label htmlFor="exampleInputEmail1" className="form-label">
            USERNAME
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-4 w-100">
          <label htmlFor="exampleInputPassword1" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="btn-cont">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
