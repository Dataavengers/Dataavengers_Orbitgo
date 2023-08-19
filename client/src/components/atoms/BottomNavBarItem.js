import React from 'react';

const BottomNavBarItem = ({ item, name, destination }) => {

    return (
        <button className='flex flex-col justify-center items-center'>
            <div className='' >
                {item}
            </div>
            <div className='text-white leading-4 tracking-tighter font-inter font-medium text-capitalize text-sm'>{name}</div>
        </button>
    );
};

export default BottomNavBarItem;