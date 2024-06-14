import React from 'react';
import { RiArrowLeftSFill, RiArrowRightSFill, RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

const ArrowKeys = ({ onDirectionChange }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 glassmorphic rounded-lg border border-gray-700 mt-4">
            <p className="text-white">// use keyboard</p>
            <p className="text-white">// arrows to play</p>
            <div className="flex flex-col items-center mt-4">
                <button className="bg-gray-800 px-3 py-2 rounded" onClick={() => onDirectionChange('UP')}>
                    <RiArrowUpSFill />

                </button>
                <div className="flex mt-2">
                    <button className="bg-gray-800 p-2 rounded" onClick={() => onDirectionChange('LEFT')}><RiArrowLeftSFill />
</button>
                    <button className="bg-gray-800 p-2 rounded mx-2" onClick={() => onDirectionChange('DOWN')}><RiArrowDownSFill />


</button>
                    <button className="bg-gray-800 p-2 rounded" onClick={() => onDirectionChange('RIGHT')}><RiArrowRightSFill />
</button>
                </div>
            </div>
        </div>
    );
};

export default ArrowKeys;
