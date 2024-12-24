import React,{useState} from "react";
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage"
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites"
import AddPlaylistIcon from "../components/cardIcons/addPlaylist";
import Pagination from "@mui/material/Pagination";

const PopularPage=() => {
    const [page,setPage]=useState(1);
    const {  data, error, isLoading, isError }  = useQuery({
        queryKey:["popular",page],
        queryFn:()=>getPopularMovies(page),
    });

    if(isLoading){
        return <Spinner />
    }
    if (isError){
        return <h1>{error.message}</h1>
    }
    const handlePageChange=(event,value)=>{
        setPage(value)
    }
    const popularMovies=data.results;


    return(
        <>
            <PageTemplate
                title="Popular Movies"
                movies={popularMovies}
                action={(movie)=>{
                    return (
                    <>
                        <AddToFavoritesIcon movie={movie}/>
                        <AddPlaylistIcon movie={movie}/>

                    </>)
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
export default PopularPage;