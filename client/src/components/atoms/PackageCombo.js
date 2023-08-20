import { useState } from 'react';

const PackCombo = ({ lable, placeholder, value, setValue, isError, errorMsg }) => {
    const packageOptions = [

        {
            value: '',
            text: '-- Choose --',
        },
        {
            value: 'explorer',
            text: 'Explorer-class Starfarer',
        },
        {
            value: 'interceptor',
            text: 'Interceptor-class Swiftwing',
        },

    ];

    const [selected, setSelected] = useState(packageOptions[0].value);

    const handleChange = event => {
        setSelected(event.target.value);
        console.log(event.target.value);
        // if (event.target.value == '') {
        //     console.log("hi")
        // }
    };

    return (
        <div className='mb-6 flex flex-col pt-0'>
            <label className="text-[#FEFFFF] font-inter font-medium text-base leading-5 tracking-tighter">
                {lable}
            </label>
            <select
                className='border border-blue-300 rounded-md p-4 mt-3 w-full py-2.5 px-3 text-[#9ccddc] text-opacity-70 font-inter font-medium text-lg leading-5 tracking-tighter bg-transparent'
                options={packageOptions}
                value={selected}
                placeholder={placeholder}
                onChange={handleChange}
            >
                {packageOptions.map(option => (
                    <option
                        className=' p-4 mt-3 w-full py-2.5 px-3 text-[#000000] text-opacity-70 font-inter font-medium text-lg leading-5 tracking-tighter bg-transparent '
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

export default PackCombo;