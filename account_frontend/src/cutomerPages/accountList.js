import React, {useEffect, useState} from 'react'
import BankCustomer from '../components/bankCustomer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import DataTable from "react-data-table-component";
import axios from "axios";

// import MenuIcon from '@mui/icons-material/Menu';

function AccountList() {

    const [rows, setRows] = useState([]);

    const columns = [
        {
            name: "Account Number",
            selector: "accountNo",
            sortable: true
        },
        {
            name: "Balance Amount",
            selector: "balanceAmount",
            sortable: true
        },
        {
            name: "Latest Transaction Type",
            selector: "type",
            sortable: true
        },
        {
            name: "Latest Transaction Amount (Rs)",
            selector: "amount",
            sortable: true
        }


    ]

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await axios.get("http://localhost:8083/accounts/101");
            // console.log(responseData.data.accounts);
            const dataList=[];
            const accarray = responseData.data.accounts;
            for (let i = 0; i < accarray.length; i++) {
                let acctransactions = accarray[i].accountTransactions;
                let lastTransactionDetails = acctransactions[acctransactions.length - 1];
                console.log("Transactions Array= ", lastTransactionDetails);

                let obj={
                    "accountNo":accarray[i].accountNo,
                    "balanceAmount":accarray[i].balanceAmount,
                     "type":lastTransactionDetails.type,
                     "amount":lastTransactionDetails.amount
                }
                dataList.push(obj);
            }

            setRows(dataList);
        }
        fetchData().then(() => console.log("Data fetched"))
    }, [])

    return (
        <div>
            <div>
                <AppBar position="static" style={{background: '#060b26'}}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="primary" aria-label="menu" sx={{mr: 2}}>
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div" style={{marginLeft: '50%'}}>
                            LIST
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{marginLeft: "20%"}}>
                <DataTable
                    title={"Existing Accounts"}
                    columns={columns}
                    data={rows}
                    pagination
                />
            </div>
        </div>
    )
}

export default AccountList;
