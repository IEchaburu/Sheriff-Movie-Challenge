require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

// ESTA FUNCION OBTIENE LAS SERIES QUE COINCIDEN CON EL NOMBRE DE LA API

const getSeriesByName = async (name) => {
    const apiSeries = [];

    //LE PIDE LAS SERIES A LA API
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`);

    //RECORRE EL RESULTADO Y AGRUPA LAS SERIES EN EL ARRAY apiSeries
    if (data.results) {
        data.results.forEach(element => {
            const serie = {
                id: element.id,
                name: element.name,
                image: element.poster_path,
                genreIds: element.genre_ids,
                release: element.first_air_date,
                rating: element.vote_average
            };
            apiSeries.push(serie);
        });
    };

    return apiSeries;
};

module.exports = getSeriesByName;