import React,{useState} from "react";
import ActorList from "../personList"
import Header from "../headerMovieList"
import FilterCard from "../filterActorsCard";
import Grid from "@mui/material/Grid2";


function ActorListPageTemplate({actors,title,action}){
    const[nameFilter,setNameFilter]=useState("");
    const [departmentFilter,setDepartmentFilter]=useState("0");

    let displayedActors=actors
    .filter((a)=>{
        return a.name.toLowerCase().search(nameFilter.toLowerCase()) !==-1;
    })
    .filter((a)=>{
        return departmentFilter==="0"? true:a.known_for_department===departmentFilter;
    });

    const handleChange=(type,value)=>{
        if(type==="name")setNameFilter(value);
        else setDepartmentFilter(value);
    };

    return (
        <Grid container>
          <Grid size={12}>
            <Header title={title} />
          </Grid>
          <Grid container sx={{flex: "1 1 500px"}}>
            <Grid 
              key="find" 
              size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
              sx={{padding: "20px"}}
            >
              <FilterCard
                onUserInput={handleChange}
                nameFilter={nameFilter}
                departmentFilter={departmentFilter}
              />
            </Grid>
            <ActorList  actors={displayedActors}></ActorList>
          </Grid>
        </Grid>
      );
}

export default ActorListPageTemplate;

