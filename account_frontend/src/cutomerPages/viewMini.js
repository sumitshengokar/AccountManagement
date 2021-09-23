//view mini statements page
import React, {useEffect, useState} from 'react'
import BankCustomer from '../components/bankCustomer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import DataTable from "react-data-table-component";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({


  formControl: {
    minWidth: "100%",
  },

}));

function ViewMini() {
    const [arr,setArr]=useState([]);
  const classes = useStyles();
    const columns = [
        {
            name: "No",
            selector: "transactionId",
            sortable: true
        },

        {
            name: 'transactionReferenceNo',
            selector: 'transactionReferenceNo',
             sortable:true
        },
        {
            name: 'date',
            selector: 'date',
            sortable: true,
        },
        {
            name: 'type',
            selector: 'type',
            sortable: true
        },
        {
            name: 'subType',
            selector: 'subType',
            sortable: true
        },
        {
            name: 'amount',
            selector: 'amount',
            sortable: true
        },
        {

            name: 'toAccount',
            selector: 'toAccount',
            sortable:true
        }
        ]
    const [rows,setRows]=useState([]);
    const handleClose = () => {
        setOpen(false);
    };
   const accounts=[111,999];

    const handleOpen = () => {
        setOpen(true);
    };
    const [open, setOpen] = useState(false);
    const [account, setAccount] = useState("");

    const handleAccount = async (e) => {
        const accountId=e.target.value;
        const responseData=await axios.get("http://localhost:8083/mini-statements/"+accountId+"/"+localStorage.getItem("user"));
         console.log("Data =  ",responseData.data);
         setRows(responseData.data);
    }

    useEffect(() => {
        const fetchData = async () => {
            let customerId=localStorage.getItem("user");
            const responseData1=await axios.get("http://localhost:8083/getaccountnumbers/"+customerId);
            setArr(responseData1.data);


        }
        fetchData().then(console.log("Data fetched"))

    }, [])
    return (
        <div>
            <AppBar position="static" style={{background: '#060b26'}}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="primary" aria-label="menu" sx={{mr: 2}}>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" alignCenter style={{marginLeft: '50%'}}>
                        Mini Statement
                    </Typography>
                </Toolbar>
            </AppBar>
            {/*<Container maxWidth style={{justify:'center',marginLeft:'20%'}}>*/}
            <div style={{marginLeft:"20%"}}>
                <FormControl className={classes.formControl} required Label="Select Account" fullWidth variant="filled"
                             InputLabelProps={{shrink: true}}>
                    <InputLabel id="Account">Select Account </InputLabel>


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

                        {arr.map((item,index)=>{
                            return(
                                <MenuItem value={item}>
                                    {console.log("Value =",item)}
                                    <em>{item}</em>
                                </MenuItem>
                            )
                        })}


                        {/* {Object.keys(account).map(function (keyy, index) {

                                            return (
                                                <MenuItem value={account[keyy].id}>{`officer ${officer[keyy].id}`}</MenuItem>
                                            )
                                        })} */}


                    </Select>
                </FormControl>
            </div>
            {/*<div style={{ height: 400, width: '100%' }}>*/}
            {/*    <DataGrid*/}
            {/*        rows={rows}*/}
            {/*        columns={columns}*/}
            {/*        pageSize={5}*/}
            {/*        rowsPerPageOptions={[5]}*/}
            {/*        checkboxSelection*/}
            {/*        disableSelectionOnClick*/}
            {/*    />*/}
            {/*</div>*/}
            <div style={{marginLeft:"20%"}}>
                <DataTable
                    title={"Transaction Details"}
                    columns={columns}
                    data={rows}
                    pagination
                />
            </div>


            {/*</Container>*/}
        </div>
    )
}

export default ViewMini;
