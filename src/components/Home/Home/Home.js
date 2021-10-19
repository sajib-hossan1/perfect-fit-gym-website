import React from 'react';
import Banner from '../Banner/Banner';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Trainers from '../Trainers/Trainers';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Pricing></Pricing>
            <Trainers></Trainers>
        </div>
    );
};

export default Home;