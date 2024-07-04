import React from 'react';
import MenuItem from './MenuItem';

const DropdownMenu = ({ isOpen, toggle, iconColor, label, children }) => (
    <>
        <MenuItem isOpen={isOpen} toggle={toggle} iconColor={iconColor} label={label} />
        {isOpen && <ul className="ml-8">{children}</ul>}
    </>
);

export default DropdownMenu;
