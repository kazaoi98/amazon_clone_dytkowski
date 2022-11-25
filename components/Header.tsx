import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


type Props = {}

export default function Header({ }: Props) {
  return (
    <div >
      <header className='flex-1 flex-col m-0' >
        <div className='m-0 bg-[rgb(35,47,62)] '>

          <div className='flex flex-row  h-[60px] items-center bg-[#131921]'>

            <div className='flex'>

              <div className='relative flex-shrink-0 hover:outline-[1px] hover:outline hover:outline-white md:ml-[11px] h-[50px]'>
                <Link href='/'>
                  <Image
                    className='h-[40px] mt-2 m-[1px] w-full pt-[1px] pr-[8px] pb-0 pl-[6px] '
                    alt="logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    width={97}
                    height={30}
                  />
                </Link>
              </div>

              <div className='flex flex-shrink-0'>
                <button className='hover:outline hover:outline-[1px] flex items-center text-white ml-[3px] mx-[0.7rem] '>

                  <div className='flex-shrink-0 mt-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-9 h-9 mx-2 lg:mx-0 mb-2 justify-center lg:w-5 lg:h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className='hidden items-center lg:flex flex-wrap leading-[14px] flex-shrink-0 w-[55px]'>
                    <span className='text-[#ccc]  text-[12px] '>Deliver to </span>
                    <span className='text-[14px] font-bold '>Poland </span>
                  </div>

                </button>
              </div>

            </div>

            <div className='flex  ml-0 lg:ml-5 h-[40px] flex-grow mr-3'>

              <button className='hidden lg:flex hover:bg-[hsla(0,0%,100%,.8)] hover:border-none hover:text-black items-center font-medium text-[#5a5a5a] bg-[#f3f3f3] border border-solid border-r-[1px] border-r-[#777] rounded-l-[0.3rem] w-[52px] justify-center'>
                <p className='text-[12px]'>All</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-1 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <div className='flex  flex-1'>
                <input type={'text'} autoComplete={'off'} className='h-[40px] outline-none flex flex-grow indent-[8px] leading-[15px] text-black pt-[7px] pr-[10px] pb-[10px] pl-0' ></input>
              </div>

              <div className='flex bg-[#febd69] justify-center items-center w-[45px] hover:bg-[#f3a847] rounded-r-[0.3rem] mr-2'>
                <button className='flex text-[#5a5a5a] rounded-r-[0.3rem] h-full w-full justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-gray-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className='flex h-[60px] items-center'>

              <button className='hidden lg:flex md:ml-[2px] hover:outline hover:outline-[1px] hover:outline-white  items-center ml-[1px] pl-[9px] h-[50px] pt-[10px]'>
                <p className='text-[0.9rem] text-white font-semibold'>EN</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="pt-1 pl-1 w-4 h-4 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <button className='hidden lg:flex  md:ml-[2px] flex-wrap hover:outline hover:outline-[1px] hover:outline-white items-center ml-[2px] pl-[9px] w-[140px] leading-[1] py-[10px]'>
                <span className='text-white text-[12px] '>Hello, sign in </span>
                <span className='text-white font-semibold text-[14px] '>Account & Lists</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="pt-1 pl-1 w-4 h-4 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <Link href={'/Cart'} className='md:mr-[11px] md:ml-[2px]  flex flex-wrap hover:outline hover:outline-[1px] hover:outline-white items-center ml-[2px] px-[4px] w-[70px] leading-[1] py-[10px] pt-[10px] flex-shrink-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <span className='text-[1.2rem] lg:text-[1rem] text-white font-semibold '>Cart</span>

              </Link>



            </div>
          </div>

          <nav className='md:pl-[11px] max-h-[39px] pt-0 flex flex-nowrap h-[39px] items-center justify-between text-white'>
            <div className='flex items-center no-underline text-[0.9rem] font-medium flex-shrink-0'>
              <button className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span className='pl-[2px] '>All</span>
              </button>

              <button className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center'>
                <span className='pl-[2px] '>Today's Deals</span>
              </button>

              <button className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center'>
                <span className='pl-[2px] '>Customer Service</span>
              </button>

              <button className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center'>
                <span className='pl-[2px] '>Registry</span>
              </button>

              <button className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center'>
                <span className='pl-[2px] '>Gift Cards</span>
              </button>

              <button className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center'>
                <span className='pl-[2px] '>Sell</span>
              </button>
            </div>
            <div className=' no-underline text-[1rem] font-medium mr-2 flex-shrink-0'>
              <button className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center'>
                <span className='pl-[2px] '>Shop great deals now</span>
              </button>
            </div>
          </nav>
        </div>


      </header>
    </div>
  )
}