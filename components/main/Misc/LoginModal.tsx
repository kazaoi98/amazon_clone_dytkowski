'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
    open: boolean;
}

type Inputs = {
    login: string,
    password: string,
};


export default function LoginModal({ open }: Props) {
    if (!open) return null

    const [show, setShow] = useState(true)
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        setShow(false)
    }
    console.log('render')

    return ReactDOM.createPortal(
        <div className='flex bg-[rgba(0,0,0,.85)] w-full h-full top-0 bottom-0 left-0 right-0 fixed '>
            <div className='flex flex-row ml-auto mr-auto justify-center'>
                <div className='flex flex-col mb-auto mt-auto ml-auto mr-auto'>

                    <div className='flex  flex-grow-0 w-full justify-center items-center  bg-gray-100 max-w-lg h-80 rounded-lg z-20'>
                        <div className='flex flex-col justify-center w-[60%] '>
                            <span className='font-semibold text-[1.7rem] text-black'>Sign in</span>
                            {show && <span className=' mt-6 text-[0.8rem] font-semibold text-gray-500'>Email or mobile phone number</span>}

                            {
                                !show &&
                                <>
                                    <div onClick={() => setShow(true)} className='flex flex-row text-[0.9rem] font-semibold text-gray-600 mt-2 cursor-pointer' >
                                        {getValues("login")}
                                        <span className='ml-2 hover:text-yellow-500 hover:bg-gray-500 text-[0.9rem] text-gray-900 font-semibold bg-gray-300 rounded-xl px-2'>&nbsp;Change</span>
                                    </div>
                                    <span className=' mt-6 text-[0.8rem] font-semibold text-gray-500'>Enter password</span>
                                </>
                            }
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className='flex flex-col justify-center w-full'
                            >
                                {show && <input {...register("login", { required: true })} aria-label='login input' type={'text'} autoComplete={'off'} className='mt-2 border border-solid border-gray-200 rounded-lg h-[40px] outline-none flex indent-[8px] leading-[15px] text-black' ></input>}
                                {!show && <input {...register("password", { required: true })} aria-label='password input' type={'text'} autoComplete={'off'} className='mt-2 border border-solid border-gray-200 rounded-lg h-[40px] outline-none flex indent-[8px] leading-[15px] text-black' ></input>}

                                {errors.login && <span className='mt-1 text-[0.8rem] text-red-500 flex items-center font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>

                                    <span className='ml-1'> This field is required </span>
                                </span>}

                                <input type="submit" value={'Continue'} className='cursor-pointer hover:bg-yellow-400 w-full bg-yellow-300 rounded-lg mt-3 py-2 font-semibold text-[0.9rem] ' />
                            </form>

                            <span className='mt-4 text-[0.9rem]  text-gray-500'>

                                By continuing, you agree to Amazon's
                                <Link href={''} > <span className='text-blue-500 no-underline hover:underline'> Conditions of Use </span></Link>
                                and
                                <Link href={''} > <span className='text-blue-500 no-underline hover:underline'> Privacy Notice.  </span></Link>

                            </span>

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
                    <div className='hover:bg-gray-400 hover:text-white flex bg-gray-200 rounded-lg py-2 mt-4'>
                        <button className='w-full'>
                            <span className='font-semibold text-[1rem]'>Create new Amazon account</span>
                        </button>
                    </div>

                </div>
                <div className='flex bg-red-500  mb-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>

        ,
        document.getElementById('loginPortal')!
    )
}