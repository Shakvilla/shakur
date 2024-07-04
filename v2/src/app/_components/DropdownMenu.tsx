import React, { ReactNode } from "react";
import MenuItem from "./MenuItem";
import { IDropdownMenuProps } from "@/interfaces/idrop-down";



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
    {isOpen && <ul className="ml-8">{children}</ul>}
  </>
);

export default DropdownMenu;
