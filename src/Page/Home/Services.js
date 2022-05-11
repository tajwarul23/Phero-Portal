import React from 'react';
import Service from './Service';

const Services = () => {
    // const services=[
    //     {
    //         _id:1,
    //         name:"Fluoride Treatment"
    //     }
    // ]
    return (
        <div className='my-28 '>
           <div className='text-center '>
           <h3 className='text-primary text-2xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-3xl'>Services We Provide</h2>
           </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
              <Service></Service>
              <Service></Service>
              <Service></Service>
          </div>
        </div>
    );
};

export default Services;