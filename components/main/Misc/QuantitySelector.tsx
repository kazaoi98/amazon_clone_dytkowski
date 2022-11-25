'use client';

import React, { useEffect, useState } from 'react'



type Props = {
    qty: number
}

export default function QuantitySelector({qty}: Props) {

    const [quantity, setQuantity] = useState(qty || 1)
    const [disabled, setDisable] = useState(false)
    const [disabledStyle, SetDisabledStyle] = useState('')

    useEffect(() => {
        if (quantity === 1) {
            setDisable(true)
            SetDisabledStyle('bg-gray-100 text-gray-300')
        } else {
            setDisable(false)
            SetDisabledStyle('')
        }


    }, [quantity])

    const Quantity = (set: string) => {

        if (set === 'add') return setQuantity(quantity + 1)
        else if (set === 'sub' && quantity >= 2) {
            return setQuantity(quantity - 1)
        } else return
    };
    return (

        <div className='flex flex-col font-normal text-black'>
            <span className='text-[0.9rem] '>Quantity</span>
            <div className='inline-flex bg-gray-100 rounded-full'>
                <button onClick={() => Quantity('sub')} disabled={disabled} className={'bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center pb-2 ' + disabledStyle}>-</button>
                <input type={'number'} onChange={(e) => setQuantity(Number(e.target.value))} min={1} className='font-normal text-[1.1rem] flex items-center w-[1.8rem] justify-center text-center outline-none bg-gray-100' value={quantity} ></input>
                <button onClick={() => Quantity('add')} className='bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center pb-2 '>+</button>
            </div>
        </div>

    )
}