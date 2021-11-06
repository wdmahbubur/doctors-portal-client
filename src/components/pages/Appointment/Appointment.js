import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Header />
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer />
        </div>
    );
};

export default Appointment;