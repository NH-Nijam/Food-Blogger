'use client'
import React, { useContext } from 'react';
import Datelis from './Datelis';
import { foodContext} from '../Layout/Layout';

const page = () => {
    const [food, setFood] = useContext(foodContext)
   
    return (
        <div className='container'>
            <div className='lg:px-48 my-10'>
                <h3 className='text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 w-20 font-semibold'>Food</h3>
                <hr className=' border-gray-400 mt-10'/>
                <div className='my-8 flex flex-col gap-8'>
                    {
                        food.map(f => <Datelis
                            key={f.id}
                            f={f}
                        ></Datelis>)
                    }
                </div>
            </div>
        </div>
    );
};

export default page;