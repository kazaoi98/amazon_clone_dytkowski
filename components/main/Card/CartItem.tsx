'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import QuantitySelector from '../Misc/QuantitySelector'
import { itemProperties, itemProps } from '../../../app/Cart/page';
import { useAppDispatch } from '../../../redux/hooks';
import { removeFromCart } from '../../../redux/cartSlice';

export default function CartItem({ item }: itemProps) {
    
   

    const dispatch = useAppDispatch()
    const handleDelete = (deleteItem: itemProperties) => {
        dispatch(removeFromCart(deleteItem))
    };

    return (
        <div className='w-full border-b-[1px] [border-bottom-solid] border-b-[#DDD]  mt-1' key={item.id}>
            <div className='inline-flex whitespace-nowrap w-full max-h-[230px] lg:max-h-[220px]'>
                <div className='flex-shrink-0'>
                    <Link href='/Cart'>
                        <Image
                            className='mt-2 m-[1px] pt-[1px] pr-[8px] pb-0 pl-[6px] h-[100px] w-[100px] lg:h-[180px] lg:w-[180px]'
                            alt="logo"
                            src={item.img}
                            width={180}
                            height={180}
                            priority={true}
                        />
                    </Link>
                </div>
                <div className='mt-1 flex flex-col leading-normal text-[0.95rem] pl-4 w-full mb-6'>
                    <span className='text-[1rem] lg:text-[1.2rem] font-normal whitespace-normal line-clamp-2 lg:line-clamp-3 leading-[1.2]  text-ellipsis inline-block overflow-hidden '>{item.title}</span>
                    <span className='text-[0.8rem] lg:text-[0.8rem] text-green-600 mt-1 '>In stock</span>
                    <div className='flex text-[1.6rem] font-bold w-[3rem] mt-2 items-center relative'>
                        <QuantitySelector item={item} />

                        <button onClick={() => handleDelete(item)} className='hover:no-underline lg:hover:underline flex items-center bg-red-400 rounded-full h-8 px-2 w-8 lg:w-24 font-semibold absolute bottom-0 ml-28 lg:mt-5 transition-transform ease-in duration-150 hover:scale-105'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 lg:w-4 lg:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className='hidden lg:flex font-semibold ml-1 text-[1rem]'>Delete</span>
                        </button>

                    </div>
                </div>
                
                <span className='text-[1rem] lg:text-[1.2rem] font-bold float-right overflow-visible mt-2 relative ml-auto mr-1 lg:mr-0' >${item.price}</span>
                
            </div>
        </div>

    )
}