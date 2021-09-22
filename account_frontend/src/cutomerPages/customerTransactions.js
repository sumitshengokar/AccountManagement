import React, { useState } from 'react';

import DatePicker from "react-datepicker";

import { DataGrid } from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import "react-datepicker/dist/react-datepicker.css";

import Typography from '@mui/material/Typography';
import { FormControl, Select, InputLabel, MenuItem, Grid } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  {
    field: 'CustomerName',
    headerName: 'Customer name',
    width: 250,
    editable: true,
  },
  {
    field: 'AccountNumber',
    headerName: 'AccountNumber',
    width: 250,
    editable: true,
  },
  {
    field: 'TransactionAmount',
    headerName: 'TransactionAmount',
    type: 'number',
    width: 250,
    editable: true,
  },
  // {
  //   field: 'AccountNumber',
  //   headerName: 'AccountNumber',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];


const rows = [
  { id: 1, CustomerName: 'Snow', AccountNumber: '111111', TransactionAmount: 35 },
  { id: 3, CustomerName: 'Lannister', AccountNumber: '11111112', TransactionAmount: 45 },
  { id: 2, CustomerName: 'Lannister', AccountNumber: '11111111', TransactionAmount: 42 },
  { id: 4, CustomerName: 'Stark', AccountNumber: '11111111', TransactionAmount: 16 },
  { id: 5, CustomerName: 'Targaryen', AccountNumber: '11111111', TransactionAmount: 23 },
  { id: 6, CustomerName: 'Melisandre', AccountNumber: '11111111', aTransactionAmountge: 15 },
  { id: 7, CustomerName: 'Clifford', AccountNumber: '11111111', TransactionAmount: 44 },
  { id: 8, CustomerName: 'Frances', AccountNumber: '11111111', TransactionAmount: 36 },
  { id: 9, CustomerName: 'Roxie', AccountNumber: '11111111', TransactionAmount: 65 },
];
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function CustomerTransaction() {

  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 4,
  //   maxColumns: 4,
  // });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [account, setAccount] = useState("XXXX-XXXX-XX");
  const [open, setOpen] = useState(false);

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
  return (
    <div>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        HISTORY
      </Typography> */}
      
      <div style={{ display: 'flex' }}>
      <FormControl required Label="Select Account" fullWidth variant="filled" InputLabelProps={{ shrink: true }} >
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

        <label >from </label>
        <DatePicker placeholderText="Select Start Date" selected={startDate} onChange={(date) => setStartDate(date)} />
        <label>to </label>
        <DatePicker  selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
     
      <div style={{ height: 320, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>

  );
}
export default CustomerTransaction;