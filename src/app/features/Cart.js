import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

export const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
        increaseItemQuantity: (state, action) => {
            const { id } = action.payload
            const findItem = state.products.find(prod => prod.id == id)
            if (findItem) {
                if (findItem.quantity == 10) {
                    return
                }
                findItem.quantity += 1
            }
        },
        decreaseItemQuantity: (state, action) => {
            const { id } = action.payload
            const findItem = state.products.find(prod => prod.id == id)
            if (findItem) {
                if (findItem.quantity == 1) {
                    return
                }
                findItem.quantity -= 1
            }
        },
    }
});

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
