import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER
} from "./actionTypes";
import datas from '../Datas/test.json'

const initState = {
    isauth: true,
    is_error: false,
    user_data: [...datas.user],
    user_datas: [...datas.user],
};


const userReducer = (state = initState, action) => {

    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                isauth: true,
                user_data: [action.datas],
                user_datas: [...state.user_datas, action.datas]
            };

        case LOGIN_USER:
            if (
                state.user_data[0].email === action.email &&
                state.user_data[0].password === action.pwd
            ) {
                return {
                    ...state,
                    isauth: true,
                    is_error: false,
                };
            }

            return {
                ...state,
                isauth: false,
                is_error: true,
            };

        case LOGOUT_USER:
            return {
                ...state,
                isauth: false,
            };

        default:
            return state;
    }
};

export default userReducer;
