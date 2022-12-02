'use client';

import Link from 'next/link';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getTotal } from '../../../redux/cartSlice';
import { useAppDispatch } from '../../../redux/hooks';

export default function CartIndicatorButton() {

    const { cartTotalQuantity } = useSelector((state: any) => state.cart);
    let quantity = cartTotalQuantity.toString()

    if (quantity > 99) {
        quantity = '99+'
    }

    return (
        <Link href={'/Cart'} className='md:mr-[11px] md:ml-[2px]  flex items-center hover:outline hover:outline-[1px]  hover:outline-white ml-[2px] px-[4px] w-[4.6rem] leading-[1] py-[12px] pt-[10px] flex-shrink-0 '>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 lg:w-8 lg:h-8 text-white flex-shrink-0 z-[1] ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div className='flex text-center items-center bg-[#FDE8E8] rounded-full z-10 p-[0.08em] justify-center relative  translate-x-[-17px] translate-y-[-12px] border-solid border-[2px] border-[#131921]'>
                <span className='flex text-[#5A2702] font-bold text-[0.9rem] w-[1.3rem] h-[1.3rem] tracking-tighter items-center justify-center mt-[-2px]'>{quantity}</span>
            </div>
            <span className='hidden lg:flex text-[1.2rem] lg:text-[1rem] text-white font-semibold translate-x-[-1.5rem] translate-y-[0.35rem] pr-4 mr-2'>Cart</span>

        </Link>
    )
}