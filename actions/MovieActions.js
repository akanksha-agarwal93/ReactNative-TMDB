import {FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../constants/index';
// import {fetchMovies} from "../apiData/MovieAPIs";

// const movieByIDApi = () => fetch(`https://api.themoviedb.org/3/list/1?api_key=${api_key}`)

export function fetchMoviesPending(){
    return {
        type: FETCH_MOVIES_PENDING
    }
}

export function fetchMoviesSuccess (movies){
    console.log(`fetchMoviesSuccess ${movies}`);
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export function fetchMoviesError (error){
    console.log("fetchMoviesError in Action");
    
    return {
        type: FETCH_MOVIES_ERROR,
        payload: error
    }
}

// const api_key = `976e01968799491aab0415d107b09781`;

// export const fetchMoviesAction =  async (dispatch) => {
//     console.log("fetchMovieAction called ");
//     try {
//         const response = await movieByIDApi();
//         const res = await response.json();
//         console.log(res.items[0]);
        
//         // dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.items });
//     } catch (e) {
//         // dispatch({ type: FETCH_MOVIES_ERROR, payload: e });
//     }
// }
