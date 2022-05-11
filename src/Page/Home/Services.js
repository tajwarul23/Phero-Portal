import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';


const Services = () => {
    const services=[
        {
            _id:1,
            name:"Fluoride Treatment",
            img:fluoride,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus optio cupiditate aperiam neque commodi natus veritatis voluptates provident! Possimus temporibus iste quam a voluptatem velit sed maiores voluptatum architecto perferendis."
            
        },
        {
            _id:2,
            name:"Cavity Filling",
            img:cavity,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus optio cupiditate aperiam neque commodi natus veritatis voluptates provident! Possimus temporibus iste quam a voluptatem velit sed maiores voluptatum architecto perferendis."
            
        },
        {
            _id:3,
            name:"whitening treatment",
            img:whitening,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus optio cupiditate aperiam neque commodi natus veritatis voluptates provident! Possimus temporibus iste quam a voluptatem velit sed maiores voluptatum architecto perferendis."
            
        }
    ]
    return (
        <div className='my-28 '>
           <div className='text-center '>
           <h3 className='text-primary text-2xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-3xl mb-3'>Services We Provide</h2>
           </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
              {
                  services.map(service=><Service
                  key={service._id}
                  service={service}
                  >

                  </Service>)
              }
              
          </div>
        </div>
    );
};

export default Services;