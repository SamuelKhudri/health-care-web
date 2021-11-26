import React from 'react';
import './Location.css';

const Location = () => {
    return (
        <div className="container mt-5 ">
            <div class="row">
                <div className="row">
                    <div className="col">
                        <div className="g-col-4 card border-success mb-3">
                            <div id="header" class="card-header bg-primary border-success"><h3>Rajshahi Hospital</h3></div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Our Medical Office</h5>
                                <p class="card-text">City vobon area, building 23, sektor A-road-highway city</p>
                                <button id="btn-regular">Show Location</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="g-col-4 card border-success mb-3">
                            <div id="header" class="card-header bg-primary border-success"><h3>Dhaka Hospital</h3></div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Our Medical Office</h5>
                                <p class="card-text">Dhaka Dhanmondibroad-4000, Farm-get, Main point bazar.</p>
                                <button id="btn-regular">Show Location</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="g-col-4 card border-success mb-3">
                            <div id="header" class="card-header bg-primary border-success"><h3>sylhet Hospital</h3></div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Our Medical Office</h5>
                                <p class="card-text">Sylhet Sikhha broad-4000, Farm-get, Main point bazar.</p>
                                <button id="btn-regular">Show Location</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="g-col-4 card border-success mb-3">
                            <div id="header" class="card-header bg-primary border-success"><h3>Rongpur Hospital</h3></div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Our Medical Office</h5>
                                <p class="card-text">Rangpur Dhanmondibroad-4000, Farm-get, Main point bazar.</p>
                                <button id="btn-regular">Show Location</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="g-col-4 card border-success mb-3">
                            <div id="header" class="card-header bg-primary border-success"><h3>Cittagong Hospital</h3></div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Our Medical Office</h5>
                                <p class="card-text">Chittagong-4000, Majar-get, Main point bazar-kodomtali.</p>
                                <button id="btn-regular">Show Location</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="g-col-4 card border-success mb-3">
                            <div id="header" class="card-header bg-primary border-success"><h3>Borisal Hospital</h3></div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Our Medical Office</h5>
                                <p class="card-text">Barishal-5000, Majar-get, Main point bazar-kodomtali</p>
                                <button id="btn-regular">Show Location</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;