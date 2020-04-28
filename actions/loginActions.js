import {ISLOGGED, SET_USER} from '../constants/index';

export function setLoginStatus(isLoggedIn){
return{
        type: ISLOGGED,
        payload: isLoggedIn
    }
}

export function checkValidUser(username, password){
    return{
            type: ISLOGGED,
            payload: isLoggedIn
        }
    }

export function setUsername(username){
    return {
        type : SET_USER,
        payload: username
    }
}
