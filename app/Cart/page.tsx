import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import QuantitySelector from '../../components/main/Misc/QuantitySelector'
import CartItem from '../../components/main/Card/CartItem'


type Props = {}

export default function page({ }: Props) {
  return (

    /*    <div className='mr-2 pl-4 pt-4 h-[37rem]'>
         <div className='bg-white inline-flex pr-24 pb-64 rounded-lg pl-4 w-full  min-w-[58rem] '>
   
          
            <Image
             className=' w-[30rem] h-[21rem] outline-none'
             alt="logo"
             src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
             width={261}
             height={150}
           >
           </Image>
   
           <div className=' flex items-center mt-0 ml-4 flex-shrink-0'>
             <div className='flex flex-col '>
               <span className='font-semibold text-[2.1rem] lg:text-[1.8rem] text-black'>Your Amazon Cart  is empty</span>
               <a className='hover:underline hover:text-amber-600  text-[1.3rem] lg:text-[1rem] text-[#007185]' href='#'>
                 Shop today's deals
               </a>
             </div>
           </div> 
   
         </div>
   
       </div> */

    <div className='mr-2 pl-4 pt-4 h-full inline-flex w-full'>

      <div className='bg-white flex-col pr-6 pb-64 rounded-lg pl-4 w-[100rem]  min-w-[40rem] float-none'>
        <div className='pt-4'>
          <span className='font-medium text-[1.8rem] pl-2'>Shopping Cart</span>
        </div>
        <div className='w-full [border-bottom-solid] border-b-[1px] border-b-[#DDD] mr-0 float-right overflow-visible text-right'>
          <span className='text-right text-[0.9rem] font-medium text-gray-600'>Price</span>
        </div>
        <CartItem img={"https://m.media-amazon.com/images/I/81Y3Mz9MeUL._AC_AA180_.jpg"} title={"Templa SteelSeries Aerox 3 Wireless - Super Light Gaming Mouse - 18,000 CPI TrueMove Air Optical Sensor - Ultra-lightweight 68g Water Resistant Design - 200 Hour Battery Life – SnowSteelSeries Aerox 3 Wireless - Super Light Gaming Mouse - 18,000 CPI TrueMove Air Optical Sensor - Ultra-lightweight 68g Water Resistant Designte name"} price={200} qty={1}/>

        
      </div>

      <div className='ml-4 mr-2 w-64 flex-shrink-0 h-full sticky top-2'>
        <div className='bg-white h-[36rem] rounded-lg justify-center'>
          <div className='flex pt-6 pl-6 flex-wrap'>
            <span className='text-[1.3rem]'>Subtotal ():</span>
            <span className='ml-2 text-[1.3rem] font-semibold mr-2'>$200000.0</span>
            <div className='mt-4 flex justify-center items-center'>
              <button className='hover:bg-yellow-500 hover:scale-105 bg-yellow-400 rounded-lg px-8 py-1 text-[0.9rem]'>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}