import React, { useState } from 'react';
import satelliteApproachingEarthImg from "../assets/satellite-approaching-earth.png";
// import homeIndicatorImg from "../assets/home-indicator.png";

import TextField, { TextFieldPassword } from '../components/TextField';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const onClickRegisterBtn = () => {
        
    } 

    const onClickLoginBtn = () => {
        
    } 

    return (
        <>
            <div >
                <img className="max-h-screen w-full object-cover" src={satelliteApproachingEarthImg} alt="satellite-approaching-earth" />
            
                <form 
                    className=' sm:absolute sm:top-1/2 sm:left-1/2 xs:transform sm:-translate-x-1/2 sm:-translate-y-1/2 
                    h-[67%] w-[95%] sm:w-[360px] top-[33%] left-[2.5%] absolute top-3/10 left-5/100 bg-black bg-opacity-75 rounded-lg border-none p-6'
                >
                    <div className="border-none h-full">

                        {/* Title txt */}
                        <div className='mb-4 text-white font-inter font-semibold text-3xl tracking-tighter text-center mb-7'>
                            ORBITGO
                        </div>
                        
                        {/* UserName text field */}
                        <TextField
                            lable={"Username"}
                            placeholder={"Please enter your username"}
                            value={userName}
                            setValue={setUserName}
                            isError={false}
                            errorMsg={""}
                        />

                        {/* Password text field */}
                        <TextFieldPassword
                            lable={"Password"}
                            placeholder={"Please enter your password"}
                            value={password}
                            setValue={setPassword}
                            isPasswordHidden={isPasswordHidden}
                            setIsPasswordHidden={setIsPasswordHidden}
                            isError={false}
                            errorMsg={""}
                        />
                        
                        {/* Register Btn */}
                        <div className='text-[#9CCDDC] font-inter font-medium text-xs leading-5 tracking-tighter flex pt-2' >
                            <div className='flex-1'></div>
                            <button className='btn bg-transparent' onClick={onClickRegisterBtn} >
                                Register
                            </button>
                        </div>

                        {/* Login btn*/}
                        <div className='flex'>
                            <button 
                                className='inline-flex justify-center items-center space-x-4 rounded-full bg-[#5591A9] w-full py-2 mx-0 my-5' 
                                onClick={onClickLoginBtn} 
                            >
                                <div className='text-white font-inter font-semibold text-lg leading-7 tracking-tight'>
                                    LOGIN
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* <div className=''>
                        <img className="" src={homeIndicatorImg} alt="home-indicator" />
                    </div> */}
                </form>
            </div>
        </>
    );
};

export default Login;