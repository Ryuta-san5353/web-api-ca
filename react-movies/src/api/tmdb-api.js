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
      `http://localhost:8080/api/movies/tmdb/person/popular?page=${page}`
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
      `http://localhost:8080/api/movies/tmdb/person/${id}`
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
      `http://localhost:8080/api/movies/tmdb/person/${id}/images`
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

  export const login = async(username,password)=>{
    const response = await fetch(`http://localhost:8080/api/users`,{
      headers:{
        'Content-Type':'application/json'
      },
      method:'post',
      body:JSON.stringify({username:username, password: password})
    });
    return response.json();
  }

  export const signup = async(username,password) =>{
    const response = await fetch(`http://localhost:8080/api/users?action=register`,{
      headers:{
        'Content-Type':'application/json'
      },
      method:'post',
      body: JSON.stringify({username:username, password:password})
    });
    return response.json();
  }


