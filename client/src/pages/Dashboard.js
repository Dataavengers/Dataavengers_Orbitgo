import React from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import Button from '../components/atoms/Button';
import worldImage from '../assets/world-img.png';
import { BackIcon, LocationPinIcon } from '../assets/Icons';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/templates/Layout';

const Dashboard = () => {

    const navigate = useNavigate();

    const onClickLestGoButton = () => {
        navigate('/start-booking')
    }

    const onClickTrunBackButton = () => {
        
    }

    return (
        <Layout>
            <div className='text-white font-inter text-[1.25rem] font-bold text-left' >
                WELCOME BACK!!!
            </div>
            <div className='w-full text-white flex flex-col justify-center items-center ' >
                <div 
                className='flex absolute top-[21%] left-[50%]' >
                    <div className='' >
                        <LocationPinIcon />
                    </div>
                    <div className='text-white font-inter text-[0.75rem] font-medium' >You are here!</div>
                </div>
                <img className='w-full' src={worldImage} alt='world-img'/>
                <div className='flex justify-end w-full pt-5'>
                    <button onClick={onClickTrunBackButton} >
                        <BackIcon />
                    </button>
                </div>
            </div>
            <div className='w-full ' >
                <Button 
                    btnName={'LETS GO!'}
                    onClickButton={onClickLestGoButton}
                />
            </div>
        </Layout>
    );
};

export default Dashboard;