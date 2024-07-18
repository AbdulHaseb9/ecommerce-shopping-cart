import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./features/Cart";

export const store = configureStore({
    reducer: {
        cart: shoppingCartSlice
    }
})