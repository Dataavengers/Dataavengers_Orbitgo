import React from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import Button from '../components/atoms/Button';
import worldImage from '../assets/world-img.png';
import { BackIcon, LocationPinIcon } from '../assets/Icons';

const Dashboard = () => {

    const onClickLetsGoButton = () => {

    }

    const onClickTurnBackButton = () => {

    }

    return (
        <div className='h-screen w-full flex flex-col justify-between py-5 px-7 bg-gradient-to-b from-[#011118] to-[#133F52]' >
            <div className='flex flex-col justify-between place-items-center h-full w-full p-3' >
                <div className='text-white font-inter text-3xl font-bold text-left' >
                    WELCOME BACK!!!
                </div>
                <div className='w-full text-white flex flex-col justify-center items-center ' >
                    <div className='flex absolute top-[21%] left-[50%]'>
                        <div className='' >
                            <LocationPinIcon />
                        </div>
                        <div className='text-black font-inter text-sm font-medium' >You are here!</div>
                    </div>
                    <img className='w-96' src={worldImage} alt='world-img' />
                    <div className='flex justify-end w-1/3 pt-5 '>
                        <button onClick={onClickTurnBackButton} >
                            <BackIcon />
                        </button>
                    </div>
                </div>
                <div className='w-1/6 mb-11'>
                    <Button
                        btnName={'LETS GO!'}
                        onClickButton={onClickLetsGoButton}
                    />
                </div>
            </div>
            <div className='w-full h-fit p-0' >
                <BottomNavBar />
            </div>
        </div>
    );
};

export default Dashboard;