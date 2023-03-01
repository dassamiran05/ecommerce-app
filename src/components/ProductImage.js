import React from 'react';
import Slider from 'react-slick';
import useProducts from '../api/useProduct';

const ProductImage = () => {

    const [products] = useProducts();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <div className=' bg-white grid grid-cols-1 relative overflow-hidden'>
            <Slider {...settings}>
                {
                    products.map(product => (
                        <div  key={product.id}>
                            <div className="bg-[#f7f8f8] product-i h-[250px] items-center justify-center cursor-pointer shadow-none duration-200 p-3 border-[1px] border-gray-200 group relative duration-700">
                                <img src={product.image} alt={product.title} className="w-full h-full object-contain" id="image" />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ProductImage;