
import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay} from "swiper";

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
                    className="mySwiper select-none mb-[-350px]"
                    
                >
                    <SwiperSlide>
                        <img
                            className="object-fill w-full h-[600px] z-[-1]  [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0))]"
                            src="https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg"
                            alt="image slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full h-[600px] z-[-1] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0))]"
                            src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg"
                            alt="image slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full h-[600px] z-[-1] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0))]"
                            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
                            alt="image slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
         
        </>
    );
}