import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const {services} = useServices();

    const serviceDetail = services.find( service => service.id === serviceId);
    // console.log(serviceDetail);

    return (
        <div>
            <div className="excercise-detail">
                <h2>Excercise : {serviceDetail?.serviceName}</h2>
                <h4>Excercise type : {serviceDetail?.type}</h4>
            </div>
            <div className="service-details flex-md-column flex-sm-column flex-lg-row flex-column">
                <img className="img-fluid" src={serviceDetail?.image} alt="" />
                <p>{serviceDetail?.details}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;