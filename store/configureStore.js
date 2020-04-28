import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import loginReducer from "../reducers/loginReducer";
import {MovieReducers}  from "../reducers/MovieReducer";

const middlewares = [thunk];

const rootReducer = combineReducers(
    { login: loginReducer,
     movie: MovieReducers}, 
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(...middlewares));
}
 
export default configureStore;