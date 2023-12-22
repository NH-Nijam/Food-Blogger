'use client'
import React from 'react';
import Card from './Card';

const Latestblog = ({food}) => {
    return (
        <div className='container my-32 text-center '>
            <h3 className='text-lg font-serif tracking-[2px] mb-10'>WHERE WE’VE BEEN FEATURED</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10  '>
                {
                    food.map(d => <Card
                    key={d.id}
                    d={d}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Latestblog;