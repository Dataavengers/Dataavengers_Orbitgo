import React from 'react';
import satelliteApproachingEarthImg from "../assets/satellite-approaching-earth.png";
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='' >
            <img className="h-screen w-full object-cover" src={satelliteApproachingEarthImg} alt="satellite-approaching-earth" />
            <div className='absolute bottom-[20%] left-0 w-full h-full border-none p-6' onClick={() => {navigate('/login')}} >
                <div className='text-white flex flex-col justify-end items-left h-full w-full space-y-3'>
                    <h1 className='font-inter text-[3.75rem] font-bold leading-[3.75rem] tracking-[0.075rem]'>
                        Go beyond
                    </h1>
                    <div className='flex space-x-3' >
                        <h2 className='text-efeff7 font-inter text-[1.5rem] font-bold leading-[3.75rem] tracking-[0.03rem]' >
                            with
                        </h2>
                        <h2 className='text-[#5591A9] font-inter text-[2.25rem] font-bold leading-[3.75rem] tracking-[-0.045rem]' >
                            ORBITGO
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;