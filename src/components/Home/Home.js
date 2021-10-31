import React from 'react';
import Banner from './Banner/Banner';
import Explore from './Explore/Explore';
import './Home.css'
import Review from './Review/Review';
import Services from './Services/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Explore></Explore>
        </div>
    );
};

export default Home;