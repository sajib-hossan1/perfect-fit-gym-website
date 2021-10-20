import React from 'react';
import trainer1 from '../../../images/trainers/coach1.png'
import trainer2 from '../../../images/trainers/coach2.png'
import trainer3 from '../../../images/trainers/coach3.png'
import './Trainers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Trainers = () => {
    return (
        <div id="trainers" className="trainers-container">
            <h1 className="section-title">Our Trainers</h1>
            <div className="row m-0">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="trainer-card">
                        <div className="card-img">
                            <img src={trainer1} alt="trainer img" />
                        </div>
                        <h3>Robert Cristopher</h3>
                        <h5>Bodybuilding Trainer</h5>
                        <hr />
                        <span className="trainer-social-media">
                            <Link to=""><FontAwesomeIcon className="fb-icon" icon={faFacebookSquare} /></Link>
                            <Link to=""><FontAwesomeIcon className="twitter-icon" icon={faTwitterSquare} /></Link>
                            <Link to=""><FontAwesomeIcon className="youtube-icon" icon={faYoutubeSquare} /></Link>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="trainer-card">
                        <div className="card-img">
                            <img src={trainer2} alt="trainer img" />
                        </div>
                        <h3>Olivia Williams</h3>
                        <h5>Fitness Trainer</h5>
                        <hr />
                        <span className="trainer-social-media">
                            <Link to=""><FontAwesomeIcon className="fb-icon" icon={faFacebookSquare} /></Link>
                            <Link to=""><FontAwesomeIcon className="twitter-icon" icon={faTwitterSquare} /></Link>
                            <Link to=""><FontAwesomeIcon className="youtube-icon" icon={faYoutubeSquare} /></Link>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="trainer-card">
                        <div className="card-img">
                            <img src={trainer3} alt="trainer img" />
                        </div>
                        <h3>Nikolas Smith</h3>
                        <h5>Crossfit Trainer</h5>
                        <hr />
                        <span className="trainer-social-media">
                            <Link to=""><FontAwesomeIcon className="fb-icon" icon={faFacebookSquare} /></Link>
                            <Link to=""><FontAwesomeIcon className="twitter-icon" icon={faTwitterSquare} /></Link>
                            <Link to=""><FontAwesomeIcon className="youtube-icon" icon={faYoutubeSquare} /></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainers;