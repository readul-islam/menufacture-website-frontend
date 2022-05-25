import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Products from './Products';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <BusinessSummary/>
            <Reviews/>
           <Footer/>
           

        </div>
    );
};

export default Home;