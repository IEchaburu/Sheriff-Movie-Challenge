const { Router } = require("express");
const getPMovies = require("../handlers/Movies/getPopularMovies");
const getTRMovies = require("../handlers/Movies/getTopRatedMovies");

const movie_router = Router();

movie_router.get('/popular_movies', getPMovies);
movie_router.get('/top_rated_movies', getTRMovies);

module.exports = movie_router;

