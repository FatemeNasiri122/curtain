import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "fateme@gmail.com",
    password: "fateme1234!",
    isLoggedIn: false,
    cart: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        addToCart: (state, action) => {
            console.log(action.payload)
            state.cart = state.cart.filter(cart => cart.id !== action.payload.id);
            state.cart.push(action.payload);
        },
    },
})

export const { login, addToCart } = userSlice.actions;

export default userSlice.reducer;