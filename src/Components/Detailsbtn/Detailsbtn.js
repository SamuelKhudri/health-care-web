import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Detailsbtn = () => {
    const { servicesid } = useParams()
    const [services, setServices] = useState();
    const [selected, setSelected] = useState();
    // const { servicename } = service;
    // , image, summery, duration, timemenu, fee

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // useEffect(() => {

    //     setSelected(details);
    // }, [services])
    const details = services?.find(service => service.id == servicesid)

    // console.log(service)
    // console.log(id);
    return (
        <div className="container" >
            <div className="col">
                <div className="card">
                    <h4>Your selection:{details?.id}</h4>
                    <div className="card-body">
                        <h4>OurService: {details?.servicename}</h4>
                        <p> {details?.summery}</p>
                        <p>Time: {details?.duration}</p>
                        <p>Shedule: {details?.timemenu}</p>
                        <p>Fee: {details?.fee}</p>
                        <Link to={'/home'}>
                            <button className="btn-regular">Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detailsbtn;