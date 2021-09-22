import React, { useEffect, useState } from 'react'
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
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import axios from "axios";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({

  
    formControl: {
      minWidth: "100%",
    },
  
  }));

function Home() {

    const classes = useStyles();
    const [activeAccounts, setActiveAccounts] = useState(0);
    const [account, setAccount] = useState("");
  const [open, setOpen] = useState(false);

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

    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleAccount = (e) => {
        const { name, value } = e.target;
    
        setAccount(prevStep => ({
          ...prevStep,
          account: value
        }));
      }

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await axios.get("http://localhost:8083/active-accounts/102");
            setActiveAccounts(responseData.data);
        }
        fetchData().then(console.log("Data fetched"))

    }, [])
   
    return (
        <div>
            {/* <div style={{paddingTop: '0px', marginTop:'0px'}}>
            <h2 style={{textAlign:'center',color:'white',marginBottom: '5px', background:'#060b26'}}>
                HOME
                </h2>
                </div> */}
            <AppBar position="" style={{ background: '#060b26', paddingTop: '0px' }}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>

                    </IconButton>
                    <Typography variant="h6" color="inherit" style={{ marginLeft: '50%' }}>
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
                                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Active Accounts
                                </Typography> */}
                    
                                <FormControl className={classes.formControl} required Label="Select Account" fullWidth variant="filled" InputLabelProps={{ shrink: true }} >
                                    <InputLabel id="Account" >Account</InputLabel>
                                    
                                    <Select
                                        labelId="Select Account"
                                        defaultValue={"XXXX-XXXX-XX"}
                                        id="customer account"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={account}
                                        onChange={handleAccount}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="">
                                            <em>Account 1</em>
                                        </MenuItem>
                                        <MenuItem value="">
                                            <em>Account 2</em>
                                        </MenuItem>

                                        {/* {Object.keys(account).map(function (keyy, index) {

                                            return (
                                                <MenuItem value={account[keyy].id}>{`officer ${officer[keyy].id}`}</MenuItem>
                                            )
                                        })} */}


                                    </Select>
                                    
                                </FormControl>
                                {/* <Typography variant="h5" component="div">
                                    {activeAccounts}
                                </Typography> */}


                            </CardContent>
                            <CardActions>
                                <Button size="small">Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} xm={12} >
                        <Card sx={{ minWidth: 180,minHeight:133 }} style={{ border: '1px black solid' }}>
                            <CardContent style={{display:'flex',gap:'50%',marginTop:'6%'}}>
                                <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
                                    BALANCE : {500}
                                    
                                </Typography>
                                 <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
                                    Active Accounts :2
                                </Typography>
                                {/* <Typography variant="h5" component="div">
                                    500
                                </Typography> */}


                            </CardContent>
                            
                        </Card>
                    </Grid>
                </Grid>
                {/* ########fvjkldsfkdslfjdklfjfs */}
            </div>

            <div style={{ marginLeft: '19%', marginTop: '2%' }}>
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

                    <Grid container xs={6} style={{ marginLeft: '10px' }}>
                        <Grid item xs={12}>
                            <Card sx={{ minWidth: 180 }} style={{ border: '1px black solid' }}>
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
