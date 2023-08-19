import React from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import Button from '../components/atoms/Button';
import { useNavigate } from 'react-router-dom';

const StartBooking = () => {

    const navigate = useNavigate()

    return (
        < >
            <div className='place-items-center h-screen w-full flex flex-col justify-between py-5 px-7 bg-gradient-to-b from-[#011118] to-[#133F52] ' >

                <div className='w-1/5 flex flex-row p-5 justify-center place-items-center text-white text-3xl'>
                    <Button btnName={"Start Booking"} onClickButton={() => navigate('/booking')} />
                </div>
                <div className='w-1/3 flex flex-row p-5 justify-center place-items-center text-white text-3xl'>
                    <div className='text-white text-lg'> <p>Take a look in most popular tourist spots</p> </div>
                </div>

                <div className='h-3/4 w-full px-10 grid grid-cols-3 gap-4 justify-between place-items-center'>

                    <div className=' w-2/3 bg-gray-700 text-white font-semibold p-5  rounded-3xl '>
                        <div className='p-3 flex flex-row justify-between '>
                            <div >
                                <p className='text-3xl font-bold'>Earth</p>
                                <p>Californiya</p>
                            </div>
                            <div>
                                <p className='text-3xl font-bold'>Moon</p>
                                <p>Esrautus</p>
                            </div>
                        </div>
                    </div>

                    <div className=' w-2/3 bg-gray-700 text-white font-semibold p-5  rounded-3xl '>
                        <div className='p-3 flex flex-row justify-between '>
                            <div >
                                <p className='text-3xl font-bold'>Earth</p>
                                <p>Californiya</p>
                            </div>
                            <div>
                                <p className='text-3xl font-bold'>Mars</p>
                                <p>Esrautus</p>
                            </div>
                        </div>
                    </div>

                    <div className=' w-2/3 bg-gray-700 text-white font-semibold p-5  rounded-3xl '>
                        <div className='p-3 flex flex-row justify-between '>
                            <div >
                                <p className='text-3xl font-bold'>Earth</p>
                                <p>Californiya</p>
                            </div>
                            <div>
                                <p className='text-3xl font-bold'>Saturn</p>
                                <p>Esrautus</p>
                            </div>
                        </div>

                    </div>

                    <div className=' w-2/3 bg-gray-700 text-white font-semibold p-5  rounded-3xl '>
                        <div className='p-3 flex flex-row justify-between'>
                            <div >
                                <p className='text-3xl font-bold'>Earth</p>
                                <p>Californiya</p>
                            </div>
                            <div>
                                <p className='text-3xl font-bold'>Saturn</p>
                                <p>Esrautus</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='w-full h-fit p-0' >
                    <BottomNavBar />
                </div>
            </div >
        </>
    );
};

export default StartBooking;