import { GET_MOVIES_GENRES, GET_MOVIES_NAME, GET_MOVIE_ID, GET_POPULAR_MOVIES, GET_TOP_RATED_MOVIES } from "../Actions/Movies/movieActionTypes";
import { GET_POPULAR_SERIES, GET_SERIES_GENRES, GET_SERIES_ID, GET_SERIES_NAME, GET_TOP_RATED_SERIES } from "../Actions/Series/seriesActionTypes";

const initialState = {
    //ESTADOS RELACIONADOS A LAS MOVIES
    popularMovies: [],
    topRatedMovies: [],
    moviesByName: [],
    movieByID: [],
    movieGenres: [],

    //ESTADOS RELACIONADOS A LAS SERIES
    popularSeries: [],
    topRatedSeries: [],
    seriesByName: [],
    serieByID: [],
    seriesGenres: []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        //CASOS RELACIONADOS A LAS MOVIES
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload
            };
        case GET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: action.payload
            };
        case GET_MOVIES_NAME:
            if (action.payload.length === 0) {
                window.alert("The movie wasn't found")
            }
            return {
                ...state,
                moviesByName: action.payload,
            };
        case GET_MOVIE_ID:
            return {
                ...state,
                movieByID: action.payload
            };
        case GET_MOVIES_GENRES:
            return {
                ...state,
                movieGenres: action.payload
            };

        //CASOS RELACIONADOS A LAS SERIES
        case GET_POPULAR_SERIES:
            return {
                ...state,
                popularSeries: action.payload
            };
        case GET_TOP_RATED_SERIES:
            return {
                ...state,
                topRatedSeries: action.payload
            };
        case GET_SERIES_NAME:
            if (action.payload.length === 0) {
                window.alert("The serie wasn't found")
            }
            return {
                ...state,
                seriesByName: action.payload,
            };
        case GET_SERIES_ID:
            return {
                ...state,
                serieByID: action.payload
            };
        case GET_SERIES_GENRES:
            return {
                ...state,
                seriesGenres: action.payload
            };
            
        default:
            return state;
    };
};

export default rootReducer;