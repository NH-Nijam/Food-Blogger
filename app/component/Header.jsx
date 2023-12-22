'use  client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import bgh from '../img/bgh1.jpg'
import { motion} from "framer-motion"
const Header = () => {
    return (
        <header className='w-full md:h-screen h-[500px]  flex flex-col  items-center relative justify-center '>
            <div className='relative  z-0 lg'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="absolute  "
                >
                    <SwiperSlide className=''>
                        <Image src={bgh} className=' w-full h-[500px] md:h-screen bg-no-repeat bg-cover ' alt='' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src={bgh} className=' w-full h-[500px] md:h-screen bg-no-repeat bg-cover ' alt='' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src={bgh} className=' w-full h-[500px] md:h-screen bg-no-repeat bg-cover ' alt='' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src={bgh} className=' w-full h-[500px] md:h-screen bg-no-repeat bg-cover ' alt='' />
                    </SwiperSlide>
                </Swiper>

            </div>         
            <div   
            className=' absolute shadow-xl shadow-gray-400 rounded-lg z-[1] border bg-white w-11/12 lg:w-[800px] mx-auto md:p-20 py-10  text-center '>
                <h6 
                
                className='lg:text-xs text-[11px] font-serif tracking-[3px] text-[#848684]'>FOOD, DRINK & RESTAURANTS REVIEWS</h6>
                <h2 
               
                className='font-serif lg:text-[45px] text-3xl leading-tight my-5'>Join our 100,000+ Subscribers List Today!</h2>
                <form className='w-full flex flex-col items-center '>
                    <input 
                   type="email" placeholder='Email Address' required className='px-3 py-2 border-2 bg-[#FAFAFA] w-4/6 my-5 rounded-md outline-none' />
                    <button 
                    type='button' className='mt-5  border  bg-gradient-to-r from-blue-600 to-pink-600 hover:scale-125 duration-500  px-7 py-4 rounded shadow-md text-white'>SUBSCRIBE NOW </button>
                </form>
            </div>
        </header>
    );
};

export default Header;