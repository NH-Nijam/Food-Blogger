'use client'
import Link from 'next/link';
import React, { useContext } from 'react';
import { handlerContext, signInContext } from '../Layout/Layout';

const ResCard = ({ rest }) => {
    const { title, date, id, img } = rest;
    const handlers = useContext(handlerContext)
    const {handler} =handlers;
    const [signIn] =useContext(signInContext);
    return (
        <Link href={signIn? "/DETAILS": "/SIGNIN"}>
            <div 
            onClick={() => handler(id)}
            className='h-[500px] w-full border overflow-hidden rounded-md shadow-lg cursor-pointer'>
                <div style={{ backgroundImage: `url(${img})` }} className=' w-full
             h-[500px] transition duration-700 hover:scale-110 bg-cover  '>
                    <div className='w-full h-[500px] border flex flex-col items-center justify-center pt-60 text-white bg-black/40 hover:bg-black/60 duration-700 '>
                        <h4 className='tracking-[2px] text-xs'>BEST RESTAURANTS</h4>
                        <h2 className='font-semibold text-4xl my-3 font-serif line-clamp-1'>{title}</h2>
                        <h5 className='font-bold tracking-[2px] text-xs'>{date}</h5>
                    </div>
                </div>

            </div>
        </Link>


    );
};

export default ResCard;