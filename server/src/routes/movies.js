const { Router } = require("express");
const getPMovies = require("../handlers/Movies/getPopularMovies");

const movie_router = Router();

movie_router.get('/popular_movies', getPMovies);

module.exports = movie_router;

