import React from 'react';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import Blog from './Blog/Blog';
import Features from './Features/Features';
import HomeBanner from './HomeBanner/HomeBanner';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Info></Info>
            <Services></Services>
            <Features></Features>
            <AppointmentSection></AppointmentSection>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>

    );
};

export default Home;