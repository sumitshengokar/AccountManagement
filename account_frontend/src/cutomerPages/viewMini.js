import React from 'react'
import BankCustomer from '../components/bankCustomer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
function ViewMini() {
    return (
        <div>
            <AppBar position="static" style={{background:'#060b26'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" alignCenter style={{marginLeft:'50%'}}>
           Mini Statement
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth style={{backgroundColor:'grey',justify:'center',marginLeft:'20%'}}>
           
           <h1>
               fjslffjdsl
           </h1>
     
     </Container>
        </div>
    )
}

export default ViewMini;
