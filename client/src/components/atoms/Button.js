import React from 'react';

const Button = ({onClickButton, btnName}) => {
    return (
        <button data-modal-target="small-modal" data-modal-toggle="small-modal"
            className='inline-flex justify-center items-center space-x-4 rounded-full bg-[#5591A9] w-full py-2 mx-0 my-5' 
            onClick={onClickButton} 
        >
            <div className='text-white font-inter font-semibold text-lg leading-7 tracking-tight'>
                {btnName}
            </div>
        </button>
    );
};

export default Button;