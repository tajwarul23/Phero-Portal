import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center px-12'>
            <div className='flex-1  hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div  className='flex-1'>
            <h3 className='text-xl text-primary font-bold '>Appointment</h3>
            <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque voluptatum sequi blanditiis iusto, similique dicta assumenda sit beatae at mollitia, placeat velit hic? Assumenda nobis tenetur repellat vitae ipsum optio. Nulla vel, nobis iusto iure neque veniam alias eaque.</p>
        <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to primary mt-4">Get Started</button>
            </div>
           
        </section>
    );
};

export default MakeAppointment;