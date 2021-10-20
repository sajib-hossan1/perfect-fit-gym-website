import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="row m-0">
                <div className="col-lg-3 col-md-6 col-sm-12 footer-p mb-4">
                    <h2>Perfect <span className="secondary-color">Fit</span></h2>
                    <p>We are making your fitness dream come true.Our trainers try their best to makes you fit.Please visit our Gym for more details.
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-p mb-4">
                    <h2 className="ms-3">Contact Us</h2>
                    <Link to="/contact" className="text-decoration-none"><p className="ms-3">Contact</p></Link>
                    <Link to="/support" className="text-decoration-none"><p className="ms-3">Support</p></Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-p mb-4">
                    <h2>Membership</h2>
                    <Link to="/pricing" className="text-decoration-none"><p>Pricing</p></Link>
                    <Link to="/plans" className="text-decoration-none"><p>Plans</p></Link>
                    <Link to="/FAQ" className="text-decoration-none"><p>FAQ</p></Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-p">
                    <h2>Follow Us</h2>
                    <Link to="" className="text-decoration-none"><p><FontAwesomeIcon className="footer-fb-icon" icon={faFacebookSquare} /> Facebook</p></Link>
                    <Link to="" className="text-decoration-none"><p><FontAwesomeIcon className="footer-twitter-icon" icon={faTwitterSquare} /> Twitter</p></Link>
                    <Link to="" className="text-decoration-none"><p><FontAwesomeIcon className="footer-youtube-icon" icon={faYoutubeSquare} /> YouTube</p></Link>
                </div>
            </div>
            <p className="copyright-text">All Rights Reserved by Md. Sajib Hossan 	&copy; 2021</p>
        </div>
    );
};

export default Footer;