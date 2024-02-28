import axios from "axios";
import { GET_POPULAR_MOVIES } from "./movieActionTypes";

export const getPopularMovies = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/movie/popular_movies")

            return dispatch({
                type: GET_POPULAR_MOVIES,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    }
};