import React from 'react';
import './Services.css'
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useServices();
    return (
        <div id="services">
            <h1 className="section-title">Our Services</h1>
            <div className="row m-0">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;