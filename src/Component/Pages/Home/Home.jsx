import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
            <Review></Review>
        </div>
    );
};

export default Home;