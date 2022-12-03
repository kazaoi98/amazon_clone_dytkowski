'use client';

import { spawn } from 'child_process';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../../components/main/Card/CartItem'
import { cartItemsTypes, getTotal } from '../../redux/cartSlice';
import { useAppDispatch } from '../../redux/hooks';
import Image from 'next/image'
import Link from 'next/link';

export type itemProperties = {
  id: number
  img: string
  title: string
  price: number
  cartQuantity: number
}

export type itemProps = {
  item: itemProperties
}

const BackButton = () => {
  return (
    <div className='flex flex-row'>
      <Image
        className='w-[32%] h-full mt-2 m-[1px] pt-[1px] pr-[8px] pb-0 pl-[6px] '
        alt="logo"
        src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
        width={261}
        height={150}
        priority={true}
      />

      <div className='flex flex-col pl-2 ml-4 mt-6'>
        <span className='font-normal text-[1.8rem]'>Your cart is empty.</span>
        <div className='transition-transform duration-300 ease-in-out group hover:bg-yellow-400 hover:scale-105 hover:cursor-pointer flex items-center mt-6 bg-yellow-300 w-[18rem] justify-center rounded-lg py-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="transition-transform duration-100 ease-in  group-hover:translate-x-[-5px]  w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
          <Link className='ml-2 text-[1.2rem]' href={'/'}>Go back to shopping.</Link>
        </div>
      </div>
    </div>
  )
}

export default function page() {
  const cart = useSelector((state: any) => state.cart);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [cart])

  return (

    <div className='mr-0 lg:mr-2 pl-0 lg:pl-4 pt-0 lg:pt-4 h-full inline-flex w-full'>

      <div className='bg-white flex-col pr-0 lg:pr-6 pb-0 lg:pb-6 rounded-none lg:rounded-lg pl-0 lg:pl-4 w-full pt-4  h-full lg:w-[100rem] min-w-[3rem] lg:min-w-[40rem]'>
          {cart.cartItems.length === 0 ? (
            BackButton()
          ) : (
            <>
              <span className='font-medium text-[1.5rem] lg:text-[1.8rem] pl-2'>Shopping Cart</span>
              <div className='w-full [border-bottom-solid] border-b-[1px] border-b-[#DDD] mr-1 lg:mr-0 float-right overflow-visible text-right'>
                <span className='text-right text-[1rem] lg:text-[0.9rem] font-medium text-gray-600'>Price</span>
              </div>
              {cart.cartItems?.map((items: any) => (
                <CartItem item={items} />
              ))}
              <div className='flex justify-center lg:justify-end sticky lg:static bottom-0 bg-white w-full '>
                <div className='flex flex-col items-center float-right mt-2 w-full'>
                  <div className='flex flex-row text-[1.3rem] justify-center w-full'>
                    <span className='float-right'>Subtotal ({cart.cartTotalQuantity} {(cart.cartTotalQuantity > 1) ? (<span> items</span>) : (<span> item</span>)}):</span>
                    <span className='ml-0 lg:ml-2 font-bold mr-0 lg:mr-2'>${cart.cartTotalAmount}</span>
                  </div>
                  <div className='flex lg:hidden mt-2 mb-2 lg:mt-4  justify-center items-center w-full'>
                    <button className='hover:bg-yellow-500 hover:scale-100 lg:hover:scale-105 bg-yellow-400 rounded-lg px-8 py-1 text-[1rem] lg:text-[0.9rem] font-semibold'>Proceed to checkout</button>
                  </div>
                </div>
              </div>
            </>)
          }
      </div >

      <div className='hidden lg:flex ml-4 mr-2 w-64 flex-shrink-0 h-full sticky top-2'>
        <div className='bg-white h-[10rem] rounded-lg justify-center'>
          <div className='flex pt-6 pl-6 flex-wrap'>
            <span className='text-[1.3rem]'>Subtotal ({cart.cartTotalQuantity} {(cart.cartTotalQuantity > 1) ? (<span> items</span>) : (<span> item</span>)}):</span>
            <span className='ml-2 text-[1.3rem] font-semibold mr-2'>${cart.cartTotalAmount}</span>
            <div className='mt-4 flex justify-center items-center'>
              <button className='hover:bg-yellow-500 hover:scale-105 bg-yellow-400 rounded-lg px-8 py-1 text-[0.9rem] font-semibold'>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>

    </div >

  )
}