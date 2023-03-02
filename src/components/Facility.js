import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SupportIcon from '@mui/icons-material/Support';
import PaymentsIcon from '@mui/icons-material/Payments';

const Facility = () => {
    return (
        <div className='py-9 px-3'>
            <div className='max-w-screen-xl mx-auto sm:px-4'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <div className='flex items-center gap-5'>
                        <div>
                            <LocalShippingIcon fontSize="large" style={{color: "red"}}/>
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <span className='text-md font-titleFont font-semibold text-black-500'>Free Shipping</span>
                            <span className='text-sm text-gray-500 font-titleFont'>For all order over $99</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <LocalAtmIcon fontSize="large" style={{color: "red"}}/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-md font-titleFont font-semibold text-black-500'>Money back garuntee</span>
                            <span className='text-sm text-gray-500 font-titleFont'>If Good have problems</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <SupportIcon fontSize="large" style={{color: "red"}}/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-md font-titleFont font-semibold text-black-500'>Online Support 24/7</span>
                            <span className='text-sm text-gray-500 font-titleFont'>Dedicated support</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <PaymentsIcon fontSize="large" style={{color: "red"}}/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-md font-titleFont font-semibold text-black-500'>Payment secure</span>
                            <span className='text-sm text-gray-500 font-titleFont'>100% secure payment</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Facility;