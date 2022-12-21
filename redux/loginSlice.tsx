'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EmptyObject } from 'react-hook-form';

type credentials = {
    aud: string
    azp: string
    email: string
    email_verified: boolean
    exp: number
    family_name: string
    given_name: string
    iat:  number
    iss: string
    jti: string
    name: string
    nbf: number
    picture: string
    sub: string
}

export interface cartState {
    loginModal: boolean
    loginCredentials: {} 
}

const initialState = {
    loginModal: false,
    loginCredentials: {} as credentials[],
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        openLoginModal(state) {
            state.loginModal = true;
        },
        closeLoginModal(state) {
            state.loginModal = false;
        },
        toggleLoginModal(state) {
            state.loginModal = !state.loginModal;
        },
        setUserCredentials(state, action) {
            state.loginCredentials = action.payload
        },
        removeUserCredentials(state) {
            state.loginCredentials = {} as credentials[]
        }
 
    }
})

export const { openLoginModal, closeLoginModal, toggleLoginModal, setUserCredentials, removeUserCredentials } = loginSlice.actions;

export default loginSlice.reducer;