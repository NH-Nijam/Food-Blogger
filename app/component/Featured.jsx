import Image from 'next/image';
import React from 'react';
import img1 from '../img/i1.png'
import img2 from '../img/i2.png'
import img3 from '../img/i3.png'
import img4 from '../img/i4.png'
import img5 from '../img/i5.png'
import {motion} from 'framer-motion'
import "swiper/css";
const Featured = () => {
    return (
        <div className='z-0 lg:px-5 px-2'>
            <div className='container text-center mt-32'>
                <h3 className='text-lg font-serif tracking-[2px]'>WHERE WE’VE BEEN FEATURED</h3>
                <marquee behavior="" direction="" className=' mt-10 shadow-lg bg-white'>
                    <div className='flex h-[200px] '>
                        <Image className='border' src={img1} alt='' />
                        <Image className='border' src={img2} alt='' />
                        <Image className='border' src={img3} alt='' />
                        <Image className='border' src={img4} alt='' />
                        <Image className='border' src={img5} alt='' />
                        <Image className='border' src={img1} alt='' />
                        <Image className='border' src={img2} alt='' />
                        <Image className='border' src={img3} alt='' />
                        <Image className='border' src={img4} alt='' />
                        <Image className='border' src={img5} alt='' />
                        <Image className='border' src={img1} alt='' />
                        <Image className='border' src={img2} alt='' />
                        <Image className='border' src={img3} alt='' />
                        <Image className='border' src={img4} alt='' />
                        <Image className='border' src={img5} alt='' />
                        <Image className='border' src={img1} alt='' />
                        <Image className='border' src={img2} alt='' />
                        <Image className='border' src={img3} alt='' />
                        <Image className='border' src={img4} alt='' />
                        <Image className='border' src={img5} alt='' />
                        <Image className='border' src={img1} alt='' />
                        <Image className='border' src={img2} alt='' />
                        <Image className='border' src={img3} alt='' />
                        <Image className='border' src={img4} alt='' />
                        <Image className='border' src={img5} alt='' />
                    </div>
                </marquee>
            </div>
        </div>
    );
};

export default Featured;