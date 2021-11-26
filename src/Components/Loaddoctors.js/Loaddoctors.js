
import React, { useEffect, useState } from 'react';
import Showdoctor from '../Showdoctor/Showdoctor';

const Loaddoctors = () => {
    // use destructuring method to get data
    const [Doctors, setDoctors] = useState([])
    // faka data call 
    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div className="container mt-5">
            <h1 id="h1provided" >Our Doctors</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    Doctors.map(Doctor => <Showdoctor
                        Doctor={Doctor}>
                    </Showdoctor>)
                    // i use ShowDoctor function to shoe Doctors data
                }
            </div>
        </div>
    );
};

export default Loaddoctors;