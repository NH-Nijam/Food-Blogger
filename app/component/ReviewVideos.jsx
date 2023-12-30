'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rate } from 'antd';
const ReviewVideos = () => {
    return (
        <div className='px-3 mb-32'>
            <div className='text-center mb-20'>
                <h3 className='text-lg font-serif tracking-[2px] mb-5'>FEATURED REVIEW VIDEOS</h3>
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br /> do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className='lg:flex hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    className="flex gap-5"
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024:{
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1440:{
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/FVvUiMTYXJA?si=_r8J2u-0c1SFFYQ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={4} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/Ak34skdOeNI?si=clxja0Z5bwzIlIdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/CMN7Dfmh-yM?si=kQ1QaZZSizYDPId5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={3.5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/phnS0X7Trgo?si=7HZWdyR0j7pgR3cN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/FVvUiMTYXJA?si=_r8J2u-0c1SFFYQ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={4} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/Ak34skdOeNI?si=clxja0Z5bwzIlIdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/CMN7Dfmh-yM?si=kQ1QaZZSizYDPId5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={3.5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/phnS0X7Trgo?si=7HZWdyR0j7pgR3cN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/FVvUiMTYXJA?si=_r8J2u-0c1SFFYQ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={4} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/Ak34skdOeNI?si=clxja0Z5bwzIlIdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/CMN7Dfmh-yM?si=kQ1QaZZSizYDPId5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={3.5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center'>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/phnS0X7Trgo?si=7HZWdyR0j7pgR3cN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='my-5 px-5 line-clamp-2 text-center'>
                                <h2 className=' text-3xl mb-5'>The Perfect Summer Fruit Salad For your <br /> Energy</h2>
                            </div>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>


        </div>
    );
};

export default ReviewVideos;