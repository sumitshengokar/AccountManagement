import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Loginc() {

    const history = useHistory();
    const handleClick = () => history.push('/forgotpwdc');
        return (
            <div class="suryansh-general">
            <form>

                <h3>Customer Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="suryansh-custom-control-input" id="customCheck1" />
                        <label className="suryansh-custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <button type="submit" className="suryansh-btnLink float-right" onClick={handleClick}>Forgot Password?</button>
            </form>
            </div>
        );
}