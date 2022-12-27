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
        
        <div className='h-[25rem] lg:h-[420px] min-w-[370px] lg:min-w-[300px] flex-1 lg:basis-[310px] pl-0 lg:mx-2 mb-4 mt-[12px]' key={product.id}>
            <div className='relative bg-white h-full w-full overflow-hidden pt-[15px] flex pb-[15px] flex-col rounded-none lg:rounded-md [box-shadow:0_0_3px_#ccc] transition-transform ease-in  duration-100 lg:hover:scale-105 mx-auto lg:mx-5'>
                <div className='text-black font-bold mx-6 mb-4'>
                    <h2 className='hover:overflow-auto w-full hover:line-clamp-none max-h-[6rem] lg:max-h-[3.3rem] text-[1.5rem] lg:text-[1.3rem] leading-[1.2] text-ellipsis whitespace-normal line-clamp-2'>{product.title}</h2>
                </div>
                <div className='flex justify-center'>
                    <div className='px-[20px] max-h-[300px]'>
                        <Link href='/' className='w-[18rem] h-[18rem]'>
                            <Image
                                alt="product image"
                                className='w-[92%] h-[90%] rounded-[4px] block'
                                src={product.img}
                                width={310}
                                height={368}
                                priority={true}
                            >
                            </Image>
                        </Link>
                    </div>
                </div>
                 {/* <div className='flex w-full pt-1 mt-0 lg:mt-[-0.3rem]'>
                    <RatingStars rating={product.rating} />
                </div>  */}
                <div className="flex items-center justify-between absolute bottom-0 mb-0 lg:mb-2 w-full px-2">
                    <div className='flex items-center text-black ml-2 w-[7rem] overflow-hidden'>
                        <span className='text-[1.5rem] lg:text-[1.4rem] relative  top-0'>$</span>
                        <span className='text-[2.1rem] lg:text-[2rem]  font-bold'>{newPrice[0]}</span>
                        <span className='text-[1.1rem] lg:text-[1rem] relative  top-[-0.3rem] ml-[0.2rem]'>{newPrice[1]}</span>
                    </div>

                    <AddToCartButton product={product} key={product.title} />
                
                </div>

            </div>
        </div>
    )
}