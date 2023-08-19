import React, { useState } from 'react';
import BottomNavBar from '../components/molecules/BottomNavBar';
import Button from '../components/atoms/Button';
import TextField from '../components/atoms/TextField';

const Booking = () => {

    const [startPoint, setStartPoint] = useState('')
    const [endPoint, setEndPoint] = useState('')
    const [date, setDate] = useState('')
    const [persons, setPersons] = useState('')
    const [pack, setPack] = useState('')
    const [payMethod, setPayMethod] = useState('')

    return (
        < >
            <div className='place-items-center h-screen w-full flex flex-col justify-between py-5 px-7 bg-gradient-to-b from-[#011118] to-[#133F52]' >
                <div className="flex w-1/2 mt-8 border border-gray-500 rounded-lg shadow p-10 items-center justify-center">

                    <form className="w-full  max-w-lg place-items-center justify-between content-center">
                        <div>
                            <div className='w-full'>
                                <TextField
                                    lable={"Start Point"}
                                    placeholder={""}
                                    value={startPoint}
                                    setValue={setStartPoint}
                                    isError={false}
                                    errorMsg={""}
                                />
                                <TextField
                                    lable={"End Point"}
                                    placeholder={""}
                                    value={endPoint}
                                    setValue={setEndPoint}
                                    isError={false}
                                    errorMsg={""}
                                />
                            </div>

                            <div className='flex flex-wrap justify-between'>
                                <TextField
                                    lable={"Date"}
                                    placeholder={"DD/MM/YYYY"}
                                    value={date}
                                    setValue={setDate}
                                    isError={false}
                                    errorMsg={""}
                                />
                                <TextField
                                    lable={"No.of Persons"}
                                    placeholder={"00"}
                                    value={persons}
                                    setValue={setPersons}
                                    isError={false}
                                    errorMsg={""}
                                />
                            </div>

                            <div>
                                <TextField
                                    lable={"Select Package"}
                                    placeholder={""}
                                    value={pack}
                                    setValue={setPack}
                                    isError={false}
                                    errorMsg={""}

                                /><TextField
                                    lable={"Select payment method"}
                                    placeholder={""}
                                    value={payMethod}
                                    setValue={setPayMethod}
                                    isError={false}
                                    errorMsg={""}
                                />
                            </div>
                            <div>
                                <Button btnName={"All set"} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='w-full h-fit p-0 ' >
                    <BottomNavBar />
                </div>
            </div>
        </>
    );
};

export default Booking;