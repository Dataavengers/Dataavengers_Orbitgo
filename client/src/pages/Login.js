import React, { useState } from 'react';
import satelliteApproachingEarthImg from "../assets/img/dash.jpg";
// import homeIndicatorImg from "../assets/home-indicator.png";

import TextField from '../components/atoms/TextField';
import PasswordField from '../components/atoms/PasswordField';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const navigate = useNavigate();


    const onClickLoginBtn = () => {
        navigate('/dashboard');
    }

    return (
        <>
            <div>
                <img className="max-h-screen w-full object-cover" src={satelliteApproachingEarthImg} alt="satellite-approaching-earth" />

                <form
                    className=' sm:absolute sm:top-1/2 sm:left-1/2 xs:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:h-fit
                    h-[67%] w-[95%] sm:w-[360px] top-[33%] left-[2.5%] absolute top-3/10 left-5/100 bg-black bg-opacity-75 rounded-lg border-none p-6'
                >
                    <div className="border-none h-full">

                        {/* Title txt */}
                        <div className='text-white font-inter font-semibold text-3xl tracking-tighter text-center mb-7'>
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
                        <PasswordField
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
                            <Link to="/register" className='btn bg-transparent'>
                                Register
                            </Link>
                        </div>

                        {/* Login btn*/}
                        <div className='flex'>
                            <Button
                                btnName={"LOGIN"}
                                onClickButton={onClickLoginBtn}
                            />
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