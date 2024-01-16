'use client'
import Image from 'next/image';
import logo from '../img/Logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion'
import { handlerContext, signInContext } from '../Layout/Layout';
import { Tooltip } from 'antd';
const Navbar = () => {
    const pathName = usePathname()
    const [show, setShow] = useState(false)
    const [signIn, setSignIn] = useContext(signInContext)
    const handlers = useContext(handlerContext);
    const { googleSignOutHandler } = handlers;
    const handler = () => {
        setShow(!show)
    }
    const navLink = [
        {
            name: 'HOME',
            link: '/'
        },
        {
            name: 'FOOD',
            link: '/FOOD'
        },
        {
            name: 'DRINK',
            link: '/DRINK'
        },
        {
            name: 'BEST RESTAURANTS',
            link: '/BEST-RESTAURANTS'
        },
        {
            name: 'ABOUT',
            link: '/ABOUT'
        }
    ]
    return (
        <header className='bg-[#F3F6F3] opacity-90 px-2 lg:px-0 z-10 border-b sticky top-0 sticky-green-600'>
            <nav className='h-20 container flex items-center justify-between  '>

                {/* lgo start */}
                <div>
                    <Link href='/'>
                        <Image src={logo} alt='This is a Logo' width={50} />
                    </Link>
                </div>
                {/* lgo end */}

                {/* large device menu start */}
                <div className='lg:flex lg:gap-10 hidden lg:items-center'>
                    {
                        navLink.map(({ link, name }) => (
                            <Link
                                key={name}
                                href={link}
                                className={`${pathName === link ? ' text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 ' : ''} nav  text-xs duration-500 2xl:text-base`}
                            >
                                {name}
                            </Link>
                        ))
                    }
                    {
                        signIn?.uid ?
                            <Tooltip trigger={['click']} title={<div className='p-5 cursor-pointer'>
                                <h1 className='text-center underline text-2xl'>Account</h1>
                                <div className='mt-5'>
                                    <h2> {signIn?.displayName}</h2>
                                    <h2> {signIn?.email}</h2>
                                    <button onClick={googleSignOutHandler} className='hover:underline mt-5 bg-[#512DA9] px-3 py-1'>Sign Out</button>
                                </div>
                            </div>}>
                                {
                                    signIn?.photoURL ? <div className='border rounded-full w-[45px] h-[45px] overflow-hidden'>
                                        <Image src={signIn.photoURL} width={500} height={500} alt='profile image'
                                            className='w-full' />
                                    </div> : <h2 className='font-semibold cursor-pointer '>My Profile <span className='nav'>&#11206;</span></h2>
                                }

                            </Tooltip>

                            :
                            <div className='flex gap-10 '>
                                <Link className={`${pathName === '/SIGNIN' ? ' text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 ' : ''} nav  text-xs duration-500 2xl:text-base`} href='/SIGNIN' >SIGN IN</Link>
                                <Link className={`${pathName === '/SIGNUP' ? ' text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 ' : ''} nav  text-xs duration-500 2xl:text-base`} href='/SIGNUP'>SIGN UP</Link>
                            </div>

                    }
                </div>
                {/*large device menu end */}

                {/* small device menu start */}
                <div className='flex gap-8'>
                    <div>{
                        signIn?.uid ? <Tooltip trigger={'click'} className='' title={<div className='p-5 cursor-pointer lg:hidden '>
                            <h1 className='text-center underline text-2xl'>Account</h1>
                            <div className='mt-5'>
                                <h2> {signIn?.displayName}</h2>
                                <h2> {signIn?.email}</h2>
                                <button onClick={googleSignOutHandler} className='hover:underline mt-5 bg-[#512DA9] px-3 py-1'>Sign Out</button>
                            </div>
                        </div>}>
                            {
                                signIn?.photoURL ? <div className='border rounded-full w-[45px] h-[45px] overflow-hidden'>
                                    <Image src={signIn.photoURL} width={500} height={500} alt='profile image'
                                        className='w-full' />
                                </div> : <h2 className='font-semibold cursor-pointer '>My Profile <span className='nav'>&#11206;</span></h2>
                            }

                        </Tooltip> : ''
                    }
                    </div>
                    <div onClick={handler} className='lg:hidden cursor-pointer flex gap-5 items-center'>

                        <FaBars size={30} />
                        <div className={
                            show ? 'fixed left-0 top-0  w-[100%] h-screen bg-[#FBF9F7] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 h-screen  ease-out md:duration-300 duration-500'
                        }>
                            <div onClick={handler} className='cursor-pointer'>
                                <IoCloseSharp size={40} />
                                <div className='flex flex-col gap-5 text-center '>
                                    {
                                        navLink.map(({ link, name }) => (
                                            <Link
                                                key={name}
                                                href={link}
                                                className={`${pathName === link ? ' text-[#D7A767]' : ''} nav hover:text-[#D7A767] duration-500`}
                                            >
                                                {name}
                                            </Link>
                                        ))
                                    }

                                    {
                                        signIn?.uid ? '' : <div className='flex flex-col gap-5 '>
                                            <Link className={`${pathName === '/SIGNIN' ? ' text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 ' : ''} nav  duration-500 2xl:text-base`} href='/SIGNIN' >SIGN IN</Link>
                                            <Link className={`${pathName === '/SIGNUP' ? ' text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 ' : ''} nav  duration-500 2xl:text-base`} href='/SIGNUP'>SIGN UP</Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* small device menu end */}
            </nav >
        </header >
    );
};

export default Navbar;