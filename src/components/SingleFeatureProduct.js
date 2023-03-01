import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const SingleFeatureProduct = ({product}) => {

    const {image, title, price} = product;
    return (
        <div className='flex gap-9 items-center'>
            <div className="w-[100px] h-[100px] border-[1px] border-gray-400 p-1">
                <img src={image} alt={title} className="w-full h-full object-contain"/>
            </div>
            <div className='flex flex-col'>
                <span className='font-titleFont tracking-wide text-md text-black-300 font-normal mt-3 content-start'>{title?.substring(0,20)}...</span>
                <div className="flex mt-0 mb-2 content-start">
                    <div className='text-yellow-500'>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                    </div>
                </div>
                <p className='text-lg text-black-800 font-semibold'>$ {price}</p>
            </div>
        </div>
    );
};

export default SingleFeatureProduct;