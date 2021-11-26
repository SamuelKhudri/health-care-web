import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="banner-area">
                <div className=" row content area">
                    <div className=" col content">
                        <div className="">
                            <h1>Call-Doctors-Online</h1>
                            <p>"We Provide You The best Service and Help"</p>
                            <button className="btn-regular">Rate Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;