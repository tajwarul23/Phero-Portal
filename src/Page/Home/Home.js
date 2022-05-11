import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Poster from './Poster';
import Services from './Services';
import Testiomonials from './Testiomonials';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Poster></Poster>
           <MakeAppointment></MakeAppointment>
           <Testiomonials></Testiomonials>
           <Contact></Contact>
        </div>
    );
};

export default Home;