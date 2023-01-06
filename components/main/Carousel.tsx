
import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay} from "swiper";
import Image from 'next/image'

export default function SliderComponent() {
    return (
        <>
            
                <Swiper
                    navigation={false}
                    modules={[Autoplay]}
                    loop={true}
                    preventClicks={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="select-none mb-[-5.1rem] lg:mb-[-350px]"
                    
                >
                    <SwiperSlide>
                        <Image
                            className='object-fill  w-full h-full  [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0))]'
                            alt="carousel-img"
                            src={'https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg'}
                            width={1500}
                            height={600}
                            priority={true}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            className='object-fill w-full h-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0))]'
                            alt="carousel-img"
                            src={'https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg'}
                            width={1500}
                            height={600}
                            priority={true}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            className='object-fill w-full h-full   [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0))]'
                            alt="carousel-img"
                            src={'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg'}
                            width={1500}
                            height={600}
                            priority={true}
                        />
                    </SwiperSlide>
                </Swiper>
                
         
        </>
    );
}