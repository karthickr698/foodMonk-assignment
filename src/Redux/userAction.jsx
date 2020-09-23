import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER
} from "./actionTypes";

export const register_user = (datas) => {
    return {
        type: REGISTER_USER,
        datas,
    };
};

export const login_user = (email, pwd) => {
    return {
        type: LOGIN_USER,
        email,
        pwd,
    };
};

export const logout = (payload) => {
    return {
        type: LOGOUT_USER,
        payload,
    };
};
