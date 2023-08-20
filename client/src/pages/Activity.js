import React from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import Barcode from '../assets/img/barcode.png'

const Activity = () => {

    return (
        < >
            <div className='place-items-center h-screen w-full flex flex-col justify-between py-5 px-7 bg-gradient-to-b from-[#011118] to-[#133F52] ' >
                <div className='w-full flex flex-row p-5 justify-center place-items-center text-white text-3xl'>
                    Activity
                </div>

                <div className='h-3/4 w-full px-10 grid grid-cols-3 gap-4 justify-between place-items-center'>

                    <div className=' w-2/3 bg-sky-300 font-semibold p-3 rounded-3xl '>
                        <div className='p-3'> <p>Explorer-class Starfare</p> </div>
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
                        <div className='p-3 flex flex-row justify-between '>
                            <div >
                                <p>02.00 AM</p>
                                <p>Mon, 20 June</p>
                            </div>
                            <div>
                                <p>05.00 PM</p>
                                <p>Wed, 3 July</p>
                            </div>
                        </div>

                        <div className='p-3 flex flex-row justify-between border border-black rounded-lg'>
                            <div >
                                <p>Boarding Pass</p>
                                <img src={Barcode} alt='barcode' width='w-full' />
                            </div>
                        </div>
                    </div>

                    <div className=' w-2/3 bg-sky-300 font-semibold p-3  rounded-3xl '>
                        <div className='p-3'> <p>Explorer-class Starfare</p> </div>
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
                        <div className='p-3 flex flex-row justify-between'>
                            <div >
                                <p>02.00 AM</p>
                                <p>Mon, 20 June</p>
                            </div>
                            <div>
                                <p>05.00 PM</p>
                                <p>Wed, 3 July</p>
                            </div>
                        </div>
                        <div className='p-3 flex flex-row justify-between border border-black rounded-lg'>
                            <div >
                                <p>Boarding Pass</p>
                                <img src={Barcode} alt='barcode' width='w-full' />
                            </div>
                        </div>
                    </div>

                    <div className=' w-2/3 bg-sky-300 font-semibold p-3  rounded-3xl '>
                        <div className='p-3'> <p>Explorer-class Starfare</p> </div>
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
                        <div className='p-3 flex flex-row justify-between'>
                            <div >
                                <p>02.00 AM</p>
                                <p>Mon, 20 June</p>
                            </div>
                            <div>
                                <p>05.00 PM</p>
                                <p>Wed, 3 July</p>
                            </div>
                        </div>
                        <div className='p-3 flex flex-row justify-between border border-black rounded-lg'>
                            <div >
                                <p>Boarding Pass</p>
                                <img src={Barcode} alt='barcode' width='w-full' />
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

export default Activity;