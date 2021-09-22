//customer creation page
import React from 'react'
//import image from './Images/Vector.jpg'
import {CardMedia} from '@mui/material/';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import {Container} from '@mui/material'


function NewCustomerAccount(){
    return (
       // <Container maxWidth="md" style={{ backgroundImage: "url(/b4.jpg)" , backgroundSize: 'cover'}}>

        <div className= 'App'>

        <Grid container>


            <Grid item xs={6} >
                <Card style={{ maxWidth: 600, margin: "0 auto", marginTop:'10%'}}>
                    <CardContent >
                        <Typography variant="h4" style= {{color: '#060b26'}} >
                            Create an Account
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" >
                            Fill all the mandatory fields to create an account.
                        </Typography>
                        <form>
                            <Grid container spacing={3}>
                                <Grid xs={12} sm={6} item style={{marginTop: 20, marginBottom: 20 }}>
                                    <TextField placeholder="Enter the customer name" label="Name" variant= "outlined"  fullWidth required />

                                </Grid>


                                <Grid xs={12} sm={6} item style={{marginTop: 20 }} >
                                    <TextField type="email" placeholder="Enter email address" label="Email" variant= "outlined" fullWidth required />
                                </Grid>



                                <Grid xs={12} item style={{marginTop: 1 }} >
                                    <TextField placeholder="Enter the postal address" label="Postal Address" variant= "outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={6} item style={{marginTop: 20 }} >
                                    <TextField placeholder="Enter the Aadhar Number" label="Aadhar Number" variant= "outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={6} item style={{marginTop: 20 }} >
                                    <TextField placeholder="Enter the Pan Number" label="Pan Number" variant= "outlined" fullWidth required />
                                </Grid>


                                <Grid xs={24} item style={{marginTop: 20 }} >
                                <TextField variant= "outlined" id="date" label="Birthday" type="date"  required sx={{ width: 220 }} InputLabelProps={{ shrink: true,}}  />

                                </Grid>

                                    <Grid xs={12} style={{marginTop: 20 }} >
                                    <Button type="submit" variant= "contained" style= {{backgroundColor: '#060b26', color: '#FFFFFF'}}fullWidth required>Submit</Button>
                                    </Grid>

                            </Grid>
                        </form>
                    </CardContent>

                </Card>



            </Grid>

            <Grid item xs={6} >
            {/* <Container maxWidth="md" > */}
                <Card sx={{ maxWidth: "md" }} style={{marginTop:'10%'}}>\
                <CardMedia
        component="img"
        maxWidth="md"
        height="500"
        allign="center"
        image="https://cdn4.vectorstock.com/i/1000x1000/57/73/financial-transactions-concept-metaphor-vector-32835773.jpg"
        alt="Image"
      />


                </Card>
                {/* </Container> */}



            </Grid>

            </Grid>
        </div>






    )
}

export default NewCustomerAccount;
