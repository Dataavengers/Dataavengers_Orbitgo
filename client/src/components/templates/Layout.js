import React from 'react';
import BottomNavBar from '../molecules/BottomNavBar';

const Layout = (props) => {
    return (
            <div className='max-h-screen h-screen overflow-hidden w-full flex flex-col justify-around items-center py-5 px-8 bg-gradient-to-b from-[#011118] to-[#133F52] sm:px-[30%]' >
                <div className='flex flex-col justify-start items-center w-full p-0 h-full' >
                        {props.children}
                </div>
                <div className='w-full h-fit absolute bottom-0 px-7 sm:px-[30%]' >
                    <BottomNavBar />
                </div>
            </div>
    );
};

export default Layout;