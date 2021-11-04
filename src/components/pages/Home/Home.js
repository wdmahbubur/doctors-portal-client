import React from 'react';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import Features from './Features/Features';
import HomeBanner from './HomeBanner/HomeBanner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Info></Info>
            <Services></Services>
            <Features></Features>
            <AppointmentSection></AppointmentSection>
        </div>

    );
};

export default Home;