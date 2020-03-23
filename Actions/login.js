import {LOGIN} from '../Constants/index';

export function getLoginUser (user){
    return {
        type: LOGIN,
        payload: user,
    }
}