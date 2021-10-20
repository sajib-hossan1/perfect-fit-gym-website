import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Plans = () => {
    const checkIcon = <FontAwesomeIcon className="check-icon" icon={faCheck} />
    return (
        <div id="pricing" className="pricing-container">
            <h1 className="section-title mb-4 mt-5 pt-4">Plans</h1>
            <div className="row m-0">
                <div className="col-md-6 col-lg-4">
                    <div className="pricing-card">
                        <h2>Begginer Plan</h2>
                        <hr />
                        <h1>$ 40 <span>/m</span></h1>
                        <h3>3 months</h3>
                        <div className="pricing-details">
                            <p>{checkIcon} Unlimited access to the gym</p>
                            <p>{checkIcon} 3 classes per weak</p>
                            <p>{checkIcon} 1 year membership</p>
                            <p>{checkIcon} Free drinking package</p>
                            <p>{checkIcon} 1 free personal training</p>
                        </div>
                        <div className="text-center mt-3">
                            <button className="check-out-btn">Check Out</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="pricing-card">
                        <h2>Premium Plan</h2>
                        <hr />
                        <h1>$ 60 <span>/m</span></h1>
                        <h3>6 months</h3>
                        <div className="pricing-details">
                            <p>{checkIcon} Unlimited access to the gym</p>
                            <p>{checkIcon} 5 classes per weak</p>
                            <p>{checkIcon} 1 year membership</p>
                            <p>{checkIcon} Free drinking package</p>
                            <p>{checkIcon} 3 free personal training</p>
                        </div>
                        <div className="text-center mt-3">
                            <button className="check-out-btn">Check Out</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="pricing-card">
                        <h2>Ultimate Plan</h2>
                        <hr />
                        <h1>$ 80 <span>/m</span></h1>
                        <h3>12 months</h3>
                        <div className="pricing-details">
                            <p>{checkIcon} Unlimited access to the gym</p>
                            <p>{checkIcon} 7 classes per weak</p>
                            <p>{checkIcon} 1 year membership</p>
                            <p>{checkIcon} Free drinking package</p>
                            <p>{checkIcon} 5 free personal training</p>
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

export default Plans;