import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className='hidden lg:flex flex-col  flex-1 mt-[30px] mb-0 pb-0 bg-[#232F3E] min-w-[1000px] '>
            <a href="#top" className='hover:bg-[hsla(0,0%,100%,.1)] flex-1 text-center text-[#004B91] no-underline bg-[#37475A] py-[15px]'>
                <span className='text-white '>Back to top</span>
            </a>
            <div className=' flex-1 inline-flex mt-12 mb-6 mx-auto justify-center text-[#DDD]'>
                <div className='mt-3 flex-shrink-0'>
                    <Link href='/'>
                        <Image
                            className='h-[30px] w-auto mt-2 m-[1px] pt-[1px] pr-[8px] pb-0 pl-[6px] '
                            alt="logo"
                            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            width={76}
                            height={28}
                        />
                    </Link>
                </div>
                <div className='inline-flex ml-16 mt-[18px] text-gray-200 px-[0.6rem] text-[0.8rem] font-medium flex-shrink-0'>
                    <div className='hover:border-gray-300 border border-solid border-gray-400 rounded-[4px] mr-2'>
                        <a className='flex items-center py-[0.4rem] px-2 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            <span className='ml-1'>English</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-4 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>

                        </a>
                    </div>
                    <div className='hover:border-gray-300 border border-solid border-gray-400 rounded-[4px] mr-2 pr-4'>
                        <a className='flex items-center py-[0.4rem] px-2 cursor-pointer'>
                            <span className='font-semibold'>$</span>
                            <span className='pl-2'>USD - U.S. Dollar</span>
                        </a>
                    </div>
                    <div className='hover:border-gray-300 border border-solid border-gray-400 rounded-[4px] mr-2'>
                        <a className='flex items-center py-[0.4rem] px-2 cursor-pointer'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                </svg>
                            </span>
                            <span className='pl-2'>United States</span>

                        </a>
                    </div >
                </div>

            </div>
            <div className='flex flex-1 flex-col justify-center text-center whitespace-nowrap bg-[#131A22] max-w-full pt-[15px] pb-[30px] text-[#DDD] text-[0.7rem] h-full font-semibold'>
                <ul className='flex flex-wrap  justify-center'>
                    <li><a href="#" className='hover:underline no-underline inline ml-[18px]'>Lorem</a></li>
                    <li><a href="#" className='hover:underline no-underline inline ml-[18px]'>Ipsum</a></li>
                    <li><a href="#" className='hover:underline no-underline inline ml-[18px]'>Dolor</a></li>
                </ul>
                <span className='px-[0.6rem]'>Amazon clone made by Łukasz Dytkowski</span>
            </div>
        </footer>
    )
}