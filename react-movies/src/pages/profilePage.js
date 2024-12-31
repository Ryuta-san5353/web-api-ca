import React ,{useContext} from "react";
import {AuthContext} from "../contexts/authContext";
import {Container,Typography, Avatar} from "@mui/material";
import Grid from "@mui/material/Grid2";

const ProfilePage = ()=>{
    const {userName} = useContext(AuthContext);

    return (
        <Container maxWidth="sm" sx={{mt:5}}>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item>
                    <Avatar
                        alt={userName}
                        sx={{width:100,height:100,bgcolor:"primary.main"}}
                        >
                            {userName.charAt(0).toUpperCase()}
                        </Avatar>
                </Grid>
                <Grid item>
                    <Typography variant="h4">{userName}</Typography>

                </Grid>
            </Grid>
        </Container>
    )
}

export default ProfilePage