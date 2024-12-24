import React,{useState} from "react";
import {getPopularActors} from "../api/tmdb-api";
import PageTemplate from "../components/templateActorListPage";
import {useQuery} from "react-query";
import Spinner from "../components/spinner"
import Pagination from "@mui/material/Pagination";

const ActorsPage=()=>{
    const [page,setPage]=useState(1)
    const {  data, error, isLoading, isError }  = useQuery({
        queryKey:["popularActors",page],
        queryFn:()=>getPopularActors(page),
    });

    const handlePageChange=(event,value)=>{
        setPage(value)
    }

    if(isLoading){
        return <Spinner/>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }

    const actors=data.results;

    return (
        <>
        <PageTemplate
            title="Popular Actors"
            actors={actors}
            />
            <Pagination
            count={data.total_pages}
            page={page}
            siblingCount={5}
            onChange={handlePageChange}
            size="large"
            color="primary"
            sx={{
            display:"flex",
            justifyContent:"center"
            }}/>
        </>
        
    )
}
export default ActorsPage;
