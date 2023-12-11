import addItem from "./addItem";
import userReducer from './addUser';
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    auth: userReducer,
    addItem,
})

export default rootReducers;