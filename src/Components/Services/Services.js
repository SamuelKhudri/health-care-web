import React, { useEffect, useState } from 'react';
import Showservice from '../Showservice/Showservice';
// import Showcourse from '../Showcourse/Showcourse';
import './Services.css';
const Services = () => {
    // import state
    const [services, setServices] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container mt-5">
            <h1 id="h1provided" >Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    services.map(service => <Showservice
                        // key={service.key}
                        service={service}>
                    </Showservice>)
                    // we use Showservice function to import data
                }
            </div>
            
        </div>

    );
};

export default Services;