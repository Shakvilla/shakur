import React from "react";
import CodeSnippetSection from "./codesnippet-section";
// import CodeSnippetSection from "../CodeSnippetSection";

const RightSidebar = () => {
  const code1 = `export function lowerCase(str: string): string {
  return str.toLowerCase();
}
`;
  const code2 = `export const toUpperCase = (str: string): string => {
  return str ? str.toUpperCase() : str;
};
`;
  return (
    <section className="w-full xl:w-2/5 text-sm border-l border-[#1E2D3D]">
      <div className="flex justify-center xl:justify-start py-2.5 items-center border-y border-gray-700">
        <p className="text-[#607B96] pl-6">code-snippet-showcase:</p>
      </div>
      <div className="relative lg:mx-6 p-3">
        <CodeSnippetSection code={code1} language="typescript" />
      </div>
      <div className="relative lg:mx-6 p-3">
        <CodeSnippetSection code={code2} language="typescript" />
      </div>
    </section>
  );
};

export default RightSidebar;
