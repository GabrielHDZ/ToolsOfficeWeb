import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import { contadorReducer } from "./contador.reducer";

export default combineReducers({
    counter: counterReducer,
    contador:contadorReducer
});