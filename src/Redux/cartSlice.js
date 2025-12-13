import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "favourites",
    initialState : [],
    reducers : {
        addToFav(state, action) {
            state.push(action.payload)
        },
        removeToFav(state, action) {
          return  state.filter((cart) => cart.idMeal !== action.payload)
        }
    }
})

export const {addToFav, removeToFav} = cartSlice.actions
export default cartSlice.reducer