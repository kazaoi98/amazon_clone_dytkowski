'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../redux/hooks'
import { toggleSignUpLoginButton } from '../../../redux/loginSlice'
import { RootState } from '../../../redux/store'

export default function SignUpLoginButton() {

    const dispatch = useAppDispatch()
    const [text, setText] = useState('Create new Amazon account')
    const { SignUpLoginButtonState } = useSelector((state: RootState) => state.login);
    
    const handleClick = () => {
        dispatch(toggleSignUpLoginButton())
        if (!SignUpLoginButtonState) {
            setText('Go back to login')
        } else setText('Create new Amazon account')
    }


    return (
        <button className=' flex justify-center w-full hover:bg-gray-300 bg-gray-200 rounded-lg py-2 mt-4 ' onClick={() => handleClick()}>
            <span className='font-semibold text-[1rem]'>{text}</span>
        </button>
    )
}