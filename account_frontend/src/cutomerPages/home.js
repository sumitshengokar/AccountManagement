import React from 'react'
import BankCustomer from '../components/bankCustomer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import CardUI from './card';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import '../components/navbar.css';
import CustomerTransactions from './customerTransactions';


function Home() {
    let history = useHistory();

    const handleDeposit = () => {
        history.push("/deposit");

    }
    const handleWithdraw = () => {
        history.push("/cash-withdrawl");
    }
    const handleTransfer = () => {
        history.push("/transfer");
    }
    return (
        <div>
            {/* <div style={{paddingTop: '0px', marginTop:'0px'}}>
            <h2 style={{textAlign:'center',color:'white',marginBottom: '5px', background:'#060b26'}}>
                HOME
                </h2>
                </div> */}
            <AppBar position="" style={{ background: '#060b26',paddingTop:'0px' }}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
                        
                    </IconButton>
                    <Typography variant="h6" color="inherit"  style={{ marginLeft: '50%' }}>
                        HOME
                    </Typography>
                </Toolbar>
            </AppBar>
            
            {/* insert here */}
            {/* <Container > */}
            <div style={{ marginLeft: '19%', marginTop: '5px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} xm={12} >
                        <Card sx={{ minWidth: 180 }} style={{ border: '1px black solid' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Active Accounts
                                </Typography>
                                <Typography variant="h5" component="div">
                                    1
                                </Typography>


                            </CardContent>
                            <CardActions>
                                <Button size="small">Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} xm={12} >
                        <Card sx={{ minWidth: 180 }} style={{ border: '1px black solid' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    BALANCE
                                </Typography>
                                <Typography variant="h5" component="div">
                                    500
                                </Typography>


                            </CardContent>
                            <CardActions>
                                <Button size="small">Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                {/* ########fvjkldsfkdslfjdklfjfs */}
              </div>

            <div style={{marginLeft:'19%',marginTop:'2%'}}> 
            <Grid container xs={12}  >
                <Grid container xs={6} spacing={2}>
                  <Grid item xs={6} >
                  <Card sx={{ minWidth: 180 }} style={{ border: '1px black solid' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    LATEST CREDIT
                                </Typography>
                                <Typography variant="h5" component="div">
                                    100
                                </Typography>


                            </CardContent>
                            <CardActions>
                                <Button size="small">Details</Button>
                            </CardActions>
                        </Card>

                   </Grid>   
                   <Grid item xs={6}>
                    <Card sx={{ minWidth: 180 }} style={{ border: '1px black solid' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    LATEST DEBIT
                                </Typography>
                                <Typography variant="h5" component="div">
                                    100
                                </Typography>


                            </CardContent>
                            <CardActions>
                                <Button size="small">Details</Button>
                            </CardActions>
                        </Card>
                   </Grid> 
                   <Grid item xs={12}>
                   <Card sx={{ minWidth: 90 }} style={{ border: '1px black solid' }}>
                            <Button className="btn btn-background-slide" onClick={handleDeposit}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        DEPOSIT MONEY
                                    </Typography>
                                </CardContent>
                            </Button>
                        </Card>
                   </Grid>     
                   <Grid item xs={12}>
                   <Card sx={{ minWidth: 90 }} style={{ border: '1px black solid' }}>
                            <Button className="btn btn-background-slide" onClick={handleWithdraw}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        WITHDRAW MONEY
                                    </Typography>
                                </CardContent>
                            </Button>
                        </Card>
                   </Grid>     
                   <Grid item xs={12}>
                   <Card sx={{ minWidth: 90 }} style={{ border: '1px black solid' }}>
                            <Button className="btn btn-background-slide" onClick={handleDeposit}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        TRANSFER MONEY
                                    </Typography>
                                </CardContent>
                            </Button>
                        </Card>
                   </Grid>     
                </Grid>
                
                <Grid container xs={6} style={{marginLeft:'10px'}}>
                    <Grid item xs={12}>
                    <Card sx={{ minWidth: 180 }} style={{border:'1px black solid'}}>
                                <CardContent>
                                    
                                    <Typography variant="h5" component="div">
                                    <CustomerTransactions />
                                    </Typography>


                                </CardContent>
                                
                            </Card>

                    </Grid>    

                 </Grid>  
                 
            </Grid>
            </div>
            
           
           
           
           
           
           
            </div>
            


          


    )
}

export default Home;