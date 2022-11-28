'use client';

import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../../components/main/Card/CartItem'


type Props = {}

export default function page({ }: Props) {
  const cart = useSelector((state: any) => state.cart);

  return (

    <div className='mr-2 pl-4 pt-4 h-full inline-flex w-full'>

      <div className='bg-white flex-col pr-6 pb-64 rounded-lg pl-4 w-[100rem]  min-w-[40rem] float-none'>
        <div className='pt-4'>
          <span className='font-medium text-[1.8rem] pl-2'>Shopping Cart</span>
          {cart.cartItems.length === 0 ? (
            <span className='font-medium text-[1.3rem] pl-2'>Cart is empty</span>
          ) : (
            <>
              <div className='w-full [border-bottom-solid] border-b-[1px] border-b-[#DDD] mr-0 float-right overflow-visible text-right'>
                <span className='text-right text-[0.9rem] font-medium text-gray-600'>Price</span>
              </div>
              {cart.cartItems?.map((item: any) => (
                <CartItem img={"https://m.media-amazon.com/images/I/81Y3Mz9MeUL._AC_AA180_.jpg"} title={"Templa SteelSeries Aerox 3 Wireless - Super Light Gaming Mouse - 18,000 CPI TrueMove Air Optical Sensor - Ultra-lightweight 68g Water Resistant Design - 200 Hour Battery Life – SnowSteelSeries Aerox 3 Wireless - Super Light Gaming Mouse - 18,000 CPI TrueMove Air Optical Sensor - Ultra-lightweight 68g Water Resistant Designte name"} price={200} qty={1} />
              ))}
            </>)
          }
        </div>



      </div>

      <div className='ml-4 mr-2 w-64 flex-shrink-0 h-full sticky top-2'>
        <div className='bg-white h-[36rem] rounded-lg justify-center'>
          <div className='flex pt-6 pl-6 flex-wrap'>
            <span className='text-[1.3rem]'>Subtotal ():</span>
            <span className='ml-2 text-[1.3rem] font-semibold mr-2'>$200000.0</span>
            <div className='mt-4 flex justify-center items-center'>
              <button className='hover:bg-yellow-500 hover:scale-105 bg-yellow-400 rounded-lg px-8 py-1 text-[0.9rem] font-semibold'>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}