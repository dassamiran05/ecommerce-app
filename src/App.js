import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [cartItems, setCartItems] = useState([]);
  


  //Add to cart functionality
  const handleAddtoCart = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      const newCartItems = cartItems.map(x => x.id === product.id ? { ...exists, qty: product.quantity ? exists.qty + product.quantity : exists.qty + 1 } : x);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
    else {
      const newCartItems = [...cartItems, { ...product, qty: product.quantity ? product.quantity : 1 }];
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
    toast.success("Product Added to cart");
  }




  const handleDelete = (product) => {

    const exists = cartItems.find((x) => x.id === product.id);
    if (exists.qty === 1) {
      const newCartItems = cartItems.filter(x => x.id !== product.id);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
    else {
      const newCartItems = cartItems.map(x => x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }

  }


  const handleDeleteproduct = (productItem) => {
    const exists = cartItems.find((x) => x.id === productItem.id);
    if (exists) {
      const product = cartItems.filter(x => x.id !== productItem.id);
      setCartItems(product);
      saveProductLocalstorage(product);
    }
    toast.success("Product deleted from cart");

  }


  //Save cart details to localstorage for each interaction for addTocart and delete functionality
  const saveProductLocalstorage = cart => {
    if (cart) {
      localStorage.setItem('CartItem', JSON.stringify(cart));
    }
  }


  //Get cart details from Local Storage
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('CartItem'));
    if (localData) {
      setCartItems(localData);
    }
  }, []);


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main cartItems={cartItems} handleDeleteproduct={handleDeleteproduct}></Main>,
        children: [
            {
                path: '/',
                element: <Home handleAddtoCart={handleAddtoCart}></Home>
            }
        ]
    }
]);


  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster  position="bottom-center" reverseOrder={false}/>
    </>
  );
}

export default App;
