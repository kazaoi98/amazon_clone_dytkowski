'use client';

import { createSlice } from '@reduxjs/toolkit'

export interface cartState {
    cartItems: [{ id: number, price: string, img: string, title: string, rating: number, cartQuantity: number }]
    cartTotalQuantity: number
    cartTotalAmount: number
}

const initialState: cartState = {
    cartItems: [{ id: 0, price: '', img: '', title: '', rating: 0, cartQuantity: 1 }],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id)
            state.cartTotalQuantity += 1

            if (index >= 0) {
                state.cartItems[index].cartQuantity += 1
               
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                
            }
        }
       
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;