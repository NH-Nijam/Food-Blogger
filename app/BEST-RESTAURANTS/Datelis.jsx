import Image from 'next/image';
import React, { useContext } from 'react';
import { handlerContext, signInContext } from '../Layout/Layout'
import Link from 'next/link';
const Datelis = ({ r }) => {
    const { img, title, id, description } = r;
    const handlers = useContext(handlerContext)
    const {handler} =handlers;
    const [signIn, setSignIn] =useContext(signInContext);
    return (
        
            <div>
                <Link href={signIn? "/DETAILS": "/SIGNIN"}>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt='food'
                    className='w-full lg:h-[600px]'
                    onClick={() => handler(id)}
                />
                </Link>
                <div className='mt-5'>
                    <h1 className='text-3xl line-clamp-1 text-[#585756]'>{title}</h1>
                    <p className='text-[#E2AE67] text-base my-3'>
                        <span>Leave a Comment</span> /
                        <span>Food</span>
                    </p>
                    <p className='text-gray-700 line-clamp-2'>{description}</p>
                </div>
                <hr className=' border-gray-400 mt-10' />
            </div>
    );
};

export default Datelis;