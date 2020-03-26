import {ISLOGGED} from '../constants/index';

export function setLoginStatus(isLoggedIn){
console.log("setLoginStatus called");
return{
        type: ISLOGGED,
        payload: isLoggedIn
    }
}

export function checkValidUser(username, password){
console.log("checkValidUser called");
    return{
            type: ISLOGGED,
            payload: isLoggedIn
        }
    }

