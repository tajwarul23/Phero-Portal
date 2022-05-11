import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
   
   
    <p>{review.reviews}</p>
    <div class="avatar flex items-center ">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-8">
    <img src={review.img} />
  </div>
  <h4 className='text-primary font-bold  '>{review.name}</h4>
</div>
        
  </div>
</div>
    );
};

export default Review;