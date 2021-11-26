import React from 'react';
import { Link } from 'react-router-dom';
import './Showservice.css';

const Showservice = (props) => {
    // use destructuring to add many product
    // duration, timemenu, fee
    const { servicename, image, summery, id } = props.service;
    const url = `/details/${id}`;
    return (
        <div className="col" >
            <div className="card">
                <img className="user-image" src={image} alt="" />
                <div className="card-body">
                    <h4>{servicename}</h4>
                    <p>{summery}</p>
                    <Link to={url}>
                        <button className="btn-regular">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Showservice;