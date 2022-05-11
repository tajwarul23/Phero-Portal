import React from 'react';
import appointment from '../../assets/images/appointment.png';
const Contact = () => {
    return (
        <section style={{background:`url(${appointment})`}}>
       <div className='mt-5' >
       <h2 className='text-3xl  text-center text-primary font-bold pt-5'>Contact Us</h2>
       <h1 className='text-4xl text-white text-center '>Stay connected with us</h1>
       </div>
       <div class="flex flex-col 
                    items-center justify-center">
           
  
            <form>
                <input aria-label="Enter your email address" 
                       type="text" placeholder="Email address" 
                       class="text-sm text-gray-base w-full 
                              mr-3 py-4 px-4 h-2 border mt-5
                              border-gray-200 rounded mb-2" />
                <input aria-label="Subject" 
                       type="textarea" placeholder="Your Subject"
                       class="text-sm text-gray-base w-full mr-3 
                              py-4 px-4 h-2 border border-gray-200 
                              rounded mb-2 mt-3" />
               
                            <textarea name="" id="" cols="30" rows="10" className='w-full rounded mt-3 px-4 py-4' placeholder='Your Message'></textarea>
  
  <button class="btn btn-active btn-primary w-full mt-5 mb-5 ">Button</button>

            </form>
        </div>
        </section>
    );
};

export default Contact;