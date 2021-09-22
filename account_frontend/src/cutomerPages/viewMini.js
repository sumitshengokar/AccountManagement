//view mini statements page
import React, {useState} from 'react'
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

function ViewMini() {
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
        const responseData=await axios.get("http://localhost:8083/mini-statements/"+accountId+"/101");
         console.log("Data =  ",responseData.data);
         setRows(responseData.data);


    }
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
                <FormControl required Label="Select Account" fullWidth variant="filled"
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

                        <MenuItem value="111"   >
                            <em> 111</em>
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
            <div>
                <DataTable
                    title={"Forex Provider List"}
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
