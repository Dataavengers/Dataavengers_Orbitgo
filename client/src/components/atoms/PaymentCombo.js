import { useState } from 'react';

const PayCombo = ({ lable, placeholder, value, setValue, isError, errorMsg }) => {
    const paymentOptions = [

        {
            value: '',
            text: '-- Choose --',
            image: { avatar: true, src: '../../assets/img/vis.png' },
        },
        {
            value: 'visa',
            text: 'VISA',
            image: { avatar: true, src: '../../assets/img/vis.png' },
        },
        {
            value: 'master',
            text: 'Master',
            image: { avatar: true, src: '../../assets/img/mast.jpg' },
        },

    ];

    const [selected, setSelected] = useState(paymentOptions[0].value);

    const handleChange = event => {
        setSelected(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className='mb-6 flex flex-col pt-0'>
            <label className="text-[#ffffff] font-inter font-medium text-base leading-5 tracking-tighter">
                {lable}
            </label>
            <select
                className='border border-blue-300 rounded-md p-4 mt-3 w-full py-2.5 px-3 text-[#9ccddc] text-opacity-70 font-inter font-medium text-lg leading-5 tracking-tighter bg-transparent'
                options={paymentOptions}
                value={selected}
                placeholder={placeholder}
                onChange={handleChange}
            >
                {paymentOptions.map(option => (
                    <option
                        className=' p-4 mt-3 w-full py-2.5 px-3 text-[#000000] text-opacity-70 font-inter font-medium text-lg leading-5 tracking-tighter  bg-transparent '
                        key={option.value}
                        value={option.value}
                    >
                        {option.text}
                    </option>
                ))}
            </select>
            {isError
                ? <>
                    <p className="text-red-500 text-xs italic pt-1.5">{errorMsg}</p>
                </>
                : <></>
            }
        </div>
    );
};

export default PayCombo;