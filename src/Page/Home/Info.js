import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
            <InfoCard cardTitle="Opening Hours" cardInfo="10 am to 8 Pm" img={clock} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard cardTitle="Location" cardInfo="Dhaka,Bangladesh" img={marker} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
           
            <InfoCard cardTitle="Contact Us"    cardInfo="+000 123 456789"img={phone} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>

        </div>
    );
};

export default Info;