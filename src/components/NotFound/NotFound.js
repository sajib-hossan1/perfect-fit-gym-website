import React from 'react';
import './NotFound.css'
import notFoundImg from '../../images/404.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found d-flex flex-md-column flex-sm-column flex-lg-row flex-column">
                <img className="img-fluid" src={notFoundImg} alt="" />
                <div className="not-found-text">
                    <h1>404 Not Found</h1>
                    <p>Opps! the page are you looking for does not exist.It might have benn moved or deleted.</p>
                </div>
            </div>
            <Link to="/home"><button className="home-btn">Back To Home</button></Link>
        </div>
    );
};

export default NotFound;