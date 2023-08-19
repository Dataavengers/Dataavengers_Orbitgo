import React, { useState } from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import Button from '../components/atoms/Button';
import TextField from '../components/atoms/TextField';

const UpdatePassword = () => {

    const [pass, setPass] = useState('')

    return (
        < >
            <div className='place-items-center h-screen w-full flex flex-col justify-between py-5 px-7 bg-gradient-to-b from-[#011118] to-[#133F52]' >
                <div class=" w-1/2 mt-8 border border-gray-500 rounded-lg shadow">

                    <div class="flex flex-col items-center pb-10 ">

                        <div className='flex flex-row mt-9'>
                            <h5 class=" pt-10 text-2xl font-medium text-gray-900 dark:text-white">Change Your Password</h5>
                        </div>

                        <div class="flex flex-col justify-between place-items-center p-10 m-1">
                            <div className='w-96'>
                                <TextField
                                    placeholder={"Enter your new password"}
                                    value={pass}
                                    setValue={setPass}
                                    isError={false}
                                    errorMsg={""}
                                />
                            </div>

                            <div className=' w-1/2'>
                                <Button btnName={'Save'} />
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

export default UpdatePassword;