import React, {useEffect, useState} from 'react'
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
import {useHistory} from 'react-router-dom';
import '../components/navbar.css';
import CustomerTransactions from './customerTransactions';
import {FormControl, Select, InputLabel, MenuItem} from '@mui/material';
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
    const [customerId,setCustomerId]=useState(null);
    const [accountArray,setAccountArray]=useState([]);
    const [detailsObj, setDetailsObj] = useState({
        latestDebitAmount: 0,
        latestCreitAmount: 0,
        balancemount: 0
    })

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

    const handleAccount = async (e) => {
        const accountId = e.target.value;
        const debitResponseData = await axios.get("http://localhost:8083/last-debit-amount/" + accountId + "/"+customerId);
        const creditResponseData = await axios.get("http://localhost:8083/last-credit-amount/" + accountId + "/"+customerId);
        const balanceResponseData = await axios.get("http://localhost:8083/balance-amount/" + accountId);
        let obj = {
            latestDebitAmount: debitResponseData.data,
            latestCreitAmount: creditResponseData.data,
            balancemount: balanceResponseData.data
        }
        setDetailsObj(obj);
        console.log("D= ", debitResponseData.data, "C = ", creditResponseData.data, "B = ", balanceResponseData.data);


    }

    useEffect(() => {
        const fetchData = async () => {
            let customerId=localStorage.getItem("user");
            const responseData = await axios.get("http://localhost:8083/active-accounts/"+customerId);
            const responseData1=await axios.get("http://localhost:8083/getaccountnumbers/"+customerId);
            setAccountArray(responseData1.data);
            setActiveAccounts(responseData.data);
            setCustomerId(customerId);
        }
        fetchData().then(console.log("Data fetched"))

    }, [])
    const accountRelatedDetails = async () => {


    }

    return (
        <div>

            <AppBar position="" style={{background: '#060b26', paddingTop: '0px'}}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="primary" aria-label="menu" sx={{mr: 2}}>

                    </IconButton>
                    <Typography variant="h6" color="inherit" style={{marginLeft: '50%'}}>
                        HOME
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* insert here */}
            {/* <Container > */}
            <div style={{marginLeft: '19%', marginTop: '5px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={6} xm={12}>
                        <Card sx={{minWidth: 180, minHeight: 133}} style={{border: '1px black solid'}}>
                            <CardContent>
                                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Active Accounts
                                </Typography> */}

                                <FormControl className={classes.formControl} required Label="Select Account" fullWidth
                                             variant="filled" InputLabelProps={{shrink: true}}>
                                    <InputLabel id="Account">Account</InputLabel>

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

                                        {accountArray.map((item,index)=>{
                                           return(
                                            <MenuItem value={item}>
                                                {console.log("Value =",item)}
                                                <em>{item}</em>
                                            </MenuItem>
                                           )
                                        })}



                                        {/*<MenuItem value="999">*/}
                                        {/*    <em>999</em>*/}
                                        {/*</MenuItem>*/}


                                    </Select>

                                </FormControl>
                                {/* <Typography variant="h5" component="div">
                                    {activeAccounts}
                                </Typography> */}


                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Details</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                    </Grid>
                    <Grid item xs={6} xm={12}>
                        <Card sx={{minWidth: 180, minHeight: 133}} style={{border: '1px black solid'}}>
                            <CardContent style={{display: 'flex', gap: '50%', marginTop: '6%'}}>
                                <Typography sx={{fontSize: 14}} variant="h5" component="div">
                                    BALANCE : {detailsObj.balancemount}

                                </Typography>
                                <Typography sx={{fontSize: 14}} variant="h5" component="div">
                                    Active Accounts :{activeAccounts}
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

            <div style={{marginLeft: '19%', marginTop: '2%'}}>
                <Grid container xs={12}>
                    <Grid container xs={6} spacing={2}>
                        <Grid item xs={6}>
                            <Card sx={{minWidth: 180, minHeight: 133}} style={{border: '1px black solid'}}>
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        LATEST CREDIT
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {detailsObj.latestCreitAmount}
                                    </Typography>


                                </CardContent>

                            </Card>

                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{minWidth: 180, minHeight: 133}} style={{border: '1px black solid'}}>
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        LATEST DEBIT
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {detailsObj.latestDebitAmount}
                                    </Typography>


                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card sx={{minWidth: 90}} style={{border: '1px black solid'}}>
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
                            <Card sx={{minWidth: 90}} style={{border: '1px black solid'}}>
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
                            <Card sx={{minWidth: 90}} style={{border: '1px black solid'}}>
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

                    <Grid container xs={6} style={{marginLeft: '10px'}}>
                        <Grid item xs={12}>
                            <Card sx={{minWidth: 180}} style={{border: '1px black solid'}}>
                                <CardContent>

                                    <Typography variant="h5" component="div">
                                        <CustomerTransactions/>
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
