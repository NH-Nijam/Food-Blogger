'use client'
import React, { useContext} from 'react';
import Header from './component/Header';
import Featured from './component/Featured';
import Latestblog from './component/Latestblog';
import Resturent from './component/Resturent';
import { foodContext, restureantContext } from './Layout/Layout';
import ReviewVideos from './component/ReviewVideos';

const page = () => {
  const [food] =useContext(foodContext)
  const [resturents] =useContext(restureantContext)
  return (
    <main >    
      <Header/>
      <Featured/>
      <Latestblog food={food} />
      <Resturent resturents ={resturents} />
      <ReviewVideos/>   
    </main>
  );
};

export default page;
