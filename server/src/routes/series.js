const { Router } = require("express");
const getPSeries = require("../handlers/Series/getPopularSeries");
const getTRSeries = require("../handlers/Series/getTopRatedSeries");
const getSeries_By_Name = require("../handlers/Series/getSeriesByName");
const serieById = require("../handlers/Series/getSerieById");

const serie_router = Router();

serie_router.get('/popular_series', getPSeries);
serie_router.get('/top_rated_series', getTRSeries);
serie_router.get('/name', getSeries_By_Name);
serie_router.get('/:id', serieById);

module.exports = serie_router;