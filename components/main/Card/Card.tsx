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
        <div className='h-[420px] min-w-[280px] flex-grow flex-shrink-0 basis-[340px] lg:basis-[310px] pl-4 mb-4 mt-[12px]' key={product.id}>
            <div className='relative bg-white h-full w-full overflow-hidden pt-[15px] flex pb-[15px] flex-col rounded-md [box-shadow:0_0_3px_#ccc] transition-transform ease-in  duration-100 hover:scale-105 mx-auto lg:mx-5'>
                <div className='text-black font-bold mx-6 mb-4'>
                    <h2 className='hover:overflow-auto  hover:line-clamp-none max-h-[3.7rem] lg:max-h-[3.3rem] text-[1.5rem] lg:text-[1.3rem] leading-[1.2] text-ellipsis whitespace-normal line-clamp-2'>{product.title}</h2>
                </div>
                <div className='flex justify-center'>
                    <div className='px-[20px] max-h-[300px]'>
                        <Link href='/'>
                            <Image
                                alt="product image"
                                className='max-h-[250px] w-auto h-auto max-w-full object-fill rounded-[4px]'
                                src={product.img}
                                width={310}
                                height={300}
                                priority={true}
                            >
                            </Image>
                        </Link>
                    </div>
                </div>
                <div className='flex w-full pt-1 mt-[-0.3rem]'>
                    <RatingStars rating={product.rating} />
                </div>
                <div className="flex items-center justify-between absolute bottom-0 mb-2 w-full px-2">
                    <div className='flex items-center text-black ml-2 '>
                        <span className='text-[1.9rem] lg:text-[1.4rem] relative  top-0'>$</span>
                        <span className='text-[2.5rem] lg:text-[2rem]  font-bold'>{newPrice[0]}</span>
                        <span className='text-[1.5rem] lg:text-[1rem] relative  top-[-0.3rem] ml-[0.2rem]'>{newPrice[1]}</span>
                    </div>

                    <AddToCartButton product={product} />
                
                </div>

            </div>
        </div>
    )
}