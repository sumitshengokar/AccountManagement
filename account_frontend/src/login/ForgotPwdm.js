import React, { Component } from "react";

export default class ForgotPwdm extends Component {
    render() {
        return (
            <div class="suryansh-general">
            <form>
                <h3>Reset Manager Password</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="suryansh-form-control" placeholder="Enter Customer Email" />
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="suryansh-form-control" placeholder="Enter New password" />
                </div>
                <div className="form-group">
                    <label>Retype Password</label>
                    <input type="password" className="suryansh-form-control" placeholder="Retype password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Reset</button>
            </form>
            </div>
        );
    }
}