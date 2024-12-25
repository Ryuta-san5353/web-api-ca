import fetch from 'node-fetch';

export const getUpcomingMovies = async (page=1)=> {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieGenres = async()=>{
    try{
        const response=await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
        );

        if(!response.ok){
            throw new Error(response.json().message);
        }

        return await response.json();
    }catch(error){
        throw error;
    }
}

export const getMovies = async(page=1)=>{
    try {
        const response =await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
        );
        if(!response.ok){
            throw new Error(response.json().message);
        }
        return await response.json();
    }catch(error){
        throw error;
    }
}

export const getMovie=async(id)=>{
    try{
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
        );
        if(!response.ok){
            throw new Error(response.json().message);
        }
        return await response.json();
    }catch(error){
        throw error;
    }
}

export const getMovieImages = async(id) =>{
    try{
        const response= await fetch(
            `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
        );
        if(!response.ok){
            throw new Error(response.json().message);
        }
        return await response.json();
    }catch(error){
        throw error;
    }
}

export const getMovieReviews = async(id)=>{
    try{
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
        );
        if(!response.ok){
            throw new Error(response.json().messsage);
        }
        return await response.json();
    }catch(error){
        throw error;
    }
}

export const getMovieCredits=async(id)=>{
    try{
        const response = await fetch(
            ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
        );
        if(!response.ok){
            throw new Error(response.json().message);
        }
        return await response.json();
    }catch(error){
        throw error;
    }
}

export const getPopularMovies = async (page=1)=> {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};