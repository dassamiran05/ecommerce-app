import React from 'react';
import useProducts from '../api/useProduct';
import Product from './Product';

const ProductSection = ({handleAddtoCart}) => {
    const [products] = useProducts();

    return (
        <div className='py-8'>
            <div className="max-w-screen-xl mx-auto">
                <div className='flex items-center justify-between'>
                    <span className='uppercase relative text-xl font-bodyFont new'>New product</span>
                    <ul className='flex items-center gap-7'>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>All</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Women's</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Men's</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Kids</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Accessories</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Cosmetics</li>
                    </ul>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8'>       
                    {
                        products.slice(0, 8).map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductSection;