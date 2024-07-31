import React, { useState } from "react";
// import SidebarIcon from "../SidebarIcon";
import { MdArrowDropDown, MdClose } from "react-icons/md";
// import DropdownMenu from "../DropdownMenu";
// import ContactInfo from "../ContactInfo";
import { IoGameController } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { RiExchange2Fill } from "react-icons/ri";
import Link from "next/link";
import SidebarIcon from "./sidebar-icon-props";
import DropdownMenu from "./DropdownMenu";
import ContactInfo from "./contact-info";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const LeftSidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <section className="w-full flex xl:min-w-[275px] 2xl:max-w-[310px] 2xl:min-w-[310px] xl:max-w-[275px]">
      <div className="hidden xl:block  2xl:w-[6rem] border-r border-gray-700 h-full">
        <nav className="flex flex-col items-center justify-center mt-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex  items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  {/* <Home className="h-5 w-5" /> */}
                  <SidebarIcon IconComponent={RiExchange2Fill}  />

                  <span className="sr-only"></span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">About Me</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* <SidebarIcon IconComponent={IoGameController} /> */}
        </nav>
      </div>
      <div className="hidden xl:block text-[#607B96] xl:w-full border-r border-gray-700 h-full">
        <div className="mt-0">
          <div className="p-2 flex justify-start items-center text-white border-y border-gray-700">
            <div className="text-2xl">
              <MdArrowDropDown />
            </div>
            <p className="">personal-info</p>
          </div>
          <ul className="ml-4 px-2">
            <DropdownMenu
              isOpen={openMenu === "bio"}
              toggle={() => handleMenuClick("bio")}
              iconColor="text-[#E99287]"
              label="bio"
            >
              <Link href="/about_me/personal-info">Info</Link>
              <Link href="/about_me/skills">Skills</Link>
            </DropdownMenu>
            <DropdownMenu
              isOpen={openMenu === "interests"}
              toggle={() => handleMenuClick("interests")}
              iconColor="text-[#43D9AD]"
              label="interests"
            >
              <li className="mt-2">Coding</li>
              <li className="mt-2">Gaming</li>
            </DropdownMenu>
            <DropdownMenu
              isOpen={openMenu === "education"}
              toggle={() => handleMenuClick("education")}
              iconColor="text-[#3A49A4]"
              label="education"
            >
              <li className="mt-2">School</li>
              <li className="mt-2">Certifications</li>
            </DropdownMenu>
          </ul>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
