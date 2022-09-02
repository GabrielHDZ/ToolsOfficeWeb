import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import menuTools from "./menuTools";

export default combineReducers({
    counter: counterReducer,
    menu: menuTools

});