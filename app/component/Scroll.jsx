'use client'
import React, { useEffect, useState } from 'react';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
const Scroll = () => {
   
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      }, []);
    return (
        <div className='z-[5px]' >
            <button  onClick={()=>{ window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className='fixed p-1px rounded bottom-3 hover:scale-125  shadow-2xl shadow-gray-600 right-5 bg-blue-600 text-center hover:bg-orange-600 duration-700'>
            <MdOutlineKeyboardArrowUp size={40} color='white'/>
            </button>
        </div>
    );
};

export default Scroll;