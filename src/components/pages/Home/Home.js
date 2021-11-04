import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Info></Info>
            <Services></Services>
        </div>

    );
};

export default Home;