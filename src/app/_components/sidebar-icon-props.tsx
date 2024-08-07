"use client";
import { SidebarIconProps } from "@/interfaces/isidebar-icon-props";
import React from "react";


const SidebarIcon: React.FC<SidebarIconProps> = ({ IconComponent, className }) => (
  <div className="flex items-center w-full h-14 justify-center text-[#607B96]">
    <p className="text-2xl">
      <IconComponent />
    </p>
  </div>
);

export default SidebarIcon;
