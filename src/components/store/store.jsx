import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const store = configureStore({
    reducer:{
        AllCarts: cartReducer
    }
})

export default store