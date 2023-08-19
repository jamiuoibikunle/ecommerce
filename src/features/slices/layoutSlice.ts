"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layout: "grid",
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        handleLayout: (state, action) => {
            localStorage.setItem("layout", action.payload)
            state.layout = action.payload;
        },

    },
});

export const { handleLayout } = layoutSlice.actions

export default layoutSlice.reducer;