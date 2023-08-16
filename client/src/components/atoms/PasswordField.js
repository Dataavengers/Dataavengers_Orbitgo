import React from 'react';
import { ClosedEyeIcon } from '../../assets/Icons';

const PasswordField = ({lable, placeholder, value, setValue, isPasswordHidden, setIsPasswordHidden, isError, errorMsg}) => {
    const handleChange = event => {
        setValue(event.target.value);
        console.log(event.target.value)
      };
    return (
        <div className="mb-6 flex flex-col pt-0">
            
            <label className="text-[#FEFFFF] font-inter font-medium text-base leading-5 tracking-tighter">
                {lable}
            </label>

            <div className='relative'>

            <input 
                className="border border-blue-300 rounded-md p-4 mt-3 w-full py-2.5 px-3 text-blue-300 font-inter font-medium text-xs leading-5 tracking-tighter bg-transparent" 
                id={lable}
                type={isPasswordHidden?'password':'text'} 
                placeholder={placeholder} 
                onChange={handleChange}
                value={value}
                />
            <button className='pointer absolute inset-y-0 right-0 top-5 pr-4 flex items-center text-sm leading-5' onClick={()=>{setIsPasswordHidden(!isPasswordHidden)}}>
                { isPasswordHidden 
                    ? <ClosedEyeIcon />
                    : <></>
                }
            </button>
            </div>

            { isError
                ?<>
                     <p className="text-red-500 text-xs italic pt-1.5">{errorMsg}</p>
                </>
                :<></>
            }
        </div>
    );
};

export default PasswordField;