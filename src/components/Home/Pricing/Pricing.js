import React from 'react';
import './Pricing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Pricing = () => {
    const checkIcon = <FontAwesomeIcon className="check-icon" icon={faCheck} />

    return (
            <div id="pricing" className="pricing-container">
            <h1 className="section-title mb-4 mt-5 pt-4">Pricing</h1>
            <div className="row m-0">
                <div className="col-md-6 col-lg-4">
                    <div className="pricing-card">
                        <h2>Basic</h2>
                        <hr />
                        <h1>$ 10 <span>/m</span></h1>
                        <h3>3 months</h3>
                        <div className="pricing-details">
                            <p>{checkIcon} Weight lifting</p>
                            <p>{checkIcon} Cardio</p>
                            <p>{checkIcon} Training</p>
                            <p>{checkIcon} Yoga</p>
                            <p>{checkIcon} Protein powder</p>
                        </div>
                        <div className="text-center mt-3">
                            <button className="check-out-btn">Check Out</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="pricing-card">
                        <h2>Standard</h2>
                        <hr />
                        <h1>$ 20 <span>/m</span></h1>
                        <h3>6 months</h3>
                        <div className="pricing-details">
                            <p>{checkIcon} Weight lifting</p>
                            <p>{checkIcon} Cardio</p>
                            <p>{checkIcon} Training</p>
                            <p>{checkIcon} Yoga</p>
                            <p>{checkIcon} Protein powder</p>
                        </div>
                        <div className="text-center mt-3">
                            <button className="check-out-btn">Check Out</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="pricing-card">
                        <h2>Premium</h2>
                        <hr />
                        <h1>$ 30 <span>/m</span></h1>
                        <h3>12 months</h3>
                        <div className="pricing-details">
                            <p>{checkIcon} Weight lifting</p>
                            <p>{checkIcon} Cardio</p>
                            <p>{checkIcon} Training</p>
                            <p>{checkIcon} Yoga</p>
                            <p>{checkIcon} Protein powder</p>
                        </div>
                        <div className="text-center mt-3">
                            <button className="check-out-btn">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;