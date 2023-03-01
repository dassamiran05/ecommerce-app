import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const Product = ({product, handleAddtoCart}) => {
    return (
        <div>
            <div key={product.id} className='bg-[#ebebeb] h-auto py-8 z-30 hover:border-transparent shadow-none         hover:shadow-testShadow duration-200 relative flex flex-col gap-4 group'>
                <div className='w-full  h-auto flex items-center justify-center relative group'>
                        <img
                            className="w-full h-64 object-contain pro-img relative z-50"
                            src={product.image}
                            alt={product.title}
                        />
                </div> 
                {
                    product.stock === 0 && (
                        <>
                            <span className='uppercase bg-[#111] absolute top-[11px] left-[11px] text-sm font-titleFont text-white p-1 font-semibold z-50'>out of stock</span>
                        </>
                    )
                }
                {
                    product.trending && (
                        <>
                            <span className='uppercase bg-[red] absolute top-[11px] left-[11px] text-sm font-titleFont text-white p-1 font-semibold z-50'>Sale</span>
                        </>
                    )
                }
                <button onClick={() => handleAddtoCart(product)} className="w-full py-1.5 absolute left-0 right-0 bottom-0 bg-[black] text-white font-titleFont text-center z-50 hidden group-hover:block duration-500" disabled={product.stock === 0}>Add to cart</button>
            </div>
            <div className='px-4 z-50 bg-white'>
                    <div className='flex items-center justify-center'>
                        <h2 className='font-titleFont tracking-wide text-md text-black-300 font-normal mt-3'>{product.title?.substring(0, 20)}</h2>     
                    </div>
                    
                    <div className="flex justify-center mt-0 mb-2">
                        <div className='text-yellow-500'>
                            <StarIcon fontSize="small"/>
                            <StarIcon fontSize="small"/>
                            <StarIcon fontSize="small"/>
                            <StarIcon fontSize="small"/>
                            <StarIcon fontSize="small"/>
                        </div>
                    </div>
                    <p className='text-lg text-black-800 font-semibold text-center'>$ {product.price}</p>
            </div>
        </div>
    );
};

export default Product;