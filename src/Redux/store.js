import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const store = configureStore({
    reducer : {
        fav : cartReducer
    }
})

export default store