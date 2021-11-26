import React from 'react';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import Location from '../Location/Location';
import Comment from '../Comment/Comment';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Location></Location>
            <Comment></Comment>

        </div>
    );
};

export default Home;