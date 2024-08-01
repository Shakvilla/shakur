import { IArrowKeysProps } from "@/interfaces/iarrow-keys";
import React from "react";
import {
  RiArrowLeftSFill,
  RiArrowRightSFill,
  RiArrowUpSFill,
  RiArrowDownSFill,
} from "react-icons/ri";


const ArrowKeys: React.FC<IArrowKeysProps> = ({ onDirectionChange }) => {
  return (
    <div className="flex flex-col items-center lg:items-start 2xl:items-center justify-center p-4 glassmorphic rounded-lg border border-gray-700 mt-2">
      <p className="text-white text-xs 2xl:text-base"> {` // use keyboard arrows`}</p>
      <p className="text-white text-xs 2xl:text-base">
        { `// or arrows below to play`}
      </p>
      <div className="flex flex-col items-center mt-4">
        <button
          className="bg-gray-800 xl:px-6 lg:px-4 py-2 rounded"
          onClick={() => onDirectionChange("UP")}
        >
          <RiArrowUpSFill />
        </button>
        <div className="flex mt-2">
          <button
            className="bg-gray-800 xl:px-6 lg:px-4 py-2 rounded"
            onClick={() => onDirectionChange("LEFT")}
          >
            <RiArrowLeftSFill />
          </button>
          <button
            className="bg-gray-800 xl:px-6 lg:px-4 py-2 rounded xl:mx-2 mx-1"
            onClick={() => onDirectionChange("DOWN")}
          >
            <RiArrowDownSFill />
          </button>
          <button
            className="bg-gray-800 xl:px-6 lg:px-4 py-2 rounded"
            onClick={() => onDirectionChange("RIGHT")}
          >
            <RiArrowRightSFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArrowKeys;
