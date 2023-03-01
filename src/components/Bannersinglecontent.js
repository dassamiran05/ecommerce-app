import React from 'react';

const Bannersinglecontent = ({info}) => {
    return (
        <div className="h-[500px] w-full relative">
            <img src={info.img} alt={info.title}  className="h-full w-full object-cover"/>
            <div className="absolute z-50 left-[50%] top-[50%] flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 gap-4">
                <span className="text-red-500 uppercase text-2xl font-titleFont text-center">{info.minititle}</span>
                <h3 className="font-logoFont text-5xl font-semibold text-black-500 text-center">{info.title}</h3>
                <span className="text-xl relative cursor-pointer slider-button text-center">Shop now</span>
            </div>
        </div>
    );
};

export default Bannersinglecontent;