import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortBy,setSortBy]=useState("default");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

    const sortMovies=(moviesToSort)=>{
      switch(sortBy){
        case "rating-asc":
          return [...moviesToSort].sort((a,b)=>a.vote_average-b.vote_average);
        case "rating-desc":
          return [...moviesToSort].sort((a,b)=>b.vote_average-a.vote_average);
        case "date-asc":
          return [...moviesToSort].sort((a,b)=>(new Date(a.release_date))-(new Date(b.release_date)));
        case "date-desc":
          return [...moviesToSort].sort((a,b)=>(new Date(b.release_date))-(new Date(a.release_date)));
        default: 
          return moviesToSort;

      }


    }

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if(type==="genre") setGenreFilter(value);
    else if (type==="sort") setSortBy(value);
  };

  displayedMovies=sortMovies(displayedMovies)

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
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            sortBy={sortBy}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;