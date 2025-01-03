import React, { useEffect, useState } from "react";
import { getFavorites,addFavorite,removeFavorite } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatches,setMustwatches]=useState([])
  const [myFavorites,setMyFavorites]=useState([]);


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToMustWatch= (movie)=>{
    let newMustWatches=[];
    if(!mustWatches.includes(movie.id)){
      newMustWatches=[...mustWatches,movie.id];
      console.log(`Added to must watch:${movie.id}`)
    }
    else{
      newMustWatches=[...mustWatches]
    }
    setMustwatches(newMustWatches);
    console.log("Current Must Watch IDs:", newMustWatches)
  }

  const fetchFavorites = async()=>{
    try{
      const result = await getFavorites();
      setMyFavorites(result);
    }catch(error){
      console.error("Failed to fetch favorites",error);
    }
  };

  const addFavorites = async(movieId)=>{
    try{
      console.log("adding to favorites",movieId)
      const updatedFavorites = await addFavorite(movieId);
      setMyFavorites(updatedFavorites);
    }catch(error){
      console.error("Failed to add favorite",error);
    }
  }

  const removeFavorites=async(movieId)=>{
    try{
      const updatedFavorites = await removeFavorite(movieId);
      setMyFavorites(updatedFavorites);
    }catch(error){
      console.error("Failed to remove favorite",error);
    }
  }
  useEffect(()=>{
    fetchFavorites();
  },[]);

 

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToMustWatch,
        addFavorites,
        removeFavorites,
        fetchFavorites,
        myFavorites
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;