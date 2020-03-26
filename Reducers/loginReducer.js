import {ISLOGGED, IS_VALID_USER} from '../constants';

const initialState = {
    loginStatus: false
};

const loginReducer = (state = initialState, action) => {
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
        default: 
        return state;
    }
}

export default loginReducer;