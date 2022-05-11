import React from 'react';

const InfoCard = ({img,cardTitle,cardInfo,bgClass}) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-4'><img src={img} alt="Album" /></figure>
            <div className='card-body text-white'>
            <h2 className='card-title'> {cardTitle}</h2>
            <p>{cardInfo}</p>
            </div>
            
        </div>
        </div>
    );
};

export default InfoCard;