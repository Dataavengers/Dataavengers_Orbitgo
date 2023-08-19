import React, { useState } from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import TextField from '../components/atoms/TextField';
import { SearchIcon } from '../assets/Icons';


const Discover = () => {

    const [search, setSearch] = useState('')

    return (
        < >
            <div className='place-items-center h-screen w-full flex flex-col justify-between py-5 px-7 bg-gradient-to-b from-[#011118] to-[#133F52] ' >
                <div className='w-full flex flex-row p-5 justify-center place-items-center'>
                    <div className='w-1/3'>
                        <TextField
                            placeholder={"Type here.."}
                            value={search}
                            setValue={setSearch}
                            isError={false}
                            errorMsg={""}
                        />
                    </div>

                    <button className='w-fit mb-3 mx-5 inline-flex justify-center items-center space-x-4 rounded-full bg-[#5591A9]' >
                        <SearchIcon />
                    </button>
                </div>

                <div className='w-full h-fit p-0' >
                    <BottomNavBar />
                </div>
            </div >
        </>
    );
};

export default Discover;