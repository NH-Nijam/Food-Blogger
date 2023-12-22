'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../img/Logo.png'
import { usePathname } from 'next/navigation';
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    const pathName = usePathname()
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
        },
        {
            name: 'WORK WITH ME',
            link: '/WORK-WITH-ME'
        },
    ]
    return (
        <footer className='bg-[#000000] lg:h-[500px] pt-[50px] flex items-center w-full px-2 lg:px-0 text-white z-0 '>
            <div className='container '>
                <div className='flex justify-center'>
                    <Link className='flex flex-col  items-center gap-2' href='/'>
                        <Image src={logo} alt='This is a Logo' width={100} />
                        <h2 className=' text-gray-200'>Food & Drink Blogger</h2>
                    </Link>
                </div>
                {/* lgo end */}
                {/* menu start */}
                <div className='flex lg:gap-10 flex-col lg:flex-row gap-5  text-white my-20 text-center justify-center'>
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
                </div>
                <div className=' text-white flex gap-5 justify-center'>

                    <Link href='https://www.youtube.com/' target='blank'><IoLogoYoutube size={25} /></Link>
                    <Link href='https://www.facebook.com/profile.php?id=100009625237790' target='blank'><FaFacebook size={25} /></Link>
                    <Link href='https://www.instagram.com/' target='blank'><FaInstagram size={25} /></Link>
                    <Link href='https://twitter.com/?lang=en' target='blank'><FaTwitter size={25} /></Link>
                </div>
                <p className='text-center mt-8 text-sm'>Copyright © 2023 Food & Drinks Blogger | Powered by Food & Drinks Blogger</p>
            </div>
        </footer>
    );
};

export default Footer;