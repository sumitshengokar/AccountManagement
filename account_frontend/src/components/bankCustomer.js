//Customer Side Bar
import React, { useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { BrowserRouter as Router, Switch, Route, link } from 'react-router-dom';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Link, Container } from '@material-ui/core';
// import HomeIcon from '@material-ui/icons/Home';
// import Info from '@material-ui/icons/Info';
import { SidebarData } from './customerSidebarData';
import './navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const navbar={
    backgroundColor: '#060b26',
    height: '80px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'

}

const menuBars={
    marginLeft: '2rem',
    fontSize: '2rem',
    background: 'none'

}

const navMenu = {
    backgroundColor: '#060b26',
    width: '250px',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    left: '-100%',
    transition: '850ms',
}

const navMenuActive = {
    left: '0',
    backgroundColor: '#060b26',
    width: '250px',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    transition: '350ms',
}

const navText = {
    display: 'flex',
    justifyContent: 'start',
    alignItems:  'center',
    padding: '8px 0px 8px 16px',
    listStyle: 'none',
    height: '60px',
}


function BankCustomer() {

    const [sidebar, setSidebar] = useState(true);
    const [name,setName]=useState("");
     const showSidebar = ()=> setSidebar(!sidebar);

 const fetchStatement=async (title)=>{
     // console.log("Title= ",title);
     if(title==="Statement")
     {

     }
    else if(title==="Accounts")
     {

     }
 }

    return (
        <div className="navbar">


        <nav   className = {sidebar ? 'nav-menu-active': 'nav-menu'}>

            <ul className="nav-menu-items">
                <li href="#"className="navbar-toggle" >
                <a to="#" className = "menu-bars">
                    <FaIcons.FaBars style={{color: 'white'}}/>
                 </a>
                </li>
                {SidebarData.map((item,index) => {
                    const path=item.path;
                    return(
                        <li key={index} className = "nav-text" onClick={()=>{fetchStatement(item.title)}}>
                            <Link to={path} >
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>


        </div>

    )
}

export default BankCustomer;
