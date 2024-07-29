import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const ContactInfo = () => (
  <div className="mt-4 px-2">
    <div className="p-2 flex justify-start items-center text-white border-y border-gray-700">
      <div className="text-2xl">
        <MdArrowDropDown />
      </div>
      <p className="text-[#607B96]">contacts</p>
    </div>
    <li className="my-2 text-base flex items-center gap-2">
      <p className="text-[#607B96] w-4 h-3">
        <FaEnvelopeOpenText />
      </p>
      <p className="text-[#607B96]">me@shakur.com</p>
    </li>
    <li className="my-2 text-base flex items-center gap-2">
      <p className="text-[#607B96] w-4 h-3">
        <IoPhonePortraitOutline />
      </p>
      <p className="text-[#607B96]">+233240472060</p>
    </li>
  </div>
);

export default ContactInfo;
