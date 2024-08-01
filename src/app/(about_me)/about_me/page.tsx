"use client";
import React, { useState } from "react";

import PersonalInfo from "./personal-info/page";

const About: React.FC = () => {


  return (
    <div className="h-full flex flex-col bg-[#011627] text-white">
      
     
     <PersonalInfo />
    </div>
  );
};

export default About;
