import React, {useState, useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './header.css';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({cartItems, handleDeleteproduct}) => {
    const [showcartdiv, setShowcartdiv] = useState(false);

    const [totalprice, setTotalprice] = useState(null);
    const [mobilemenu, setMobilemenu] = useState(false);

    useEffect(() => {
        const getTotalPrice = () => {
            let total = 0;
            cartItems.map(x => {
                total += x.qty * x.price;
                return setTotalprice(total.toFixed(2));
            });
        }

        getTotalPrice();
    }, [cartItems]);


    const handlecheckout = () =>{
        alert("Sorry no link after that");
    }


    const handleClick = () => {
        setMobilemenu(false);
    }


   

    return (
        <div className='shadow-lg mb-2'>
            <div className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-5">
                <div className="w-[33%]">
                    <span className="font-logoFont cursor-pointer">Lorem</span>
                </div>
                <div className="w-[33%] flex items-center justify-center relative">
                <div className="md:inline-flex lg:hidden cursor-pointer" onClick={() => setMobilemenu(!mobilemenu)}><MenuIcon /></div>
                    <ul className="hidden items-center gap-8 nav-manu lg:flex">
                        <li className="uppercase relative cursor-pointer font-normal">Home</li>
                        <li className="uppercase relative cursor-pointer font-normal">Women's</li>
                        <li className="uppercase relative cursor-pointer font-normal">Men's</li>
                        <li className="uppercase relative cursor-pointer font-normal">Shop</li>
                        <li className="uppercase relative cursor-pointer font-normal">Pages</li>
                        <li className="uppercase relative cursor-pointer font-normal">Blog</li>
                        <li className="uppercase relative cursor-pointer font-normal">Contact</li>
                    </ul>
                </div>
                <div className="w-[33%] flex items-center gap-3 justify-end relative">
                    <div className='max-[678px]:hidden'>
                        <span className='text-sm font-titleFont cursor-pointer'>Login</span> /        
                        <span className='text-sm font-titleFont cursor-pointer'>Register</span>
                    </div>
                    <div >
                        <SearchIcon className="rotate-90 cursor-pointer" />
                    </div>
                    <div className='relative cursor-pointer'>
                        <FavoriteBorderIcon />
                        <span className="w-[15px] h-[15px] bg-black text-white p-2 text-xs rounded-full flex items-center justify-center absolute top-[-3px] right-[-5px]">2</span>
                    </div>
                    <div className='relative cursor-pointer' onClick={() => setShowcartdiv(true)}>   
                        <ShoppingBagOutlinedIcon />
                        <span className="w-[15px] h-[15px] bg-black text-white p-2 text-xs rounded-full flex items-center justify-center absolute top-[-3px] right-[-5px]">{cartItems.length}</span>
                    </div>

                    {
                        showcartdiv && (
                            <div className="w-[400px] bg-white px-4 pb-4 pt-8 h-auto border-[1px] border-gray-300 absolute top-[20px] right-0 flex flex-col z-50 shadow-md">
                    <span  className="  absolute p-2 w-[20px] h-[20px] flex items-center justify-center border-[1px] border-gray-200 right-[10px] top-[10px] z-50 bg-[red] text-white cursor-pointer" onClick={() => setShowcartdiv(false)}><CloseIcon fontSize="15px"/></span>

                            {
                            cartItems.length > 0 ?
                            
                                cartItems.map(cart =>  (
                                        <div className="w-full h-auto flex gap-4 mb-2 items-center justify-between relative">
                                        
                                        <div className="w-[40px] h-[40px] border-[1px] border-gray-300 p-1">
                                            <img src={cart.image} alt={cart.title} className="w-full h-full object-contain"/>
                                        </div>
                                        <p className="py-2 px-1">{cart.title.substring(0, 20)}</p>
                                        <span className="text-sm font-titleFont font-semibold">{cart.qty}</span>
                                        <span className="text-sm font-titleFont font-semibold ">${cart.qty * cart.price}</span>
                                        <span className="rounded-xs py-1 px-2 bg-[red] text-sm text-white font-titleFont font-semibold cursor-pointer" onClick={() => handleDeleteproduct(cart)}>delete</span>

                                        </div>
                                    
                                ))
                            :
                            <p>The cart is empty</p>
                        }
                        {
                            cartItems.length > 0 && (
                                <div className="flex flex-col gap-2 items-center"><span className="text-sm font-titleFont text-black-400">Total Price : <span className="text-xl font-titleFont text-black-600 font-bold">$ {totalprice}</span></span><button className="w-full py-2 bg-[black] text-white font-titleFont cursor-pointer text-center" onClick={() => handlecheckout()}>Proceedto check</button></div>
                            )
                        }
                    </div>

                        )
                    }

                    
                </div>
                {
                        mobilemenu && (
                            <ul className="fixed pt-4  top-0 left-0 right-0 w-full h-screen flex flex-col items-center gap-8 mobile-nav z-50 bg-white overscroll-none">
                                <span className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[red] text-white" onClick={() => setMobilemenu(false)}><CloseIcon /></span>
                                <li className="uppercase relative cursor-pointer font-normal mb-2 hover:scale-110 hover:font-semibold duration-400" onClick={() => handleClick()}>Home</li>
                                <li className="uppercase relative cursor-pointer font-normal mb-2 hover:scale-110 hover:font-semibold duration-400" onClick={() => handleClick()}>Women's</li>
                                <li className="uppercase relative cursor-pointer font-normal mb-2 hover:scale-110 hover:font-semibold duration-400" onClick={() => handleClick()}>Men's</li>
                                <li className="uppercase relative cursor-pointer font-normal mb-2 hover:scale-110 hover:font-semibold duration-400" onClick={() => handleClick()}>Shop</li>
                                <li className="uppercase relative cursor-pointer font-normal mb-2 hover:scale-110 hover:font-semibold duration-400" onClick={() => handleClick()}>Pages</li>
                                <li className="uppercase relative cursor-pointer font-normal mb-2 hover:scale-110 hover:font-semibold duration-400" onClick={() => handleClick()}>Blog</li>
                                <li className="uppercase relative cursor-pointer font-normal  mb-2 hover:scale-110 hover:font-semibold duration-400" onClick={() => handleClick()}>Contact</li>
                                <li className="uppercase relative cursor-pointer font-normal hover:scale-110 hover:font-semibold duration-400" onClick={() => handleClick()}><span>Login</span> / <span>Register</span></li>
                            </ul>
                        )
                    }
            </div>
        </div>
    );
};

export default Header;