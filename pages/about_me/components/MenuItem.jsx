import React from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { IoFolderOpen } from "react-icons/io5";

const MenuItem = ({ isOpen, toggle, iconColor, label }) => (
    <>
        <li className="mt-2 flex items-center gap-2 cursor-pointer" onClick={toggle}>
            <p className="text-[#607B96] w-4 h-3">{isOpen ? <MdArrowDropDown /> : <FaChevronRight />}</p>
            <p className={`w-4 h-3 ${iconColor}`}><IoFolderOpen /></p>
            <p className="text-[#607B96]">{label}</p>
        </li>
    </>
);

export default MenuItem;
