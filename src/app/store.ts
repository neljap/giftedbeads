import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../context/CartSlice";

const Store = configureStore({
    reducer: {
    cart: cartReducer
    }
})

export default Store;