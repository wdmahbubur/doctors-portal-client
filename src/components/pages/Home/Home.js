import React from 'react';
import { useNavigate } from 'react-router';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import Blog from './Blog/Blog';
import ContactForm from './ContactForm/ContactForm';
import Doctors from './Doctors/Doctors';
import Features from './Features/Features';
import HomeBanner from './HomeBanner/HomeBanner';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    let navigate = useNavigate();
    const getAppointment = () => {
        navigate('/appointment');
    }
    return (
        <div>
            <Header />
            <HomeBanner getAppointment={getAppointment}></HomeBanner>
            <Info></Info>
            <Services></Services>
            <Features></Features>
            <AppointmentSection getAppointment={getAppointment}></AppointmentSection>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <ContactForm></ContactForm>
            <Footer />

        </div>

    );
};

export default Home;