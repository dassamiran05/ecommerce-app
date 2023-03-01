import React from 'react';
import useProducts from '../api/useProduct';
import SingleFeatureProduct from './SingleFeatureProduct';

const FeatureProduct = () => {

    const [products] = useProducts();

    return (
        <div className='py-8'>
            <div className="max-w-screen-xl mx-auto sm:px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className='flex flex-col gap-7'>
                        <span className='uppercase relative text-xl font-bodyFont feature'>hot trend</span>
                        <div className="flex flex-col gap-4">
                            {
                                products.slice(0, 3).map(product => <SingleFeatureProduct key={product.id} product={product}/>)
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <span className='uppercase relative text-xl font-bodyFont feature'>Best Seller</span>
                        <div className="flex flex-col gap-4">
                            {
                                products.slice(3, 6).map(product =><SingleFeatureProduct key={product.id} product={product}/>)
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <span className='uppercase relative text-xl font-bodyFont feature'>Feature</span>
                        <div className="flex flex-col gap-4">
                            {
                                products.slice(6, 9).map(product =><SingleFeatureProduct key={product.id} product={product}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;