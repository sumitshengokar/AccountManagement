import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';
import BankCustomer from './components/bankCustomer';
import BankManager from './components/bankManager';
import ViewMini from './cutomerPages/viewMini';


import Home from './cutomerPages/home';
import Home1 from "./login/home.component";
import AccountList from './cutomerPages/accountList';
import AccountTransfer from './transactions/accountTransfer';
// import Deposit from './transactions/deposit';
// import PersonalDetails from './transactions/personalDetails';
import CashWithdraw from './transactions/cashWithdraw';
import ThirdPartyTransfer from './transactions/thirdPartyTransfer';
import Manager from './components/bankManager';
import NewCustomerAccount from './components/newCustomerAccount';
import Loginm from "./login/loginm.component";
import Loginc from "./login/loginc.component";
import ForgotPwdc from "./login/ForgotPwdc";
import AboutUs from "./login/AboutUs";
import ForgotPwdm from "./login/ForgotPwdm";
import ManagerHome from "./login/ManagerHome";
import React from "react";

function App() {
    return (
        <Router>

            <Switch>

                <Route exact path='/' component={Home1} />

                <Route path="/loginm" component={Loginm} />
                <Route exact path="/loginc" component={Loginc} />
                <Route exact path="/forgotpwdc" component={ForgotPwdc} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/forgotpwdm" component={ForgotPwdm} />
                {/*<Route path="/home" component={Home}  />*/}
                <Route exact path="/manghome" component={ManagerHome} />
                <Route exact path="/" component={ManagerHome} />

                <Route exact path="/manager"><Manager/></Route>
                <Route exact path="/new-customer"><NewCustomerAccount/></Route>

                <Route exact path="/transfer">< ThirdPartyTransfer/></Route>
                <Route exact path="/deposit"><AccountTransfer/></Route>
                <Route exact path="/cash-withdrawl"><CashWithdraw/></Route>
                <Route exact path="/customer"><BankCustomer/></Route>
                <Route exact path="/manager"><BankManager/></Route>
                <Route exact path="/account-list">



                    <AccountList/>
                    <BankCustomer/>
                </Route>
                <Route exact path="/mini-statement">

                    <ViewMini/>
                    <BankCustomer/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                    <BankCustomer/>

                </Route>


            </Switch>

        </Router>
    );
}

export default App;
