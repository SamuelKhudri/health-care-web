import React from 'react';
import './Showdoctor.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStickyNote, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// const element = <FontAwesomeIcon icon={faStickyNote} />
// const element1 = <FontAwesomeIcon icon={faThumbsUp} />

const Showdoctor = (props) => {
    // distructuring to grt more element
    const { name, image, Chember } = props.Doctor;
    return (
        <div className="col">
            <div className="card">
                <img className="user-image" src={image} alt="" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <h4>work at: {Chember}</h4>
                    <button className="btn-regular">Show-Details</button>
                </div>
            </div>
        </div>
    );
};

export default Showdoctor;