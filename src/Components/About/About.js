import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container">
            <section className="mt-5">
                <h1 id="h1provided" >Manage Problems</h1>
                <div className="row row-cols-4 mt-5">
                    <div className="col">
                        <div className="card">
                            <h2>Mr. Abdus Sobhan</h2>
                            <p>Our regional head office Secretary. He organize the all events of
                                us and he is our hardworkin personality</p>
                            <p>Hotline: 0967457</p>
                            <Link to="mailto:calldoctors1208@gmail.com">Email: calldoctors1208@gmail.com</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Mr. Abdur Rahman</h2>
                            <p>He is the Head of Tecnical Support team. You can Contact with him. if you have any problem</p>
                            <p>Hotline: 0967457</p>
                            <Link to="mailto:calldoctors1307@gmail.com">Email: calldoctors1307@gmail.com</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Mr. APJ Hasan Ali</h2>
                            <p>He is our one of the best Manager in our Platform. if you have any problem about Paying better contact with him</p>
                            <p>Hotline: 0967457</p>
                            <Link to="mailto:calldoctors1208@gmail.com">Email: calldoctors2408@gmail.com</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Dr. Abdus Sakur</h2>
                            <p>Our most relaible workers. He usually maintain the sheduling .if you have any problem contact with him </p>
                            <p>Hotline: 0967457</p>
                            <Link to="mailto:calldoctors1208@gmail.com">Email: calldoctors1111@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <h1 id="h1provided" >Sheduling-Location</h1>
                <div className="row row-cols-3 mt-5">
                    <div className="col">
                        <div className="card">
                            <h2>Dhaka-Medical</h2>
                            <p>Time: Satarday-Monday</p>
                            <p>contact: 01928282828</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Rajshahi-Medical</h2>
                            <p>Time: Satarday-Monday</p>
                            <p>contact: 01739678352</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="carrd">
                            <h2>Apollo-Medical Dhaka</h2>
                            <p>Time: Monday-Wednesday</p>
                            <p>contact: 01712365987</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-3 mt-5">
                    <div className="col">
                        <div className="card">
                            <h2>United-Medical Dhaka</h2>
                            <p>Time: Monday-Wednesday</p>
                            <p>contact: 01752365998</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Rongpur Medical</h2>
                            <p>Time: Monday-Wednesday</p>
                            <p>contact: 01747652433</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Chittagong-Medical</h2>
                            <p>Time: Monday-Wednesday</p>
                            <p>contact: 01642356897</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-3 mt-5">
                    <div className="col">
                        <div className="card">
                            <h2>Sylhet Medical</h2>
                            <p>Time: Sunday-Tuesday</p>
                            <p>contact: 01852424425</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Khulna Medical</h2>
                            <p>Time: Sunday-Tuesday</p>
                            <p>contact: 01962543377</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Barishal Medical</h2>
                            <p>Time: Monday-Thrusday</p>
                            <p>contact: 01967353382</p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default About;