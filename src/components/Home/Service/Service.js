import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id, serviceName, image, type, details} = props.service;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single-card">
                <div className="card-img">
                <img src={image} alt="service img" />
                </div>
                <h3>{type}</h3>
                <hr />
                <h2>{serviceName}</h2>
                <hr />
                <p>{details.slice(0,75)}...</p>
                <Link to={`/service/${id}`} ><button className="details-btn">More Details</button></Link>
            </div>
        </div>
    );
};

export default Service;