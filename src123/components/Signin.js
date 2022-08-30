import React, { useState } from 'react'
import axios from "axios";
import img1 from "../assets/images/cbn.svg";
import logo from '../assets/images/logo.svg'
import SigninNav from './SigninNav';

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const endpoint = "http://localhost:5000/user/signup";
  const signin = () => {
    let userDetails = {email, password };
    axios
      .post(endpoint, userDetails)
      .then((result) => {
        console.log(result.data.message);
        setmessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <SigninNav/>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo} alt="" height={100}/>
          </a>
          <div className="d-flex">
            <button className="btn btn-dark">good</button>
            <button className="btn btn-info" type="submit">
              Open Account
            </button>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row mx-auto">
          <div className="col-lg-5 col-sm-11 mx-auto shadow-sm">
            <h1 className="text-center"> Sign Up Page</h1>
            <div className="alert alert-success">{message}</div>
            <div className="alert alert-info">
              Please, check your browser’s address bar to be sure you’re on
              https://app.easy.com
            </div>
            <input
              type="email"
              placeholder="Email"
              className="my-2 form-control"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="my-2 form-control"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="btn btn-info my-2 w-100 p-3" onClick={signin}>
              Sign In
            </button>
          </div>
          <div className="col-lg-6" id="signupimg">
            <img src={img1} alt="" height={500} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin