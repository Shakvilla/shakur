"use client";
import IconCloud from "@/components/ui/icon-cloud";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Skills: React.FC = () => {

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
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
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
  return (
    <div className="min-h-screen flex flex-col bg-[#011627] text-white">
      <section className="w-full">
        <div className="px-4 flex justify-start items-center text-[#607B96] border-y border-gray-700">
          <div className="flex pr-2 justify-between items-center w-4/12 border-r border-gray-700 py-2">
            <p>my-skills</p>
            <MdClose />
          </div>
        </div>

         <div className="p-4">
          <h1 className="font-bold text-gray-300">These icons represent the tech stack I use these days</h1>
        </div>

        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </section>
    </div>
  );
};

export default Skills;
