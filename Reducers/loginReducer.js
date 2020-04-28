import {ISLOGGED, IS_VALID_USER, SET_USER} from '../constants/index';

const initialState = {
    loginStatus: false
};

const loginReducer = (state = initialState, action) => {
    console.log("Login Reducer Called");
    
    switch(action.type)
    {
        case ISLOGGED: 
        return{
            ...state,
            loginStatus : action.payload
        };
        case IS_VALID_USER:
            return{
                ...state,
                loginStatus : action.payload
            };

        case SET_USER:
            return{
                ...state,
                username: action.payload
            }
        default: 
        return state;
    }
}

export default loginReducer;