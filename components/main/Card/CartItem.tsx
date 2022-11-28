'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import QuantitySelector from '../Misc/QuantitySelector'

type Props = {
    img: string
    title: string
    price: number
    qty: number
}

export default function CartItem({img, title, price, qty}: Props) {

   /*  const [itemsCount, setCount] = useState(0)
    const QtyCallback = (result: any) => {
        setCount(result)
    }; */

    return (
        <div className='w-full border-b-[1px] [border-bottom-solid] border-b-[#DDD]  mt-1 max-h-[220px]'>
            <div className='inline-flex whitespace- nowrap'>
                <div className='flex-shrink-0'>
                    <Link href='/Cart'>
                        <Image
                            className='mt-2 m-[1px] pt-[1px] pr-[8px] pb-0 pl-[6px] h-[180px] w-[180px]'
                            alt="logo"
                            src={img}
                            width={180}
                            height={180}
                        />
                    </Link>
                </div>
                <div className='mt-1 flex flex-col leading-normal text-[0.95rem]'>
                    <span className='text-[1.2rem] font-normal whitespace-normal line-clamp-3 leading-[1.2] max-w-[calc(100%-1rem)]  text-ellipsis inline-block overflow-hidden '>{title}</span>
                    <span className='text-[0.8rem] text-green-600 mt-1'>In stock</span>
                    <div className='flex text-[1.6rem] font-bold w-[3rem] mt-2 items-center '>
                        <QuantitySelector qty={qty}/>

                        <button className=' hover:underline flex items-center bg-red-400 rounded-full h-8 px-2 w-24 text-[0.9rem] font-semibold mt-5 ml-4 transition-transform ease-in duration-150 hover:scale-105'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <span className='text-[0.9rem] font-semibold ml-1'>Delete</span>
                        </button>
                    </div>
                </div>
                <span className='text-[1.2rem] font-bold float-right overflow-visible mt-2'>${price}</span>
            </div>

        </div>
    )
}