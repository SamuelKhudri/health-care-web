import React from 'react';
import useAuth from '../hooks/useAuth';
import './Header.css'
// import nav link
import { NavLink } from 'react-router-dom';
// import logo png
import logo from '../images/logo.jpg';


const Header = () => {
    // const { user, logOut } = useFirebase();
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="logo"><img id="logo-img" src={logo} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink id="navLi" className="nav-link active " aria-current="page" to="home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="navLi" className="nav-link active" to="about" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="navLi" className="nav-link active" to="services" >Service-details</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="navLi" className="nav-link active" to="doctor" >Doctors</NavLink>
                            </li>
                            <li className="nav-item mt-2px">
                                {
                                    user.email && <span style={{ color: 'blue' }}>Hi"{user.displayName}"</span>
                                }
                            </li>
                            <br />
                            <li className="nav-item mt-2px">
                                {
                                    user.email ?
                                        <button className="btn-regular" onClick={logOut}>LogOut</button>

                                        : <NavLink id="navLi" className="nav-link active" to="login" >Login</NavLink>
                                }
                            </li>
                        </ul>
                        <form id="mar-btn" className="d-flex ">
                            <button className="btn btn-outline-success " type="submit">Contact</button>
                        </form>
                    </div>
                </nav>
            </div>
            <section>

            </section>
        </div >
    );
};

export default Header;