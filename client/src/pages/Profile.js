import React from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import Button from '../components/atoms/Button';


const Profile = () => {

    return (
        < >
            <div className='place-items-center h-screen w-full flex flex-col justify-between py-5 px-7 bg-gradient-to-b from-[#011118] to-[#133F52]' >
                <div class=" w-1/2 mt-8  border-gray-500 rounded-lg shadow">

                    <div class="flex flex-col items-center pb-10 ">

                        {/* Image & Name display */}
                        <div className='flex flex-row mt-9'>
                            <img class="w-24 h-24 m-3 rounded-full shadow-lg" src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' alt="img" />
                            <h5 class=" pt-10 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        </div>

                        <div class="flex flex-col p-10 m-1">
                            <a href="/updatename" className="inline-flex px-20 py-3 m-3  text-base font-medium text-lef text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700  ">Update your Name </a>

                            <a href="/updateuser" className="inline-flex px-20 py-3 m-3  text-base font-medium text-lef text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700  ">Update your Username </a>

                            <a href="updatepass" className="inline-flex px-20 py-3 m-3  text-base font-medium text-lef text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700  ">Update your Password </a>
                            <div>
                                <Button btnName={'LOGOUT'} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full h-fit p-0' >
                    <BottomNavBar />
                </div>
            </div>
        </>
    );
};

export default Profile;