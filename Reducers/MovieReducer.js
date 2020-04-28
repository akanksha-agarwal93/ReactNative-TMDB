import {FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../constants/index';

const initialState = {
    pending: false,
    movies: [],
    error: null
};

export const MovieReducers = (state = initialState, action) =>{
    console.log(`Movie Reducer called. Action ${action.type}, State "${state}"`);
    switch(action.type){
        case FETCH_MOVIES_PENDING: 
        return{
            ...state,
            pending: true
        }
        case FETCH_MOVIES_SUCCESS: 
        console.log(`action payload: ${action.payload}`);
        return {
            ...state,
            pending: false,
            movies: action.payload
        }
        case FETCH_MOVIES_ERROR: 
        return {
            ...state,
            pending: false,
            error: action.error,
        }
        default: 
        return state;
    }
}

export const getMovies = state => state.movie.movies;
export const getMoviesPending = state => state.movie.pending;
export const getMoviesError = state => state.movie.error;

// export default MovieReducer;