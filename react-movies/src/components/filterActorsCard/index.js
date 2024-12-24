import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'

const departments = [
    { id: "0", name: "All" },
    { id: "Acting", name: "Acting" },
    { id: "Directing", name: "Directing" },
    { id: "Camera", name:"Camera"},
];

const formControl={
    margin:1,
    minWidth:220,
    backgroundColor:"rgb(255,255,255)"
};

export default function FilterActorsCard(props){
    
    const handleChange=(e,type,value) =>{
        e.preventDefault();
        props.onUserInput(type,value);
    };

    const handleTextChange=(e)=>{
        handleChange(e,"name",e.target.value);
    }

    const handleDepartmentChange=(e) =>{
        handleChange(e,"department",e.target.value);
    };

    return (
        <Card sx={{backgroundColor:"rgb(204,204,0)"}}
        variant ="outlined">
        <CardContent>
            <Typography variant="h5" component="h1">
                <SearchIcon fonrSize="large"/>
                Filter the actors.
            </Typography>
            <TextField
            sx={{...formControl}}
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            value={props.nameFilter}
            onChange={handleTextChange}/>

            <FormControl sx={{...formControl}}>
                <InputLabel if="department-label">Department</InputLabel>
                <Select
                labelId="department-label"
                id="department-select"
                defaultValue=""
                value={props.departmentFilter}
                onChange={handleDepartmentChange}
                >
                    {departments.map((department) => {
              return (
                <MenuItem key={department.id} value={department.id}>
                  {department.name}
                </MenuItem>
              );
            })}

                </Select>

            </FormControl>
            
        </CardContent>
        <CardMedia  
        sx={{height:300}}
        image={img}
        title="Filter"
        />
        <CardContent>
            <Typography variant="h5" component="h1">
                <SearchIcon fontSize="large"/>
                Filter the actors.
                <br/>
            </Typography>

        </CardContent>
            
        </Card>
    );
}