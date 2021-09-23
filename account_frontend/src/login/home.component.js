import React, { Component } from "react";
import Loginc from "./loginc.component";
import Loginm from "./loginc.component";
import logo from "./bnk.jpg"
import logo1 from "./BB.jpg"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Home()
    {
        const history = useHistory();
        const handleClick = () => history.push('/loginc');
        const handleClick1 = () => history.push('/loginm');

        return (
            <><div class="split left">
                <div class="centered">
                    <div class="suryansh-accnt">
                        <div class="main-container">
                            <div class="fixer-container">
                                <><h1 align="center">Account Management System</h1><br></br><br></br><><button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Login as a Customer</button><br></br><button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick1}>Login as a Manager</button></></>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="split right">
                <div class="centered">
                    <br></br>
                    <img src={logo} />
                    <h4 className="abc">RESPECT | INTEGRITY | SERVICE | EXCELLENCE | STEWARDSHIP</h4>
                    </div>
            </div></>
            );
    
}