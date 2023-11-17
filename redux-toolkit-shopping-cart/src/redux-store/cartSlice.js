import { createSlice } from "@reduxjs/toolkit";

const addItem = (state, action) => {
    const newItem = action.payload;
    const existingItem = state.itemsList.find(
        item => item.id === newItem.id
    );
    state.subTotal += newItem.price;
    state.total += newItem.price + 5000;

    if(existingItem){
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
    } else{
        state.itemsList.push({
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.name,
            img: newItem.img
        });
        state.totalQuantity++;
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        subTotal: 0,
        total: 0,
    },
    reducers: {
        addToCart(state, action){
            addItem(state, action);
        },
        increaseQty(state, action){
            addItem(state, action);
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemsList.find(item => item.id === id);
            state.subTotal -= existingItem.price;
            state.total -= existingItem.price + 5000;
            if(existingItem.quantity === 1){
                state.itemsList = state.itemsList.filter(item => item.id !== id);
                state.totalQuantity--;
            } else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        clearItem(state, action) {
            const id = action.payload;
            const existingItem = state.itemsList.find(item => item.id === id);
            state.subTotal -= existingItem.totalPrice;
            state.total -= existingItem.totalPrice + (5000 * existingItem.quantity);
            state.itemsList = state.itemsList.filter(item => item.id !== id);
            state.totalQuantity--;
        },
        cartProceed(state) {
            state.itemsList = [];
            state.totalQuantity = 0;
            state.subTotal = 0;
            state.total = 0;
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice;