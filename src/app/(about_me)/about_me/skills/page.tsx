"use client";
import {  SkillsCard } from "@/app/_components/skillCard";
import { TypewriterEffectSmoothDemo } from "@/app/_components/typewriter-demo";
import IconCloud from "@/components/ui/icon-cloud";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Skills: React.FC = () => {

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];
  return (
    // WIP: Responsiveness to be fixed later
    <div className=" flex flex-col bg-[#011627] text-white relative">
      <section className="w-full relative h-full">
        <div className="px-4 flex justify-start items-center text-[#607B96] border-y border-gray-700">
          <div className="flex  gap-x-2 text-sm pr-2 justify-between items-center xl:w-4/12 border-r border-gray-700 py-2.5">
            <p className="">my-skills</p>
            <MdClose />
          </div>
        </div>

        <div className="p-4">
          <TypewriterEffectSmoothDemo />
        </div>

        <div className="relative flex  w-full lg:max-w-[32rem] 2xl:max-w-full items-center justify-center overflow-hidden rounded-lg   px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>

        <div className="relative mx-auto px-8 xl:max-w-[32rem] 2xl:max-w-5xl ">
          <SkillsCard />
        </div>
      </section>
    </div>
  );
};

export default Skills;
