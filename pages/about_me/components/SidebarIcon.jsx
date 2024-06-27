import React from 'react';

const SidebarIcon = ({ IconComponent }) => (
    <div className="flex items-center w-full h-12 justify-center text-[#607B96]">
        <p className="text-2xl">
            <IconComponent />
        </p>
    </div>
);

export default SidebarIcon;
