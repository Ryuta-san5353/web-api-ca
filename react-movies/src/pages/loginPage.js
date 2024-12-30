import React, { useContext , useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../contexts/authContext";
import { Link } from "react-router-dom";
import {Button , TextField,Typography,Container} from "@mui/material";
import Grid from "@mui/material/Grid2";


const LoginPage = (props)=>{

    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")

    const login = ()=>{
        context.authenticate(userName,password);
    };

    let location = useLocation();

    const { from } = location.state? { from:location.state.from.pathname}:{from:"/"};

    if(context.isAuthenticated === true){
        return <Navigate to={from}/>;
    }

    return(
        <Container maxWidth="sm" sx={{mt:5}}>
            <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item>
                    <Typography variant ="h4" gutterButton>
                        Login
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="center">
                        Log in to access protected pages.
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
                        onChange={(e) =>setPassword(e.target.value)}
                        />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth onClick={login}>
                        Log In
                    </Button>
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        Not registered?{" "}
                        <Link to="/signup" style={{textDecoration : "none"  ,color:"primary"}}>
                        Sign Up!
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginPage;

