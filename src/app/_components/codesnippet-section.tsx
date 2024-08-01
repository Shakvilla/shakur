"use client";
import React from "react";
import Image from "next/image";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
// import CodeSnippet from "./CodeSnippet";
import Link from "next/link";
import { ICodeSnippetSectionProps } from "@/interfaces/code-snippet-section-props";
import CodeSnippet from "./code-snippet";


const CodeSnippetSection: React.FC<ICodeSnippetSectionProps> = ({
  code,
  language,
}) => (
  <div className="mb-8">
    <div className="flex justify-between items-center">
      <div className="flex item-center gap-x-2">
        <Image
          src="/images/shakur.svg"
          alt="shakur"
          width="32"
          height="32"
          className="h-6 w-6 rounded-full"
        />
        <div className="text-sm">
          <Link
            href="https://github.com/Shakvilla"
            target="_blank"
            className="text-[#4D5BCE] font-medium"
          >
            @shakvilla
          </Link>
          <p className="text-[#607B96] text-xs">Created 5 months ago</p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-x-3 gap-y-1">
        <div className="flex text-xs items-center text-[#607B96] gap-x-1">
          <BiSolidMessageRounded />
          <p className="text-white text-xs ">details</p>
        </div>
        <div className="flex items-center text-xs text-[#607B96] gap-x-1">
          <FaStar />
          <p className="">3 stars</p>
        </div>
      </div>
    </div>
    <div className="mt-2 bg-[#011221] border border-[#1E2D3D] p-4 rounded-md">
      <CodeSnippet code={code} language={language} />
    </div>
  </div>
);

export default CodeSnippetSection;
