import React from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import marsImg from '../assets/img/mars.png'

const Info = () => {


    return (
        < >
            <div className='place-items-center h-screen w-full flex flex-col justify-between py-5 px-7 bg-gradient-to-b from-[#011118] to-[#133F52] ' >
                <div className='w-fit flex flex-row pt-20 justify-around place-items-center'>
                    <div >
                        <img className='w-5/12' src={marsImg} alt='Mars' />
                    </div>
                    <div className='text-white text-4xl mr-10'>Mars</div>
                </div>
                <div className='w-1/2 mb-20'>
                    <p className='py-5 mt-4 text-white text-justify text-xl'>
                        Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.
                    </p>
                    <p className='py-5 mt-4 text-white text-justify text-xl'>
                        Mars has a thin atmosphere primarily composed of carbon dioxide. Its temperatures are much colder than Earth's, with average temperatures around -80 degrees Fahrenheit (-62 degrees Celsius). However, temperature variations can be quite dramatic, and there's evidence of seasonal variations.
                    </p>
                </div>

                <div className='w-full h-fit p-0' >
                    <BottomNavBar />
                </div>
            </div >
        </>
    );
};

export default Info;