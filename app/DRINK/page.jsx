'use client'
import React, { useContext } from 'react';
import { drinkContext } from '../Layout/Layout';
import Datelis from './Datelis';

const page = () => {
    const [drink, setDrink] =useContext(drinkContext)
    return (
        <div className='container'>
            <div className='lg:px-48 my-10'>
            <h3 className='text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 w-24 font-semibold'>Drink</h3>
                <hr className=' border-gray-400 mt-10'/>
                <div className='my-8 flex flex-col gap-8'>
                    {
                        drink.map(d => <Datelis
                            key={d.id}
                            d={d}
                        ></Datelis>)
                    }
                </div>
            </div>
        </div>
    );
};

export default page;