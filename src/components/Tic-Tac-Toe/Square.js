import React from 'react';

const Square = ({ value, handleClick }) => {
    return (
        <div
            onClick={handleClick}

            className='border-2 border-gray-200 h-[100px] w-45 flex justify-center items-center cursor-pointer text-black font-bold text-xl' >
            {value}
        </div>
    );
}

export default Square;
