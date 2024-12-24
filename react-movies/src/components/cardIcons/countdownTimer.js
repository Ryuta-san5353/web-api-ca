import React from　"react";
import AccesTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Chip from "@mui/material/Chip";

const CountdownTimerIcon=({date})=>{
    const calculateReleaseDays = () => {
        const release=new Date(date);
        const today = new Date();
        
        const diffTime = release-today;
        const diffDays = Math.ceil(diffTime/86400000);
        
        return diffDays;
    };

    const daysLeft = calculateReleaseDays();

    if(daysLeft<=0){
        return(
            <Chip icon={<PlayCircleOutlineIcon/>} label="Released" size="small" color="primary">

            </Chip>
        )
    }
    else{
        return(
            <Chip icon={<AccesTimeIcon/>} label={`${daysLeft} days`} size="small" color="primary">

            </Chip>
        )
    }


}
export default CountdownTimerIcon