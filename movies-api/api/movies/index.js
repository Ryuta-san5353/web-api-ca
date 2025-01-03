import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getUpcomingMovies,
    getMovieGenres,
    getMovies,
    getMovieCredits,
    getMovieReviews,
    getMovieImages,
    getMovie,
    getPopularMovies,
    getActor,
    getActorImages,
    getPopularActors
} from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const {page=1}=req.query;
    const upcomingMovies = await getUpcomingMovies(page);
    res.status(200).json(upcomingMovies);
}));

router.get("/tmdb/genres",asyncHandler(async(req,res)=>{
    const movieGenres= await getMovieGenres();
    res.status(200).json(movieGenres);
}));

router.get("/tmdb/popular",asyncHandler(async(req,res)=>{
    const { page = 1}=req.query;
    const popularMovies= await getPopularMovies(page);
    res.status(200).json(popularMovies)
}));

router.get("/tmdb/movie/:id/images",asyncHandler(async(req,res)=>{
    const {id}= req.params;
    const movieImages = await getMovieImages(id);
    res.status(200).json(movieImages);
}));

router.get("/tmdb/movies",asyncHandler(async(req,res)=>{
    const {page=1}=req.query;
    const movies=await getMovies(page);
    res.status(200).json(movies);
}));

router.get("/tmdb/movie/:id",asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const movie= await getMovie(id);
    res.status(200).json(movie);
}));

router.get("/tmdb/movie/:id/reviews",asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const movieReviews=await getMovieReviews(id);
    res.status(200).json(movieReviews);
}));

router.get("/tmdb/movie/:id/credits",asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const movieCredits=await getMovieCredits(id);
    res.status(200).json(movieCredits);
}));

router.get("/tmdb/person/popular",asyncHandler(async(req,res)=>{
    const {page=1}=req.query;
    const popularActors= await getPopularActors(page);
    res.status(200).json(popularActors) 
}));

router.get("/tmdb/person/:id",asyncHandler(async(req,res)=>{
    const {id}= req.params;
    const actor = await getActor(id);
    res.status(200).json(actor);
}))

router.get("/tmdb/person/:id/images",asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const actorImages= await getActorImages(id);
    res.status(200).json(actorImages);
}));

export default router;