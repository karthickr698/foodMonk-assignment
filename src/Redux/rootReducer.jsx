import { combineReducers } from "redux";
import foodReducer from './foodReducer'


export const rootReducer = combineReducers({
    food: foodReducer
});