'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from '../../../redux/hooks';
import { closeLoginModal, setUserCredentials } from '../../../redux/loginSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { v4 as uuid } from 'uuid'
import { Credentials } from '../../../typings';
import GoogleButton from './GoogleButton';
import SignUpLoginButton from './SignUpLoginButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

type Props = {
    open: boolean;
}

type InputsRegister = {
    login: string,
    password: string,
    confirmPassword: string;
};

type InputsLogin = {
    login: string,
    password: string,
};

export default function LoginModal({ open }: Props) {
    const dispatch = useAppDispatch()

    const schema = yup.object({
        login: yup.string().min(4).max(30).required(),
        password: yup.string().min(4).max(40).required(),
        confirmPassword: yup.string().min(4).max(40).oneOf([yup.ref("password")], "Passwords do not match").required(),
    }).required();

    const schema2 = yup.object({
        login: yup.string().min(4).max(30).required(),
        password: yup.string().min(4).max(40).required(),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<InputsRegister>({ resolver: yupResolver(schema) });
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm<InputsLogin>({ resolver: yupResolver(schema2) });

    /* if (!open) return null */

    const Register: SubmitHandler<InputsRegister> = async data => {
        const id = uuid();

        const credentials: Credentials = {
            id,
            created_at: Date.now(),
            picture: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            login: data.login,
            password: data.password,
        }

        const uploadCredentialsToDatabase = async () => {
            const res = await fetch('api/uploadCredentials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ credentials })
            });

            const data: unknown = await res.json()
        }

        uploadCredentialsToDatabase()
    }

    const closeModal = () => {
        dispatch(closeLoginModal())
    }

    function ConditionsText() {
        return (
            <span className='mt-4 text-[0.9rem]  text-gray-500'>

                By continuing, you agree to Amazon's
                <Link href={''} > <span className='text-blue-500 no-underline hover:underline'> Conditions of Use </span></Link>
                and
                <Link href={''} > <span className='text-blue-500 no-underline hover:underline'> Privacy Notice.  </span></Link>

            </span>
        )
    }

    const onLogin: SubmitHandler<InputsLogin> = async data => {
        const getCredentials = async () => {
            const res = await fetch('api/getCredentials', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const credentials = await res.json()
            const foundData = credentials.retrievedCredentials.find((obj: {login: string, password: string}) => {return (obj.login === data.login && obj.password === data.password)})
            dispatch(setUserCredentials(foundData))
        }
        getCredentials()
        //closeModal()
    }

    const inputNames: {name: string, title: string}[] = [{ name: 'login', title: 'Login or Email' }, { name: 'password', title: 'Password' }, { name: 'confirmPassword', title: 'Re-enter password' }]

    function Login() {

        return (
            <>
                <span className='font-semibold text-[1.7rem] text-black'>Sign in</span>
                <form
                    onSubmit={handleSubmit2(onLogin)}
                    className='flex flex-col justify-center w-full'
                >
                    {inputNames.slice(0, 2).map((input: any) => {
                        return (

                            <div className='flex flex-col' key={input.name}>
                                <span className='mt-1 text-[0.8rem] font-semibold text-gray-500'>{input.title}</span>
                                <input {...register2(input.name, { required: true })} type={(input.name === 'login' ? 'text' : 'password')} aria-label={input.name + ' input'} autoComplete={'off'} className='mt-2 border border-solid border-gray-200 rounded-lg h-[40px] outline-none flex indent-[8px] leading-[15px] text-black' ></input>

                                {(errors.login && input.name === 'login') && ErrorMessage(errors.login.message)}
                                {(errors.password && input.name === 'password') && ErrorMessage(errors.password.message)}
                                {(errors.confirmPassword && input.name === 'confirmPassword') && ErrorMessage(errors.confirmPassword.message)}
                            </div>

                        )
                    })}

                    <input type="submit" value={'Continue'} className='cursor-pointer hover:bg-yellow-400 w-full bg-yellow-300 rounded-lg mt-3 py-2 font-semibold text-[0.9rem] ' />
                </form>
            </>
        )
    }

    function ErrorMessage(message: string | undefined) {
        return (
            <>
                <div className='mt-1 text-[0.8rem] text-red-500 flex items-center font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <span className='ml-1'>
                        {message}
                    </span>
                </div>
            </>
        )
    }

    function SignUp() {
        return (
            <>

                <span className='font-semibold text-[1.7rem] text-black'>Create account</span>
                <form
                    onSubmit={handleSubmit(Register)}
                    className='flex flex-col justify-center w-full'
                >
                    <>
                        {inputNames.map((input: any) => {
                            return (

                                <div className='flex flex-col' key={input.name}>
                                    <span className='mt-1 text-[0.8rem] font-semibold text-gray-500'>{input.title}</span>
                                    <input {...register(input.name, { required: true })} type={(input.name === 'login' ? 'text' : 'password')} aria-label={input.name + ' input'} autoComplete={'off'} className='mt-2 border border-solid border-gray-200 rounded-lg h-[40px] outline-none flex indent-[8px] leading-[15px] text-black' ></input>

                                    {(errors.login && input.name === 'login') && ErrorMessage(errors.login.message)}
                                    {(errors.password && input.name === 'password') && ErrorMessage(errors.password.message)}
                                    {(errors.confirmPassword && input.name === 'confirmPassword') && ErrorMessage(errors.confirmPassword.message)}
                                </div>

                            )
                        })}

                        <input type="submit" value={'Continue'} className='cursor-pointer hover:bg-yellow-400 w-full bg-yellow-300 rounded-lg mt-3 py-2 font-semibold text-[0.9rem] ' />
                    </>
                </form>

            </>
        )
    }
    const { SignUpLoginButtonState } = useSelector((state: RootState) => state.login);
    return ReactDOM.createPortal(
        <>
        {open &&
            <div className=' justify-center items-start flex bg-[rgba(0,0,0,.85)] w-full h-full top-0 bottom-0 left-0 right-0 fixed '>

                <div className='flex flex-col mb-auto mt-auto relative justify-center'>
                    <div className='flex relative flex-grow-0 w-full justify-center items-center bg-gray-100 max-w-lg h-full py-10 rounded-lg z-20'>
                        <div className='flex flex-col justify-center w-[60%] '>

                            {!SignUpLoginButtonState && <Login />}
                            {SignUpLoginButtonState && <SignUp />}
                            <ConditionsText />

                        </div>

                    </div>
                    <div className='flex text-center mt-4'>
                        <div className='flex-grow relative '>
                            <div className='top-1/2 border-t border-solid border-gray-300 w-full absolute'></div>
                        </div>
                        <span className='flex-grow-0 pl-4 pr-4 text-gray-100 text-[0.8rem]'>New to Amazon?</span>
                        <div className='flex-grow relative'>
                            <div className='top-1/2 border-t border-solid border-gray-300 w-full absolute'></div>
                        </div>
                    </div>

                    <GoogleButton />

                    <SignUpLoginButton />

                    <button onClick={() => closeModal()} className='hover:bg-gray-300  hidden lg:flex ml-2 p-1  left-full top-0 absolute bg-gray-100 mb-auto rounded-lg'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className=" w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>

            </div>

        }
        </>
        ,
        document.getElementById('loginPortal')!
    )
}