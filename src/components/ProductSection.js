import { FormControl, InputLabel } from '@mui/material';
import React, {useState} from 'react';
import useProducts from '../api/useProduct';
import Product from './Product';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ProductSection = ({handleAddtoCart}) => {
    const [products] = useProducts();



    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className='py-8 px-3'>
            <div className="max-w-screen-xl mx-auto">
                <div className='flex items-center justify-between'>
                    <span className='uppercase relative text-xl font-bodyFont new'>New product</span>
                    <ul className='md:flex items-center gap-7 min-[320px]:hidden'>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>All</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Women's</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Men's</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Kids</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Accessories</li>
                        <li className='font-titleFont text-black-500 category relative cursor-pointer duration-200'>Cosmetics</li>
                    </ul>
                    <div className='md:hidden'>
                        <FormControl sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
                            <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={category}
                            onChange={handleChange}
                            autoWidth
                            label="Category"
                            >
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Women's">Women's</MenuItem>
                            <MenuItem value="Men's">Men's</MenuItem>
                            <MenuItem value="Kids">Kids</MenuItem>
                            <MenuItem value="Accessories">Accessories</MenuItem>
                            <MenuItem value="Cosmetics">Cosmetics</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8'>       
                    {
                        products.slice(0, 8).map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductSection;