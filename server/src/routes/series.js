const { Router } = require("express");
//const getPMovies = require("../handlers/Movies/getPopularMovies");
//const getTRMovies = require("../handlers/Movies/getTopRatedMovies");
//const getMovies_By_Name = require("../handlers/Movies/getMoviesByName");
const serieById = require("../handlers/Series/getSerieById");

const serie_router = Router();

//serie_router.get('/popular_movies', getPMovies);
//serie_router.get('/top_rated_movies', getTRMovies);
//serie_router.get('/name', getMovies_By_Name);
serie_router.get('/:id', serieById);

module.exports = serie_router;