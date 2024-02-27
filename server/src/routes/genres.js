const { Router } = require('express');

const getMovieGenres = require("../handlers/Movies/getMovieGenres");
const getSeriesGenres = require("../handlers/Series/getSeriesGenres");

const genre_router = Router();

genre_router.get('/movie_genres', getMovieGenres);
genre_router.get('/series_genres', getSeriesGenres);


module.exports = genre_router;


