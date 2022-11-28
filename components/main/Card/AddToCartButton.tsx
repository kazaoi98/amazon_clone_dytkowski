'use client';

import React from 'react'
import { addToCart } from '../../../redux/cartSlice'
import { useAppDispatch } from '../../../redux/hooks'
import { ProductTypes } from './Card'

export default function AddToCartButton({product}: ProductTypes) {
    const dispatch = useAppDispatch()
    const addToCartHandler = (product: ProductTypes) => {
        dispatch(addToCart(product))
    }
    return <button className='ml-2 text-[1.5rem] md:text-[1.4rem] lg:text-[1.2rem] font-semibold flex flex-shrink-0 ' onClick={() => addToCartHandler({ product })}>Add to cart</button>
}