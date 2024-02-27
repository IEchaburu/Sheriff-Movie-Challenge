require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;


// ESTA FUNCION OBTIENE LOS GENEROS DE LAS PELICULAS DE LA API

const getMovieGenres = async () => {
    const apiMovieGenres = [];

    //LE PIDE LOS GENEROS A LA API
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`);
    
    //RECORRE EL RESULTADO Y AGRUPA LOS GENEROS EN EL ARRAY apiMovieGenres
    if (data.genres) {
        data.genres.forEach(element => {
            const genre = {
                id: element.id,
                name: element.name,
            };
            apiMovieGenres.push(genre);
        });
    };
    
    return apiMovieGenres;
};

module.exports = getMovieGenres;