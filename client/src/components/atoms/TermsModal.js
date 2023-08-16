import React from 'react';
import Button from './Button';

const TermsModal = ({visible, onClose}) => {

    if(!visible) return null;

    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose();
    }

    return (
        <>
            <div id="container"  class="fixed inset-0  h-screen flex justify-center items-end sm:items-center" onClick={handleOnClose}>
                <div className='p-2 w-full h-[80%] rounded-t-lg rounded-b-0 bg-[#06141A] flex flex-col justify-between sm:w-[360px] sm:h-[90%] sm:rounded-lg'>
                    <div className='h-[4rem]'></div>
                    <div className='text-white font-inter text-[0.85rem] font-normal leading-[1.25rem] tracking-[0.0175rem] h-[90%] px-6 text-left overflow-y-auto flex flex-col space-x-0 space-y-4'>
                        
                        <p>Terms and Conditions for The ORBITGO Space Travel App</p>
                        
                        <p>Welcome to the ORBITGO Space Travel App. By using the App, you agree to be bound by the following terms and conditions. Please read them carefully before using the App.</p>

                        <p className='flex flex-col spcae-y-2'> 
                            <p>1. Acceptance of Terms</p> 
                            <p> By accessing or using the App, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any of these terms, you are prohibited from using the App.</p>
                        </p>

                        <p className='flex flex-col spcae-y-2'> 
                            <p> 2. Use of the App </p>
                            <p> The App is intended solely for the purpose of simplifying the booking process for interplanetary travel tickets. You may not use the App for any other purpose, including any illegal, fraudulent, or unauthorized activities.</p>
                        </p>

                        <p className='flex flex-col spcae-y-2'> 
                            <p>3. User Account</p>
                            <p> To use certain features of the App, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to accept responsibility for all activities that occur under your account. </p>
                        </p>

                        <p className='flex flex-col spcae-y-2'> 
                            <p> 4. Privacy </p>
                            <p> Your use of the App is also governed by our Privacy Policy, which can be found on the App. By using the App, you consent to the collection, use, and sharing of your information as described in the Privacy Policy. </p>
                        </p>

                        <p className='flex flex-col spcae-y-2'> 
                            <p> 5. Booking and Payment </p>
                            <p>The App allows you to book interplanetary travel tickets. By making a booking, you agree to abide by the terms and conditions set by the respective space travel providers. Payment for bookings must be made through the payment methods provided on the App. </p>
                        </p>

                    </div>
                    <div className='h-[6rem] px-6'>
                        <Button 
                            btnName={"Accept"}
                            onClickButton={()=>{}}
                        />
                    </div>
                </div>
        
            </div>
        </>
    );
};

export default TermsModal;