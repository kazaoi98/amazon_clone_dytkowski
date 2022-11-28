import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import RatingStars from '../Misc/RatingStars'
import AddToCartButton from './AddToCartButton'

export type ProductTypes = {
    product: {
        id: number
        price: string
        img: string
        title: string
        rating: number
    }
}

export default function ({ product }: ProductTypes) {
    const newPrice = product.price.split(".")

    return (
        <div className='max-w-[500px] md:max-w-[360px] h-[420px] min-h-[420px] min-w-[280px] flex-grow flex-shrink-0 basis-[100px] lg:basis-[310px] px-[10px] mb-4 mt-[12px]' key={product.id}>
            <div className='bg-white h-full w-full relative mb-0 mt-0 overflow-hidden pt-[20px] flex pb-[15px] flex-col rounded-md [box-shadow:0_0_3px_#ccc] transition-transform ease-in  duration-100 hover:scale-105 mx-auto lg:mx-5'>
                <div className='text-black font-bold mx-6 mb-4'>
                    <h2 className='hover:overflow-auto hover:line-clamp-none max-h-14 text-[1.3rem] leading-[1.2] text-ellipsis whitespace-normal line-clamp-2'>{product.title}</h2>
                </div>
                <div className='flex-grow h-[300px] w-[310px] px-[20px] max-h-[300px] mb-[-3rem] flex-shrink-0 '>
                    <Link href='/'>
                        <Image
                            alt="product image"
                            className='max-h-[250px] max-w-full '
                            src={product.img}
                            width={310}
                            height={300}
                        >

                        </Image>
                    </Link>
                </div>

                <RatingStars rating={product.rating} />

                <div className="flex flex-grow mx-4 items-center">
                    <a className='flex items-center text-black ml-2' href='#'>
                        <span className='md:text-[1.4rem] relative text-[1.1rem] top-0'>$</span>
                        <span className='md:text-[2rem] text-[1.6rem] font-bold'>{newPrice[0]}</span>
                        <span className='md:text-[1rem] relative text-[1.2rem] top-[-0.1em]'>{newPrice[1]}</span>
                    </a>
                    <Link href={'#'} className='flex flex-grow mx-4'>
                        <div className='bg-yellow-400 max-h-[3rem] hover:bg-yellow-500 flex items-center  px-2 py-0 lg:py-2  rounded-lg mr-0 ml-auto flex-shrink-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                            <AddToCartButton product={product} />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}