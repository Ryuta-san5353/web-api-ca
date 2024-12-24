import React,{useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CakeIcon from '@mui/icons-material/Cake';
import PlaceIcon from '@mui/icons-material/Place';


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails=({actor})=>{
    

    return(
        <>
        <Typography variant="h5" component="h3">
            Biography
        </Typography>

        <Typography variant="h6" component="p">
            {actor.biography}

        </Typography>

        <Paper comoponent="ul" sx={{...root}}>
            <Chip icon={<PlaceIcon/>} label="Place of Birth" color="primary"/>
            <Chip label={`${actor.place_of_birth}`}/>
            
        </Paper>
        <Paper component="ul" sx={{...root}}>
            <Chip icon={<CakeIcon/>} label="Birthday" color="primary" />
            <Chip label={`${actor.birthday}`} />
        </Paper>
        </>
    );
};

export default ActorDetails;