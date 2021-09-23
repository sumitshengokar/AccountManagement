import React from 'react';
import 'bootstrap/dist/css//bootstrap.min.css';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import logo from "./BB.png"
import Home from "../cutomerPages/home";

import Loginc from "../login/loginc.component";
import Loginm from "../login/loginm.component";
import ForgotPwdc from "../login/ForgotPwdc";
import ForgotPwdm from "../login/ForgotPwdm";
import CustomerHome from "../login/CustomerHome";
import ManagerHome from "../login/ManagerHome";
import ProtectedRoute from "../login/ProtectedRoute";
import AboutUs from "../login/AboutUs";

function Landing() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container">
        <Link className="navbar-brand" to={"/"}><div class="imgbtn"><img src={logo} /></div></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link about" to={"/aboutus"}>ABOUT US</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Landing;
