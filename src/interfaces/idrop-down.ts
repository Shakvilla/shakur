import React, { ReactNode } from "react";

export interface IDropdownMenuProps {
  isOpen: boolean;
  toggle: () => void;
  iconColor: string;
  label: string;
  children: ReactNode;
}
