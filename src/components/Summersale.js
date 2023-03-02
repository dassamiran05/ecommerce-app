import React, {useEffect} from 'react';
import bannerFive from '../assets/images/banner-5.jpg';

const Summersale = () => {

    useEffect(() => {
        const countDown = () => {
            var countDownDate = new Date("Jul 5, 2023 15:37:25").getTime();

            var x = setInterval(function() {

                var now = new Date().getTime();
                    
                
                var distance = countDownDate - now;
                    
                
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                
                document.getElementById("timer").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
                    
                
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("timer").innerHTML = "EXPIRED";
                }
            }, 1000);
        }

        countDown();
    }, []);
    return (
        <div className="max-w-screen-xl mx-auto sm:px-4 mt-3 mb-5">   
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 h-auto'>
                <div className='h-full'>
                    <img src={bannerFive} alt="" className='w-full h-full object-cover'/>
                </div>            
                <div className="h-full sm:h-[350px] bg-[#f4f4f4] flex flex-col items-center justify-center gap-6">
                    <span className='flex flex-col items-center justify-center gap-1 relative summer'>
                        <span className='text-xl font-bodyFont uppercase text-black-500 z-[999]'>Discount</span>
                        <p className='text-5xl font-logoFont text-red-600 z-[999]'>Summer 2019</p>
                        <span className='flex gap-2 items-center z-[999]'><span className='text-md text-black-500 font-semibold uppercase'>sale</span><span className='text-red-600 font-semibold text-md'>50%</span></span>
                    </span>
                    <span id="timer" className='text-4xl font-bodyFont text-black-500'></span>
                    {/* <div className="bg-white w-[200px] h-[200px] rounded-full absolute top-[20%] z-50"></div> */}
                    <span className="text-xl relative cursor-pointer slider-button text-center">Shop now</span>
                </div>            
            </div>
        </div>
    );
};

export default Summersale;