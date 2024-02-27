require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;


// ESTA FUNCION OBTIENE LOS GENEROS DE LAS SERIES DE LA API

const getSerieGenres = async () => {
    const apiSerieGenres = [];

    //LE PIDE LOS GENEROS A LA API
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${API_KEY}`);
    
    //RECORRE EL RESULTADO Y AGRUPA LOS GENEROS EN EL ARRAY apiSerieGenres
    if (data.genres) {
        data.genres.forEach(element => {
            const genre = {
                id: element.id,
                name: element.name,
            };
            apiSerieGenres.push(genre);
        });
    };
    
    return apiSerieGenres;
};

module.exports = getSerieGenres;