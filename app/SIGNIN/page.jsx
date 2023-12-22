'use client'
import React, { useContext, useState } from 'react';
import login from '../img/login.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { handlerContext } from '../Layout/Layout';
import { MdOutgoingMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const page = () => {
    const handlers = useContext(handlerContext)
    const { googleSigninHandler, FacebookSigninHandler, GithubSigninHandler } = handlers;

    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({

    })


    const handleChange = (e) => {
        let name = e.target.name, value = e.target.name;
        setValue(preState => ({
            ...preState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if (!value.email) {
            setError((preError) => ({
                ...preError,
                email: "Please input your email!",
                password: "Please input your password!"

            }))
        }


        fetch("http://localhost:3000/api", {
            method: 'POST',
            body: JSON.stringify({
                message: "Nijam"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        console.log({ value });
    }

    return (
        <div className="w-screen h-screen relative ">
            <Image src={login} width={500} height={500} alt='This is food image' className='w-full h-full absolute' />
            <div className='relative bg-black/70 w-full h-full flex justify-center items-center '>
                <div className='relative md:w-[500px] w-full bg-white duration-500  shadow-lg hover:shadow-blue-600 p-10 rounded-lg'>
                    <h2 className='font-bold text-5xl text-center border-b-4 border-gray-700 pb-10 '>Login</h2>
                    <form onSubmit={handleSubmit} action="" className=' mt-5 flex justify-center flex-col relative'>
                        <div className='mb-5 flex gap-2 flex-col'>
                            <label htmlFor="Useremail" className='flex items-center gap-2'><MdOutgoingMail size={30} />  Useremail</label>
                            <input
                                name='email'
                                onChange={handleChange}
                                type="text" placeholder='Type email' className=' px-5 py-2 rounded-full outline-none font-semibold' />
                            <div className='border-b border-gray-700'></div>
                            {error.email && <p className=' text-red-800'>{error.email}</p>}
                        </div>
                        
                        <div className='mb-1 flex gap-2 flex-col'>
                            <label htmlFor="password " className='flex items-center gap-2'><FaLock size={20} />  Password</label>
                            <input
                                name='password'
                                onChange={handleChange}
                                type="password" placeholder='Type password' className='bg-transparent px-5 py-2 rounded-full outline-none  font-semibold' />
                            <div className='border-b border-gray-700'></div>
                            {error.password && <p className=' text-red-800'>{error.password}</p>}
                        </div>
                        
                        <div className='flex justify-between items-center mt-2'>
                            <div className='flex gap-4'>
                                <input type="checkbox" required/>
                                <h3>Remember Me</h3>
                            </div>
                            <h3 className='text-right hover:underline hover:text-blue-800'><Link href='#'>Forget Password </Link> </h3>
                        </div>

                        <button
                            type='submit' className='mt-5 w-full border mx-auto bg-blue-600 hover:scale-110 duration-500  px-7 py-2 rounded shadow-md text-white text-xl'>
                            Login
                        </button>
                    </form>
                    <p className='my-5 text-center'>-OR-</p>
                    <div className=' md:flex gap-5  relative'>
                        <button
                            onClick={googleSigninHandler}
                            type='button' className='mt-5 w-full border mx-auto bg-orange-900  hover:scale-110 duration-500  px-7 py-2 rounded-md shadow-md text-white text-xl'>
                            Google
                        </button>
                        <button
                            onClick={FacebookSigninHandler}
                            type='button' className='mt-5 w-full border mx-auto bg-blue-900  hover:scale-110 duration-500  px-7 py-2 rounded-md shadow-md text-white text-xl'>
                            Facebook
                        </button>
                        <button
                            onClick={GithubSigninHandler}
                            type='button' className='mt-5 w-full border mx-auto bg-red-900  hover:scale-110 duration-500  px-7 py-2 rounded-md shadow-md text-white text-xl'>
                            GithHub
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default page;