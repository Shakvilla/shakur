import { useState } from 'react';

import React from 'react'
import SidebarIcon from '../SidebarIcon'
import { MdArrowDropDown, MdClose } from "react-icons/md";
import DropdownMenu from '../DropdownMenu';
import ContactInfo from '../ContactInfo';
import { IoGameController } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { RiExchange2Fill } from "react-icons/ri";
import Link from 'next/link'

const LeftSidebar = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };


  return (
      <section className="w-full flex lg:w-2/12">
          <div className="lg:w-2/12 border-r border-gray-700 h-full">
              <nav className="flex flex-col">
                  <SidebarIcon IconComponent={AiFillCode} />
                  <SidebarIcon IconComponent={RiExchange2Fill} />
                  <SidebarIcon IconComponent={IoGameController} />
              </nav>
          </div>
          <div className="text-[#607B96] lg:w-10/12 border-r border-gray-700 h-full">
              <div className="mt-0">
                  <div className="p-2 flex justify-start items-center text-white border-y border-gray-700">
                      <div className="text-2xl">
                          <MdArrowDropDown />
                      </div>
                      <p className="">personal-info</p>
                  </div>
                  <ul className="ml-4 px-2">
                      <DropdownMenu isOpen={openMenu === 'bio'} toggle={() => handleMenuClick('bio')} iconColor="text-[#E99287]" label="bio">
                          <Link href="#" className="my-2">About Me</Link>
                          <Link href="#" className="my-2">Skills</Link>
                      </DropdownMenu>
                      <DropdownMenu isOpen={openMenu === 'interests'} toggle={() => handleMenuClick('interests')} iconColor="text-[#43D9AD]" label="interests">
                          <li className="mt-2">Coding</li>
                          <li className="mt-2">Gaming</li>
                      </DropdownMenu>
                      <DropdownMenu isOpen={openMenu === 'education'} toggle={() => handleMenuClick('education')} iconColor="text-[#3A49A4]" label="education">
                          <li className="mt-2">School</li>
                          <li className="mt-2">Certifications</li>
                      </DropdownMenu>
                  </ul>
                  <ContactInfo />
              </div>
          </div>
      </section>
  )
}

export default LeftSidebar