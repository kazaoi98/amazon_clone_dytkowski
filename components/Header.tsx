import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import CartIndicatorButton from './main/Misc/CartIndicatorButton'
import SignInButton from './main/Misc/SignInButton'
import ClickAwayListener from 'react-click-away-listener'

export default function Header() {


  const handleClickAway = () => {
    console.log('Maybe close the popup');
  };
  return (


    <header className='flex-1 flex-col m-0' >
      <div className='m-0 bg-[rgb(35,47,62)] '>

        <div className='flex flex-row justify-between h-[60px] items-center bg-[#131921]'>

          <div className='flex items-center'>

            <div className='flex items-center justify-center lg:hidden text-white px-2'>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[0.5rem] font-semibold justify-center mb-[-0.5rem] tracking-widest'>Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </div>

            <div className='transition-transform duration-200 ease-in-out hover:scale-100 lg:hover:scale-105 relative flex-shrink-0 md:ml-[11px] h-[50px] bg-[#ffff]  rounded-lg my-1 mr-1'>
              <Link href='/'>
                <Image
                  className='h-[35px] lg:h-[40px] mt-3 lg:mt-2 m-[1px] w-full lg:pt-[1px] pr-[8px] pb-0 pl-[6px] '
                  alt="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                  width={97}
                  height={40}
                  priority
                />
              </Link>
            </div>

            <div className='flex flex-shrink-0'>
                  <button aria-label='deliver to button' className='hover:outline hover:outline-[1px] flex items-center text-white ml-[3px] mx-[0.7rem] '>

                    <div className='flex-shrink-0 mt-0 pt-2 lg:pt-0 lg:mt-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 mx-2 lg:mx-0 mb-2 justify-center lg:w-5 lg:h-5 text-white">
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

          <div className='hidden lg:flex  ml-0 lg:ml-5 h-[40px] flex-grow mr-3 '>

            <button aria-label='search category' className='hidden lg:flex hover:bg-[hsla(0,0%,100%,.8)] hover:border-none hover:text-black items-center font-medium text-[#5a5a5a] bg-[#f3f3f3] border border-solid border-r-[1px] border-r-[#777] rounded-l-[0.3rem] w-[52px] justify-center'>
              <p className='text-[12px]'>All</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-1 w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div className='flex  flex-1'>
              <input aria-label='search input' type={'text'} autoComplete={'off'} className='h-[40px] outline-none flex flex-grow indent-[8px] leading-[15px] text-black pt-[7px] pr-[10px] pb-[10px] pl-0' ></input>
            </div>

            <div className='flex bg-[#febd69] justify-center items-center w-[45px] hover:bg-[#f3a847] rounded-r-[0.3rem] mr-2'>
              <button aria-label='search button' className='flex text-[#5a5a5a] rounded-r-[0.3rem] h-full w-full justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>

          <div className='flex h-[60px] items-center  '>

            {/*  <button className='hidden lg:flex md:ml-[2px] hover:outline hover:outline-[1px] hover:outline-white  items-center ml-[1px] pl-[9px] h-[50px] pt-[10px]'>
                <p className='text-[0.9rem] text-white font-semibold'>EN</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="pt-1 pl-1 w-4 h-4 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button> */}

            <SignInButton />

            <CartIndicatorButton />



          </div>
        </div>

        <div className='flex-1 bg-[#131921] pb-2'>
          <div className='flex lg:hidden flex-row mx-2'>
            <div className='flex  flex-1'>
              <input aria-label='search input' placeholder='Search Amazon' type={'text'} autoComplete={'off'} className='h-[40px] rounded-l-lg rounded-r-none lg:rounded-l-none outline-none flex flex-grow indent-[8px] leading-[15px] text-black pt-[7px] pr-[10px] pb-[10px] pl-0' ></input>
            </div>

            <div className='flex bg-[#febd69] justify-center items-center w-[45px] hover:bg-[#f3a847] rounded-r-[0.3rem] mr-0 lg:mr-2'>
              <button aria-label='search button' className='flex text-[#5a5a5a] rounded-r-[0.3rem] h-full w-full justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7 lg:w-6 lg:h-6 text-black lg:text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <nav className='md:pl-[11px] max-h-[39px] pt-0 flex flex-nowrap h-[39px] items-center justify-start lg:justify-around overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden text-white'>
          <div className='hidden lg:flex no-underline text-[1rem] font-medium mr-2 flex-shrink-0'>
            <button className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <span className='pl-[2px] '>All</span>
            </button>

          </div>

          <div className='group flex items-center no-underline text-[0.9rem] font-medium flex-shrink-0 text-gray-300'>
            <button className='hover:bg-gray-700 hover:rounded-md group-hover:border-r-[rgb(35,47,62)] hover:text-gray-200 py-[3px] px-4 flex items-center [border-right-solid] border-r-[1px] border-r-gray-500'>
              <span className='pl-[2px] '>Today's Deals</span>
            </button>

            <button className='hover:bg-gray-700 hover:rounded-md group-hover:border-r-[rgb(35,47,62)] hover:text-gray-200 py-[3px] px-4  flex items-center [border-right-solid] border-r-[1px] border-r-gray-500'>
              <span className='pl-[2px] '>Customer Service</span>
            </button>

            <button className='hover:bg-gray-700 hover:rounded-md group-hover:border-r-[rgb(35,47,62)] hover:text-gray-200 py-[3px] px-4 flex items-center [border-right-solid] border-r-[1px] border-r-gray-500'>
              <span className='pl-[2px] '>Registry</span>
            </button>

            <button className='hover:bg-gray-700 hover:rounded-md group-hover:border-r-[rgb(35,47,62)] hover:text-gray-200 py-[3px] px-4  flex items-center [border-right-solid] border-r-[1px] border-r-gray-500'>
              <span className='pl-[2px] '>Gift Cards</span>
            </button>

            <button className='hover:bg-gray-700 hover:rounded-md hover:text-gray-200 py-[3px] px-4 flex items-center'>
              <span className='pl-[2px] '>Sell</span>
            </button>
          </div>

          <div className=' no-underline text-[1rem] font-medium mr-2 flex-shrink-0'>
            <Link className='hover:outline hover:outline-[1px] py-[3px] px-[5px] hover:outline-white flex items-center' href={'/'} >
              <span className='pl-[2px] mr-2'>Shop great deals now</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>

            </Link>
          </div>
        </nav>
      </div>


    </header>

  )
}