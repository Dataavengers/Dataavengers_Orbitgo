import React from 'react';

const TextField = ({lable, placeholder, value, setValue, isError, errorMsg}) => {

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value)
      };

    return (
        <div className="mb-6 flex flex-col pt-0">
            <label className="text-[#FEFFFF] font-inter font-medium text-base leading-5 tracking-tighter">
                {lable}
            </label>
            <input 
                className="border border-blue-300 rounded-md p-4 mt-3 w-full py-2.5 px-3 text-[#9ccddc] text-opacity-50 font-inter font-medium text-xs leading-5 tracking-tighter bg-transparent" 
                id={lable}
                type="text" 
                placeholder={placeholder} 
                onChange={handleChange}
                value={value}
            />
            { isError
                ?<>
                    <p className="text-red-500 text-xs italic pt-1.5">{errorMsg}</p>
                </>
                :<></>
            }
        </div>
    );
};
export default TextField;