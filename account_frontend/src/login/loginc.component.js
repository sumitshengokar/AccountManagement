import React, {Component, useState} from "react";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Landing from "../components/Landing";
export default function Loginc() {

    const history = useHistory();
    const [userId,setUserId]=useState("");
    const [password,setPassword]=useState("");
    const handleForgotPassword = () => history.push('/forgotpwdc');
    var a= new Array();
    const ath = true;
    const handleCustomerId=(e)=>{
        setUserId(e.target.value);
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleClick=async (e)=>{
        let payload = {
            userId:userId,
            password:password,
            "role":{"roleId":2}
        };
        const response= await axios.post('http://localhost:8083/login',payload);
        const flag=response.data.success;
        if(flag===true)
        {
            localStorage.setItem('user',userId);
            history.push('/home');
        }
        else {
            alert("Wrong Credentials .Please Enter the Correct One");
        }

    }

        return (
            <div class="suryansh-general">

                 <Landing/>
                <h3>Customer Login</h3>

                <div className="form-group">
                    <label>Customer ID</label>
                    <input onChange={handleCustomerId} type="text" className="form-control" placeholder="Enter Customer ID" id="custid" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handlePassword} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="suryansh-custom-control-input" id="customCheck1" />
                        <label className="suryansh-custom-control-label" htmlFor="customCheck1">&nbsp; Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Sign in</button>
                <button type="submit" className="suryansh-btnLink float-right" onClick={handleForgotPassword}>Forgot Password?</button>


            </div>
        );
}
