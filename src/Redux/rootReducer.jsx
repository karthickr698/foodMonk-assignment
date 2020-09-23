import { combineReducers } from "redux";
import foodReducer from './foodReducer'
import userReducer from './userReducer'


export const rootReducer = combineReducers({
    food: foodReducer,
    user: userReducer
});