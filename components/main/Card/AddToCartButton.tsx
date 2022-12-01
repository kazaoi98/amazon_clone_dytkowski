'use client';

import React, { useEffect } from 'react'
import { addToCart, getTotal } from '../../../redux/cartSlice'
import { useAppDispatch } from '../../../redux/hooks'
import { ProductTypes } from './Card'

export default function AddToCartButton({ product }: ProductTypes) {
    const dispatch = useAppDispatch()



    const addToCartHandler = (product: ProductTypes) => {
        dispatch(getTotal())
        dispatch(addToCart(product.product))
    }
    return (


        <button className='hover:scale-105 hover:bg-yellow-500 flex flex-shrink-0 flex-nowrap py-12 lg:py-1 px-6 lg:px-2 max-h-[3rem]  rounded-lg  items-center justify-center bg-yellow-400 ml-2 m-4 lg:m-0 text-[2.8rem] lg:text-[1.2rem] font-semibold ' onClick={() => addToCartHandler({ product })}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className='mx-2'>Add to cart</span>
        </button>

    )
}