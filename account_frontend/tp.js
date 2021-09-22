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


            <div>
            

                <Grid container spacing={3} style={{ marginTop: '5px' }}>
                    {/* grid 1 */}
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: 180 }} style={{ border: '1px black solid' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    TODAYS CREDIT
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
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: 180 }} style={{ border: '1px black solid' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    TODAYS DEBIT
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
                </Grid>
                {/* end of grid 1*/}

                {/* <Grid item xs={6}>
                            
                            <Card sx={{ minWidth: 180 }} style={{border:'1px black solid'}}>
                                <CardContent>
                                    
                                    <Typography variant="h5" component="div">
                                    <CustomerTransactions />
                                    </Typography>


                                </CardContent>
                                
                            </Card>
                        </Grid>
                    </Grid> */}
            </div>
            {/* ############################################################################# */}
            <br />
            <br />

            <div style={{ marginLeft: '18%' }}>
                <Grid container >
                    {/* grid 2 */}
                    <Grid items xs={6}  >
                        {/* <Card sx={{ minWidth: 90 }} style={{border:'1px black solid'}}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Deposit
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        DEPOSIT MONEY
                                    </Typography>


                                </CardContent>
                                
                            </Card> */}

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
                </Grid>
                {/* end of grid 2 */}
                <Grid container >
                    {/* grid 3 */}
                    <Grid items xs={6}  >
                        <Card sx={{ minWidth: 90 }} style={{ border: '1px solid black' }}>
                            {/* <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Withdrawl
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        WITHDRAW MONEY
                                    </Typography>


                                </CardContent> */}
                            <Button className="btn btn-background-slide" onClick={handleWithdraw}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        WITHDRAW MONEY
                                    </Typography>
                                </CardContent>
                            </Button>

                        </Card>
                    </Grid>
                </Grid>
                {/* end of grid 3 */}
                <Grid container>
                    {/* grid 4 */}
                    {/* <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}> */}

                    <Grid item xs={6} >
                        <Card sx={{ minWidth: 90 }} style={{ border: '1px solid black' }}>
                            <Button className="btn btn-background-slide" onClick={handleTransfer}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        TRANSFER MONEY
                                    </Typography>
                                </CardContent>
                            </Button>

                        </Card>
                    </Grid>

                </Grid>
                {/* end of 4 */}

            </div>
            
        </div>

