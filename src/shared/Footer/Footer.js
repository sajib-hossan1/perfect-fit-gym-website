import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />
    const youtubeIcon = <FontAwesomeIcon icon={faYoutubeSquare} />
    return (
        <div className="footer">
            <div className="row m-0">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
                    <h3>Perfect <span className="secondary-color">Fit</span></h3>
                    <p>We are making your fitness dream come true.Our trainers try their best to makes you fit.Please visit our Gym for more details.
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-p mb-5">
                    <h3>Contact Us</h3>
                    <Link className="text-decoration-none" to="/contact"><p>Contact</p></Link>
                    <Link className="text-decoration-none" to="/support"><p>Support</p></Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-p mb-5">
                    <h3>Membership</h3>
                    <Link className="text-decoration-none" to="/pricing"><p>Pricing</p></Link>
                    <Link className="text-decoration-none" to="/plans"><p>Plans</p></Link>
                    <Link className="text-decoration-none" to="/faq"><p>FAQ</p></Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-p">
                    <h3>Follow Us</h3>
                    <Link className="text-decoration-none"><p>{facebookIcon} Facebook</p></Link>
                    <Link className="text-decoration-none"><p>{twitterIcon} Twitter</p></Link>
                    <Link className="text-decoration-none"><p>{youtubeIcon} YouTube</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;