import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    const thirdProduct = {...products[2], stock: 0};
    products[2] = thirdProduct;

    const sixthProduct = {...products[5], trending: true};
    products[5] = sixthProduct;


    useEffect(() => {

        async function handleproduct(){
            await axios.get("https://fakestoreapi.com/products").then(res =>setProducts(res.data));
        }
        handleproduct();
    }, []);

    return [products];
}


export default useProducts;