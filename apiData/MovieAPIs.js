import {fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError} from '../actions/MovieActions';
import {getMoviesListById} from '../APIsConstants';
const api_key = `976e01968799491aab0415d107b09781`;

export function fetchMovies (){
    return dispatch => {
        console.log(`fetch movies called`);
        dispatch(fetchMoviesPending());
        getMoviesListById()
        .then(response => response.json())
        .then(response => {
            if(response.error){
                throw error;
            }
            console.log(`response : ${response.items}`);
            dispatch(fetchMoviesSuccess(response.items));
            return response.items;
        })
        .catch(error => {
            dispatch(fetchMoviesError(error));
        });
    }
}