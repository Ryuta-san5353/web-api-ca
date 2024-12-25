// export const getMovies = (page=1) => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

export const getMovies=(page=1)=>{
  return fetch(
    `http://localhost:8080/api/movies/tmdb/movies?page=${page}`
  ).then((response)=>{
    if(!response.ok){
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error)=>{
    throw error;
  });
  ;
}

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
  export const getGenres = async () => {
    return fetch(
      `http://localhost:8080/api/movies/tmdb/genres`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}/images`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}/reviews`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies=(page=1)=>{
    return fetch(
      `http://localhost:8080/api/movies/tmdb/upcoming?page=${page}`
    ).then((response) => {
      if(!response.ok){
        throw new Error(response.json().message);
      }
      return response.json()
    })
    .catch((error)=>{
      throw error
    });
  }

  export const getPopularMovies=(page=1)=>{
    return fetch(
      `http://localhost:8080/api/movies/tmdb/popular?page=${page}`
    ).then((response)=>{
      if(!response.ok){
        throw new Error(response.json().message);
      }
      return response.json()
    })
    .catch((error)=>{
      throw error
    });
  }

  export const getPopularActors = (page=1)=>{
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
    ).then((response)=>{
      if(!response.ok){
        throw new Error(response.json().message);
      }
      return response.json()
    })
    .catch((error)=>{
      throw error
    });
  }

  export const getActor = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getActorImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieCredits=({queryKey})=>{
    const [,idPart]=queryKey;
    const {id}=idPart
    return fetch(
      ` http://localhost:8080/api/movies/tmdb/movie/${id}/credits`
    ).then((response)=>{
      if(!response.ok){
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error)=>{
      throw error
    });
  };


