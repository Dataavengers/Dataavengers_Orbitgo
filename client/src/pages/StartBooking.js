import React, { useState } from 'react';
import Layout from '../components/templates/Layout';
import Button from '../components/atoms/Button';
import LocationCardList from '../components/organisms/LocationCardList';

import moonImg from '../assets/moon-img.png';
import marsImg from '../assets/mars-img.png';


const StartBooking = () => {

    const locationList = [
        {
            rating: 5,
            location: 'moon',
            img: moonImg
        },
        {
            rating: 3,
            location: 'mars',
            img: marsImg
        },
        {
            rating: 5,
            location: 'moon',
            img: moonImg
        },
        {
            rating: 3,
            location: 'mars',
            img: marsImg
        },
        {
            rating: 3,
            location: 'mars',
            img: marsImg
        },
    ]

    return (
        <Layout>
            <div className='pt-4 w-full' >
                <Button 
                    btnName={'Start Booking'}
                />
            </div>
            <div className='text-white font-inter text-[0.9rem] font-medium leading-normal text-center py-2'>
                Take a look in most popular tourist spots
            </div>
            <div className='w-full h-[70%] py-2 flex flex-col' >
                <LocationCardList 
                    locationList={locationList}
                />
            </div>
        </Layout>
    );
};

export default StartBooking;