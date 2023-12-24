'use client'
import React, { useContext, useState } from 'react';
import login from '../img/login.jpg'
import Image from 'next/image';
// import { handlerContext } from '../Layout/Layout';
import { MdOutgoingMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Link from 'next/link';
import { handlerContext } from '../Layout/Layout';
const page = () => {
    const handlers = useContext(handlerContext)
    const {onSubmitSignUp} = handlers;
   

    return (
        <div className="w-screen h-screen relative ">
            <Image src={login} width={500} height={500} alt='This is food image' className='w-full h-full absolute' />
            <div className='relative bg-black/70 w-full h-full flex justify-center items-center '>
                <div className='relative md:w-[500px] w-full bg-white duration-500  shadow-lg hover:shadow-blue-600 p-10 rounded-lg'>
                    <h2 className='font-bold text-5xl text-center border-b-4 border-gray-700 pb-10 '>Sign Up</h2>
                    <form onSubmit={onSubmitSignUp} action="" className=' mt-5 flex justify-center flex-col relative'>
                        <div className='mb-5 flex gap-2 flex-col'>
                            <label htmlFor="Useremail" className='flex items-center gap-2'><MdOutgoingMail size={30} /> Input Your Email </label>
                            <input
                            // onChange={onchangeHandle}
                                name='email'
                                type="email" placeholder='Type email' className=' px-5 py-2 rounded-full outline-none font-semibold' required />
                            <div className='border-b border-gray-700'></div>
                           
                        </div>

                        <div className='mb-1 flex gap-2 flex-col'>
                            <label htmlFor="password " className='flex items-center gap-2'><FaLock size={20} />  Input Your Password</label>
                            <input
                                name='password'
                                type="password" placeholder='Type password' className='bg-transparent px-5 py-2 rounded-full outline-none  font-semibold' required/>
                            <div className='border-b border-gray-700'></div>
                           
                        </div>

                        <div className='flex justify-between items-center mt-2'>
                            <div className='flex gap-4'>
                                <input type="checkbox" />
                                <h3>Remember Me</h3>
                            </div>
                            
                        </div>

                        <button
                            type='submit' className='mt-5 w-full border mx-auto bg-blue-600 hover:scale-110 duration-500  px-7 py-2 rounded shadow-md text-white text-xl'>
                            SignUp
                        </button>
                    </form>
                    <h2 className='mt-10 text-center '>Already haev a account? <Link href='/SIGNIN' className='underline text-blue-800'>Login here.</Link></h2>

                </div>
            </div>
        </div>
    );
};

export default page;