import React, { useState } from 'react';
import satelliteApproachingEarthImg from "../assets/satellite-approaching-earth.png";
import TextField from '../components/atoms/TextField';
import PasswordField from '../components/atoms/PasswordField';
import TermsModal from '../components/atoms/TermsModal';
import Button from '../components/atoms/Button';

const Register = () => {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');

    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isComfirmPasswordHidden, setIsComfirmPasswordHidden] = useState(true);
    const [showTermsModal,setShowTermsModal] = useState(false);
    
    const onClickShowButton = (e) => {
        e.preventDefault();
        setShowTermsModal(!showTermsModal);
    }

    const onClickRegisterBtn = () => {
        
    }

    const handleOnCloseTermsModal = () => setShowTermsModal(false);

    return (
        <>
            <div className='' >
                <img className="h-screen w-full object-cover" src={satelliteApproachingEarthImg} alt="satellite-approaching-earth" />
            
                <form 
                    className=' absolute sm:top-1/2 sm:left-1/2 xs:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:h-fit 
                    h-[90%] w-[95%] sm:w-[360px] top-[10%] left-[2.5%] top-3/10 left-5/100 bg-black bg-opacity-75 rounded-lg border-none p-6'
                >
                    <div className="border-none h-full">

                        {/* Title txt */}
                        <div className=' text-white font-inter font-semibold text-3xl tracking-tighter text-center mb-7'>
                            ORBITGO
                        </div>

                        {/* Name text field */}
                        <TextField
                            lable={"Name"}
                            placeholder={"Please enter your name"}
                            value={name}
                            setValue={setName}
                            isError={false}
                            errorMsg={""}
                        />

                        
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

                        {/* Comfirm-Password text field */}
                        <PasswordField
                            lable={"Confirm Password"}
                            placeholder={"Please confirm your password"}
                            value={comfirmPassword}
                            setValue={setComfirmPassword}
                            isPasswordHidden={isComfirmPasswordHidden}
                            setIsPasswordHidden={setIsComfirmPasswordHidden}
                            isError={false}
                            errorMsg={""}
                        />
                        
                        {/* Terms& Conditions */}
                        <div className='text-white font-inter font-medium text-xs leading-5 tracking-tighter pt-2 text-center' >
                            <p className='text-center'>
                                By singing up you are agree with our &nbsp;          
                                <button onClick={onClickShowButton} className='btn bg-transparent text-[#9CCDDC]'>
                                    Terms& Conditions
                                </button>
                            </p>
                        </div>

                        {/* Register btn*/}
                        <div className='flex'>
                            <Button
                                btnName={"SIGNUP"}
                                onClickButton={onClickRegisterBtn}
                            />

                        </div>
                    </div>
                    {/* <div className=''>
                        <img className="" src={homeIndicatorImg} alt="home-indicator" />
                    </div> */}
                </form>
            </div>
            <TermsModal visible={showTermsModal} onClose={handleOnCloseTermsModal} />
        </>
    );
};

export default Register;