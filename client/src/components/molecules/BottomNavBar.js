import React from 'react';
import { ClockIcon, HomeIcon, SearchIcon, UserProfileIcon } from '../../assets/Icons';
import BottomNavBarItem from '../atoms/BottomNavBarItem';

const BottomNavBar = () => {
    return (
        <div className='bg-transparent flex justify-between my-0 h-fit w-auto mb-1' >
            <BottomNavBarItem 
                name={'Home'}
                item={<HomeIcon />}
            />

            <BottomNavBarItem 
                name={'Activity'}
                item={<ClockIcon />}
            />

            <BottomNavBarItem 
                name={'Discover'}
                item={<SearchIcon />}
            />

            <BottomNavBarItem 
                name={'Profile'}
                item={<UserProfileIcon />}
            />
        </div>
    );
};

export default BottomNavBar;