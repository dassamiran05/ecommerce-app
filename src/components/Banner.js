import React from 'react';
import bannerOne from '../assets/images/banner-1.jpg';
import bannerTwo from '../assets/images/banner-2.jpg';
import bannerThree from '../assets/images/banner-3.jpg';
import bannerFour from '../assets/images/banner-4.jpg';
import bannerFive from '../assets/images/banner-5.jpg';

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 xs:grid-cols-1 flex items-center gap-2'>
            <div className='grid grid-cols-1 relative'>
                <div className="lg:h-[550px] sm:h-[550px] xs:h-auto">   
                    <img src={bannerOne} alt="" className="w-full h-full object-cover "/>
                </div>
                <div className='absolute left-8 top-[50%] -translate-y-1/2'>
                    <h5 className='text-3xl font-logoFont'>Woman's fashion</h5>
                    <p className='my-3 text-sm font-titleFont text-black-500'>Lorem Ipsum is simply dummy text of the printing and<br />printing and typesetting industry. </p>
                    <span className='text-xl text-black-700 font-titleFont font-bold shop-now relative cursor-pointer'>Shop now</span>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="lg:h-[550px] sm:h-[550px] xs:h-auto">
                    <div className="h-full grid grid-cols-2 gap-2">
                            <div className='relative'>
                                <img src={bannerTwo} alt="" className="w-full h-full object-cover"/>
                                <div className='absolute left-8 top-[50%] -translate-y-1/2'>
                                    <h5 className='text-xl font-titleFont font-semibold'>Man's fashion</h5>
                                    <p className='my-1 text-sm font-titleFont text-black-500'>230 items</p>
                                    <span className='text-xl text-black-700 font-titleFont font-bold shop-now relative cursor-pointer'>Shop now</span>
                                </div>
                            </div>
                        
                        <div className='relative'>
                            <img src={bannerThree} alt="" className="w-full h-full object-cover"/> 
                            <div className='absolute left-8 top-[50%] -translate-y-1/2'>
                                    <h5 className='text-xl font-titleFont font-semibold'>Kid's fashion</h5>
                                    <p className='my-1 text-sm font-titleFont text-black-500'>120 items</p>
                                    <span className='text-xl text-black-700 font-titleFont font-bold shop-now relative cursor-pointer'>Shop now</span>
                                </div>
                        </div>
                        <div className='relative'>
                            <img src={bannerFour} alt="" className="w-full h-full object-cover"/>
                            <div className='absolute left-8 top-[50%] -translate-y-1/2'>
                                    <h5 className='text-xl font-titleFont font-semibold'>Cosmetics</h5>
                                    <p className='my-1 text-sm font-titleFont text-black-500'>500 items</p>
                                    <span className='text-xl text-black-700 font-titleFont font-bold shop-now relative cursor-pointer'>Shop now</span>
                                </div>
                        </div>
                        <div className='relative'>
                            <img src={bannerFive} alt="" className="w-full h-full object-cover"/>
                            <div className='absolute left-8 top-[50%] -translate-y-1/2'>
                                    <h5 className='text-xl font-titleFont font-semibold'>Accessories</h5>
                                    <p className='my-1 text-sm font-titleFont text-black-500'>300 items</p>
                                    <span className='text-xl text-black-700 font-titleFont font-bold shop-now relative cursor-pointer'>Shop now</span>
                                </div> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;