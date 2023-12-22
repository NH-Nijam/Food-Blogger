'use client'
import React from 'react';
import ResCard from './ResCard';

const Resturent = ({resturents}) => {
    return (
        <div className='text-center container my-32 '>
            <h3 className='text-lg font-serif tracking-[2px] mb-10'>BEST RESTAURANTS TO VISIT</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    resturents.map(rest =><ResCard
                    key={rest.id}
                    rest ={rest}
                    ></ResCard>)
                }
            </div>
        </div>
    );
};

export default Resturent;