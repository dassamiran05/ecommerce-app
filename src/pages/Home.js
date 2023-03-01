import React from 'react';
import Banner from '../components/Banner';
import Bannerslider from '../components/Bannerslider';
import Facility from '../components/Facility';
import FeatureProduct from '../components/FeatureProduct';
import ProductImage from '../components/ProductImage';
import ProductSection from '../components/ProductSection';
import Summersale from '../components/Summersale';

const Home = ({handleAddtoCart}) => {
    return (
        <div>
            <Banner />
            <ProductSection handleAddtoCart={handleAddtoCart}/>
            <Bannerslider/>
            <FeatureProduct />
            <Summersale />
            <Facility />
            <ProductImage />
        </div>
    );
};

export default Home;