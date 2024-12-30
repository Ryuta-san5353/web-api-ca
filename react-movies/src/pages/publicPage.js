import React from "react";
import {Link} from "react-router-dom";
import {Button,Typography,Container} from "@mui/material";
import Grid from "@mui/material/Grid2"



const PublicPage = () => {
    return(
        <Container maxWidth="sm" style={{marginTop:"50px"}}>
            <Grid container spacing={3} direction="colunmn" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to Movie App!
                    </Typography>
                </Grid>
                <Grid item container spacing={2} justifyContent="center">
                    <Grid item>
                        <Link to="/signup" style={{textDecoration:"none"}}>
                            <Button variant="contained" color="primary">
                                Sign Up
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/login" style={{ textDecoration:"none"}}>
                            <Button variant="outlined" color="primary">
                                Log In 
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                
            </Grid>
        </Container>
    )
 }

 export default PublicPage;