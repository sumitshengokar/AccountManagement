import React from 'react';
import 'bootstrap/dist/css//bootstrap.min.css';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Loginc from "../login/loginc.component";
import Loginm from "../login/loginm.component";
import Home from "../login/home.component";
import ForgotPwdc from "../login/ForgotPwdc";
import ForgotPwdm from "../login/ForgotPwdm";
import CustomerHome from "../login/CustomerHome";
import ManagerHome from "../login/ManagerHome";
import ProtectedRoute from "../login/ProtectedRoute";
import AboutUs from "../login/AboutUs";

function Landing() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg suryansh-navbar-light fixed-top">
        <div className="container">
        <Link className="navbar-brand" to={"/"}>Bank</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/aboutus"}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="suryansh-outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Home} />
           
            <Route exact path="/loginm" component={Loginm} />
            <Route exact path="/loginc" component={Loginc} />
            <Route exact path="/forgotpwdc" component={ForgotPwdc} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/forgotpwdm" component={ForgotPwdm} />
            <ProtectedRoute path="/custhome" component={CustomerHome} isAuth={false} />
            <Route exact path="/manghome" component={ManagerHome} />

          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Landing;