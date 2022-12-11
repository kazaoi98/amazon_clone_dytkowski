'use client';

import React, { useState } from 'react'
import LoginModal from './LoginModal'

export default function SignInButton() {

    const [Open, setOpen] = useState(true)

    return (
        <>
        
            <LoginModal open={Open} />
            <button onClick={() => setOpen(true)} className='hidden lg:flex  md:ml-[2px] flex-wrap hover:outline hover:outline-[1px] hover:outline-white items-center ml-[2px] pl-[9px] w-[140px] leading-[1] py-[10px]'>
                <span className='text-white text-[12px] '>Hello, sign in </span>
                <span className='text-white font-semibold text-[14px] '>Account & Lists</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="pt-1 pl-1 w-4 h-4 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </>
    )
}