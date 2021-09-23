import React, {useState} from 'react'
// import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/core';
import {FormControl, Select, InputLabel, MenuItem} from '@mui/material';
import {FormControlLabel} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {makeStyles} from '@mui/styles';
import axios from "axios";
import {useHistory} from 'react-router-dom';


import {Grid, Card, CardContent} from '@mui/material';

//import Textfield from '@material-ui/core/TextField'
//import Stack from '@material-ui/core/Stack';
const useStyles = makeStyles((theme) => ({


    formControl: {
        minWidth: "100%",
    },

}));

function CashWithdraw() {
    const history=useHistory();
    const classes = useStyles();
    const [customerName, setcustomerName] = useState("John wick");
    const [balance, setBalance] = useState(5000);
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [email, setEmail] = useState("abcd@gmail.com");
    const [amount, setAmount] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [open, setOpen] = React.useState(false);
    const [account, setAccount] = useState();


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleAccount = (e) => {
        const value = e.target.value;
        setAccount(value);
    }
    const submitData = async () => {
        let obj = {
            "type": "Debit",
            "subType": "Cash",
            "toAccount": parseInt(account),
            "amount": parseInt(amount)
        }
        const response = await axios.post("http://localhost:8083/cash-withdrawl/" + account, obj);
        console.log(response.data);
        if(response.data===true)
        {
            history.push('/home');
        }
    }
    return (

        <div className='App'>
            <Grid style={{padding: "80px 5px 0 5px"}}>
                <Card style={{maxWidth: 600, margin: "0 auto"}}>
                    <CardContent>
                        <Typography variant="h4" color="primary">
                            Cash Withdrawl
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Look out at the info below
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid xs={12} sm={12} item style={{marginTop: 20}}>
                                <TextField inputProps={{readOnly: true}} value={customerName}
                                           placeholder="Enter the customer name" label="Name" variant="outlined"
                                           fullWidth required/>

                            </Grid>

                            <Grid xs={12} sm={12} item style={{marginTop: 20}}>
                                <TextField inputProps={{readOnly: true}} value={email} type="email"
                                           placeholder="Enter email address" label="Email" variant="outlined" fullWidth
                                           required/>
                            </Grid>

                            <Grid xs={6} sm={6} item style={{marginTop: 20}}>
                                <TextField inputProps={{readOnly: true}} value={balance} placeholder="Total balance"
                                           label="Total Balance" variant="outlined" fullWidth required/>
                            </Grid>

                            <Grid xs={6} sm={6} item style={{marginTop: 20}}>
                                <TextField inputProps={{readOnly: true}} value={date} variant="outlined" id="date"
                                           label="Date" required fullWidth InputLabelProps={{shrink: true}}/>

                            </Grid>
                            <Grid xs={6} sm={6} item style={{marginTop: 20}}>
                                <TextField value={amount} onChange={(e)=>{setAmount(e.target.value)}} focused variant="outlined" id="amount"
                                           label="withdraw Amount" required fullWidth InputLabelProps={{shrink: true}}/>

                            </Grid>

                            <Grid xs={6} sm={6} item style={{marginTop: 20}}>

                                <FormControl className={classes.formControl} required Label="Select Account" fullWidth
                                             focused variant="filled" InputLabelProps={{shrink: true}}>
                                    <InputLabel id="Account">Select Account</InputLabel>


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

                                        <MenuItem value="111">
                                            <em>111</em>
                                        </MenuItem>
                                        <MenuItem value="222">
                                            <em>222</em>
                                        </MenuItem>
                                        <MenuItem value="999">
                                            <em>999</em>
                                        </MenuItem>

                                        {/* {Object.keys(account).map(function (keyy, index) {

                                            return (
                                                <MenuItem value={account[keyy].id}>{`officer ${officer[keyy].id}`}</MenuItem>
                                            )
                                        })} */}


                                    </Select>
                                </FormControl>


                            </Grid>

                            <Grid xs={12} style={{marginTop: 20}}>
                                <Button type="submit" variant="contained" fullWidth required
                                        onClick={submitData}>Submit</Button>
                            </Grid>

                        </Grid>

                    </CardContent>

                </Card>
            </Grid>


        </div>


    )
}

export default CashWithdraw;


