"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./slices/layoutSlice";


const rootReducer = combineReducers({
    layout: layoutReducer,
    //add all your reducers here
},);

export const store = configureStore({
    reducer: rootReducer,

});
