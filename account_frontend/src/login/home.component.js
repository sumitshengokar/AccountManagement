import React, { Component } from "react";
import Loginc from "./loginc.component";
import Loginm from "./loginc.component";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Home()
    {
        const history = useHistory();
        const handleClick = () => history.push('/loginc');
        const handleClick1 = () => history.push('/loginm');

        return (
            <div class="suryansh-accnt">
                <div class="main-container">
                    <div class="fixer-container">
                        <><h1 align="center">Account Management System</h1><br></br><br></br><><button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Login as a Customer</button><button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick1}>Login as a Manager</button></></>
                    </div>
                </div>
            </div>
            );
    
}