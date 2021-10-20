import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="w-50 text-center">
                <h1>Perfect <span className="secondary-color">Fit</span></h1>
                <h4>We are making your fitness dream come true.Our trainers try their best to makes you fit.Please visit our Gym for more details.</h4>
                <Link to="/login"><button className="join-btn">Join Now</button></Link>
            </div>
        </div>
    );
};

export default About;