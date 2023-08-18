import React from 'react';
import LocationCard from '../molecules/LocationCard';

const LocationCardList = ({locationList}) => {
    return (
        <div className='space-y-4 h-full px-0 overflow-y-auto' >
            {
                locationList.map((each, i) => (
                    <LocationCard
                        key={i}
                        rating={each.rating}
                        location={each.location}
                        image={each.img}
                    />
            ))}
        </ div>
    );
};

export default LocationCardList;