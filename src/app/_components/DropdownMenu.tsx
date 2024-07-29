import React, { ReactNode } from "react";
// import MenuItem from "./MenuItem";
import { IDropdownMenuProps } from "@/interfaces/idrop-down";
import MenuItem from "./menu-item";



const DropdownMenu: React.FC<IDropdownMenuProps> = ({
  isOpen,
  toggle,
  iconColor,
  label,
  children,
}) => (
  <>
    <MenuItem
      isOpen={isOpen}
      toggle={toggle}
      iconColor={iconColor}
      label={label}
    />
    {isOpen && <ul className="ml-8 flex flex-col my-2">{children}</ul>}
  </>
);

export default DropdownMenu;
