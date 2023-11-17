import { createSlice } from "@reduxjs/toolkit";
import { cartAction } from "./cartSlice";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        showCart: false,
        showNotification: false,
        notification: "",
    },
    reducers: {
        setShowCart(state, action) {
            state.showCart = action.payload;
        },
        setNotification(state, action) {
            state.showNotification = action.payload.isShow;
            state.notification = action.payload.message;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cartAction.addToCart, (state) => {
            state.showNotification = true;
            state.notification = "Successfully added to cart"
        });
        builder.addCase(cartAction.clearItem, (state) => {
            state.showNotification = true;
            state.notification = "Successfully removed from cart"
        });
        builder.addCase(cartAction.cartProceed, (state) => {
            state.showNotification = true;
            state.notification = "Your order Successfully placed"
        });
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;