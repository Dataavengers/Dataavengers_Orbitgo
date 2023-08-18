import React from 'react';

const BottomNavBarItem = ({item, name}) => {
    return (
        <div className='flex flex-col justify-center items-center cursor-pointer' >
            <div className='' >
                {item}
            </div>
            <div className='text-white leading-4 tracking-tighter font-inter font-medium text-capitalize text-sm'>{name}</div>
        </div>
    );
};

export default BottomNavBarItem;