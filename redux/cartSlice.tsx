'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface cartState {
    cartItems: []
    cartTotalQuantity: number
    cartTotalAmount: number
}

export type cartItemsTypes = {
    id: number
    price: string
    img: string
    title: string
    rating: number
    cartQuantity: number
}

const initialState = {
    cartItems: [] as cartItemsTypes[],
    cartTotalQuantity: 0 as number,
    cartTotalAmount: 0 as number,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (index >= 0) {
                state.cartItems[index].cartQuantity += 1

            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);

            }
        },
        removeFromCart(state, action) {
            const newItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = newItems;
        },
        decreaseQuantity(state, action) {
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (state.cartItems[index].cartQuantity > 1) {
                state.cartItems[index].cartQuantity -= 1
            }
        },
        customQuantity(state, action) {
            const index = state.cartItems.findIndex((item) => item.id === action.payload[0].id)
            if (index >= 0 && action.payload[1] > 0) {
                state.cartItems[index].cartQuantity = action.payload[1]
            }

        },
        getTotal(state) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = Number(price) * cartQuantity;

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = Number(total.toFixed(2));
        }

    }
})

export const { addToCart, removeFromCart, decreaseQuantity, customQuantity, getTotal } = cartSlice.actions;

export default cartSlice.reducer;