require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;


// ESTA FUNCION OBTIENE LOS DETALLES DE LA PELICULA DE LA API

const getMovieById = async (id) => {

    //LE PIDE LA PELICULA A LA API Y AGREGAMOS append_to_response=credits AL FINAL PARA 
    // QUE TAMBIEN TRAIGA LOS CREDITOS, YA QUE SINO HABRIA QUE TRAER ESA DATA EN OTRA PETICION
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}&append_to_response=credits`);

    
    if (data) {
        
        const movie = {
            id: data.id,
            name: data.title,
            image: data.poster_path,
            genres: data.genres,
            release: data.release_date,
            rating: data.vote_average,
            description: data.overview,
            cast: [],
            crew: []

        };
        // RECORREMOS LOS CREDITOS Y AGREGAMOS EL REPARTO Y EQUIPO EN LA PROPIEDAD CAST Y CREW
        data.credits.cast.forEach(element => {
            const actor = {
                id: element.id,
                name: element.name,
                image: element.profile_path,
                character: element.character
            };
            movie.cast.push(actor);
        });

        data.credits.crew.forEach(element => {
            const crewMember = {
                id: element.id,
                name: element.name,
                image: element.profile_path,
                job: element.job
            };
            movie.crew.push(crewMember);
        });
        
        return movie;
    };

};

module.exports = getMovieById;