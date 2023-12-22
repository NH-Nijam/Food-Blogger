'use client'
import React, { useContext} from "react";
import { DetailsContext } from "../Layout/Layout";
import Image from "next/image";

const page = () => {
    const [details, setDetails] = useContext(DetailsContext)
    
    return (
        <div className='container my-20'>
            <div className="lg:p-20 p-5 bg-white ">
                <Image
                    src={details?.img}
                    width={500}
                    height={500}
                    alt="this is food image"
                    className="w-full"
                />
                <h1 className='text-3xl line-clamp-1 text-[#585756] my-5'>{details?.title}</h1>
                <p className='text-[#E2AE67] text-base my-3'>
                    <span>Leave a Comment</span> /
                    <span>Food</span>
                </p>
                <p className='text-gray-700 '>{details?.description}</p>
            </div>
            
            {/* comment start  */}
            <div className="lg:p-20 p-5 bg-white mt-10">
                <h2 className="font-serif text-xl mb-2">Leave a Comment</h2>
                <p className="text-gray-700 mb-5">Your email address will not be published. Required fields are marked *</p>
                <div className="border bg-[#F3F6F3] h-[300px]">
                    <textarea name="" id=""  placeholder="Type here.." className="bg-transparent p-4  w-full outline-2 outline-none h-full  "></textarea>
                </div>
                <div className="mt-10 grid lg:grid-cols-3  gap-10">
                    <input type="text" name="name" placeholder="Name*" className="border bg-[#F3F6F3] p-2 w-full outline-none" required/>
                    <input type="email" name="email" placeholder="Email*" className="border bg-[#F3F6F3] p-2 w-full outline-none " required/>
                    <input type="text" name="website" placeholder="Website*" className="border bg-[#F3F6F3] p-2 w-full outline-none" required/>
                </div>
                <div className="flex items-center gap-4 my-10 ">
                    <input type="checkbox" />
                    <p className="text-gray-700 text-xs">Save my name, email, and website in this browser for the next time I comment.</p>
                </div>
                <button type="submit" className="text-white bg-[#E2AE67] hover:bg-green-600 hover:scale-110 duration-700 px-4 py-3 rounded">POST COMMENT </button>
            </div>
            {/* comment end  */}
        </div>
    );
};

export default page;