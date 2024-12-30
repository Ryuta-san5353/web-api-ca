import React,{useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../contexts/authContext";
import {Button,TextField,Typography,Container} from "@mui/material";
import Grid from "@mui/material/Grid2"

const SignUpPage = (props)=>{
    const context = useContext(AuthContext)
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [passwordAgain, setPasswordAgain]=useState("");
    const [registered,setRegistered]=useState(false);

    const register = ()=>{
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegEx.test(password);

        if(validPassword && password === passwordAgain){
            context.register(userName, password);
            setRegistered(true);
        }
    }

    if(registered === true){
        return <Navigate to ="/login" />;
    }

    return(
        <Container maxWidth="sm" sx={{mt:5}}>
            <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item>
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="center">
                        Create an account
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        onChange={(e)=>setUserName(e.target.value)}
                        />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        onChange={(e)=>setPasswordAgain(e.target.value)}
                        />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth onClick={register}>
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};
export default SignUpPage;