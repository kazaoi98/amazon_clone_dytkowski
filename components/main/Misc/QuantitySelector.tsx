'use client';

import React, { useEffect, useState } from 'react'
import { itemProps } from '../../../app/Cart/page';
import { addToCart, cartItemsTypes, customQuantity, decreaseQuantity } from '../../../redux/cartSlice';
import { useAppDispatch } from '../../../redux/hooks';



type Props = {
    qty: number
}

export default function QuantitySelector({item}: itemProps) {

    const [disabled, setDisable] = useState(false)
    const [disabledStyle, SetDisabledStyle] = useState('')

    useEffect(() => {
        if (item.cartQuantity === 1) {
            setDisable(true)
            SetDisabledStyle('bg-gray-100 text-gray-300')
        } else {
            setDisable(false)
            SetDisabledStyle('')
        }


    }, [item.cartQuantity])

    const dispatch = useAppDispatch()

    const increaseQty = (product: any) => {
        dispatch(addToCart(product))
    };

    const decreaseQty = (product: any) => {
        dispatch(decreaseQuantity(product))
    }

    const customQty = (product: any, qty: number) => {
        dispatch(customQuantity([product, qty]))
    }
    return (

        <div className='flex flex-col font-normal text-black'>
            <span className='text-[1.6rem] lg:text-[0.9rem] '>Quantity</span>
            <div className='inline-flex bg-gray-100 rounded-full justify-center items-center'>
                <button onClick={() => decreaseQty(item)} disabled={disabled} className={'bg-gray-200 h-14 w-14 lg:h-8 lg:w-8 rounded-full flex items-center justify-center pb-2 text-[3.5rem] lg:text-[2rem]' + disabledStyle}>-</button>
                <input type={'number'} onChange={(e) => customQty(item, Number(e.target.value))} min={1} max={999} className='font-normal text-[2.3rem] lg:text-[1.1rem] flex items-center w-[1.8rem] justify-center text-center outline-none bg-gray-100' value={item.cartQuantity} ></input>
                <button onClick={() => increaseQty(item)} className='bg-gray-200 h-14 w-14 lg:h-8 lg:w-8 rounded-full flex items-center justify-center pb-2 text-[3.5rem] lg:text-[2rem]'>+</button>
            </div>
        </div>

    )
}