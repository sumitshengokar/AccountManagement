
import React,{useState} from 'react'
// import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/core';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {FormControl, Select,InputLabel,MenuItem} from '@mui/material';


import {Grid,Card,CardContent } from '@mui/material';

//import Textfield from '@material-ui/core/TextField'
//import Stack from '@material-ui/core/Stack';

function AccountTransfer(){
    const [customerName,setcustomerName] = useState("John wick");
    const [panNumber,setPanNumber]= useState("KKBPS2090");
    const [email,setEmail]=useState("abcd@gmail.com");
    const [amount,setAmount]=useState("");
    const [date,setDate]=useState(new Date().toLocaleDateString());
    const [open, setOpen] = React.useState(false);
    const [account,setAccount]=useState("XXXX-XXXX-XX");

    const handleAmount=(e)=>{
        setAmount(e.target.value);
    }

    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

      const handleAccount=(e)=>{
        const {name , value} = e.target;
       
        setAccount(prevStep=>({
            ...prevStep,
            account:value
        }));
      }
    return (

        <div className= 'App'>
            <Grid style={{ padding: "80px 5px 0 5px"}}>
                <Card style={{ maxWidth: 600, margin: "0 auto"}}>
                    <CardContent>
                        <Typography variant="h4" color="primary" >
                            Cash Deposit
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" >
                           Look out at the info below
                        </Typography>
                        <form>
                            <Grid container spacing={3}>
                                <Grid xs={12} sm={12} item style={{marginTop: 20 }}>
                                    <TextField inputProps={{ readOnly: true }} value={customerName} placeholder="Enter the customer name" label="Name" variant= "outlined"  fullWidth required />

                                </Grid>

                                <Grid xs={12} sm={12} item style={{marginTop: 20 }} >
                                    <TextField inputProps={{ readOnly: true }} value={email} type="email" placeholder="Enter email address" label="Email" variant= "outlined" fullWidth required />
                                </Grid>

                                <Grid xs={6} sm={6} item style={{marginTop: 20 }} >
                                    <TextField inputProps={{ readOnly: true }} value={panNumber} placeholder="Enter the Pan Number" label="Pan Number" variant= "outlined" fullWidth required />
                                </Grid>

                                <Grid xs={6} sm={6} item style={{marginTop: 20 }} >
                                <TextField inputProps={{ readOnly: true }} value={date} variant= "outlined" id="date" label="Date"  required fullWidth InputLabelProps={{ shrink: true}}  />
                                
                                </Grid>
                                <Grid xs={6} sm={6} item style={{marginTop: 20 }} >
                                <TextField  value={amount} onChange={handleAmount} variant= "outlined" id="amount" label="Amount"  required fullWidth InputLabelProps={{ shrink: true}}  />
    
                                </Grid>

                                <Grid xs={6} sm={6} item style={{ marginTop: 20 }} >
                                 
                                <FormControl  required Label="Select Account" fullWidth focused variant="filled" InputLabelProps={{ shrink: true }} > 
                                    <InputLabel id="Account" >Select Account</InputLabel>
                                    
                                    
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
                                </Grid>
                                
                                <Grid xs={12} style={{marginTop: 20 }} >
                                 <Button type="submit" variant= "contained" fullWidth required>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>

                    </Card>
                    </Grid>

                                
        </div>
    
    
    
    
    
    
    
    


    )
}

export default AccountTransfer;


