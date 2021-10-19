import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>No Pain <span className="secondary-color">No Gain</span></h1>
                <h3>You Have To Do It.</h3>
                <Link to="/login"><button className="join-btn">Join Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;