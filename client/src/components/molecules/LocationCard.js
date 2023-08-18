import React from 'react';
import StarRating from '../atoms/StarRating';

const LocationCard = ({rating, location, image}) => {
    return (
        <div className='rounded-[0.625rem] bg-opacity-25 w-full h-fit flex-shrink-0 bg-black px-4 py-2 flex justify-between items-center space-x-5'>
            <div className='w-[9.5rem] h-auto' >
                <img src={image} alt={location} className='w-full h-full' />
            </div>
            <div className='w-full flex flex-col justify-around items-start text-white h-full py-2 space-y-2' >
                <div className='text-white font-inter text-lg font-medium' >
                    {location}
                </div>
                <div className='w-full flex' >
                    <StarRating
                        totalStars={5}
                        rating={rating}
                    />
                </div>
            </div>
        </div>
    );
};

export default LocationCard;