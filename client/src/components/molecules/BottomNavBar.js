import React from 'react';
import { ClockIcon, HomeIcon, SearchIcon, UserProfileIcon } from '../../assets/Icons';
import BottomNavBarItem from '../atoms/BottomNavBarItem';
import { Link } from 'react-router-dom';

const BottomNavBar = () => {

    return (
        <div className='bg-transparent flex justify-between my-0 h-fit w-auto mb-1' >
            <Link to="/dashboard">
                <BottomNavBarItem
                    name={'Home'}
                    item={<HomeIcon />}
                />
            </Link>

            <Link to="/activity">
                <BottomNavBarItem
                    name={'Activity'}
                    item={<ClockIcon />}
                />
            </Link>

            <Link to="/discover">
                <BottomNavBarItem
                    name={'Discover'}
                    item={<SearchIcon />}
                />
            </Link>

            <Link to="/profile">
                <BottomNavBarItem
                    name={'Profile'}
                    item={<UserProfileIcon />}
                />
            </Link>

        </div >
    );
};

export default BottomNavBar;