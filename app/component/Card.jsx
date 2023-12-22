'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { handlerContext, signInContext } from '../Layout/Layout';

const Card = ({ d }) => {
    const handlers = useContext(handlerContext)
    const {handler} =handlers;
    const [signIn] =useContext(signInContext)
    return (
        <div className='border shadow-lg rounded-lg hover:relative cursor-pointer bg-white hover:scale-110 duration-700' >
            <Link href={signIn? "/DETAILS": "/SIGNIN"}>
            <Image 
            src={d?.img} 
            alt="img" 
            width={1000}
            height={1000}     
            className='w-full h-[250px] rounded-tr-lg rounded-ss-lg'
            onClick={() => handler(d.id)}
            />
            </Link>
            <div className='px-5 mt-10 mb-20'>
                <li className='list-none mt-5 mb-3'>
                    <Link href={d?.link} className='underline hover:text-[#D7A767] tracking-[2px] text-base'>{d?.categoy}</Link>
                </li>
                <h1 className='text-2xl line-clamp-1'>{d?.title}</h1>
                <p className='text-gray-500 my-5 line-clamp-2'>{d?.description}</p>
            </div>
        </div>
    );
};

export default Card;