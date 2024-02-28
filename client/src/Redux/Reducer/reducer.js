import { GET_POPULAR_MOVIES } from "../Actions/Movies/movieActionTypes";

const initialState = {
    popularMovies: []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload
            };
            
        default:
            return state;
    };
};

export default rootReducer;