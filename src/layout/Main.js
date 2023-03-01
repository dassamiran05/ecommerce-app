import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Main = ({cartItems, handleDeleteproduct}) => {
    return (
        <div>
           <Header cartItems={cartItems} handleDeleteproduct={handleDeleteproduct}></Header>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Main;