import React from 'react';
import { StarBorderIcon, StarIcon } from '../../assets/Icons';

const StarRating = ({totalStars, rating}) => {
    return (
        <>
            {[...Array(totalStars)].map((each, i) => (
                <span
                    className='flex '
                    key={i} >
                        { i < rating 
                            ? <StarIcon />
                            : <StarBorderIcon />
                        }
                </span>
            ))}
        </>
    );
};

export default StarRating;