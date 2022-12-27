'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type credentials = {
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
    SignUpLoginButtonState: boolean
    loginCredentials: {} 
}

const initialState = {
    loginModal: false,
    SignUpLoginButtonState: false,
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
        toggleSignUpLoginButton(state) {
            state.SignUpLoginButtonState = !state.SignUpLoginButtonState;
        },
        setUserCredentials(state, action) {
            state.loginCredentials = action.payload
        },
        removeUserCredentials(state) {
            state.loginCredentials = {} as credentials[]
        }
 
    }
})

export const { openLoginModal, closeLoginModal, toggleLoginModal, toggleSignUpLoginButton, setUserCredentials, removeUserCredentials } = loginSlice.actions;

export default loginSlice.reducer;