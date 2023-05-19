import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;