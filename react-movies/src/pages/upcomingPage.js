import React,{useState} from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddPlaylistIcon from "../components/cardIcons/addPlaylist";
import CountdownTimerIcon from "../components/cardIcons/countdownTimer";
import Pagination from "@mui/material/Pagination";

const UpcomingPage =(props)=>{
    const [page,setPage]=useState(1);

    const {  data, error, isLoading, isError }  = useQuery({
        queryKey:["upcoming",page],
        queryFn:()=>getUpcomingMovies(page),
    });

    if(isLoading){
        return <Spinner/>
    }

    if(isError){
        return <h1>{error.message}</h1>
    }

    const handlePageChange=(event,value)=>{
        setPage(value)
    }
    const upcomingMovies=data.results;



    return(
        <>
            <PageTemplate
                title="Upcoming Movies"
                movies={upcomingMovies}
                action={(movie)=>{
                    return (
                    <>
                    <AddPlaylistIcon movie={movie}/>
                    <CountdownTimerIcon date={movie.release_date}/>
                    </>
                    )
                }}
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
export default UpcomingPage