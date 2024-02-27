const { Router } = require("express");
const getPMovies = require("../handlers/Movies/getPopularMovies");
const getTRMovies = require("../handlers/Movies/getTopRatedMovies");
const getMovies_By_Name = require("../handlers/Movies/getMoviesByName");
const getMovieById = require("../handlers/Movies/getMovieById");

const movie_router = Router();

movie_router.get('/popular_movies', getPMovies);
movie_router.get('/top_rated_movies', getTRMovies);
movie_router.get('/name', getMovies_By_Name);
movie_router.get('/:id', getMovieById);

module.exports = movie_router;

