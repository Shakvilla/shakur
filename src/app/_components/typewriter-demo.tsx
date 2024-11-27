"use client";

import { TypewriterEffect } from "./typewriter-effect";

  /**
   * A demo component that shows off the TypewriterEffect component with a list of words.
   *
   * @returns A JSX element containing the TypewriterEffect component with the words.
   */
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Tools,",
    },
    {
      text: "frameworks,",
    },
    {
      text: "libraries",
    },
    {
      text: "packages,",
    },
    {
        text: "languages"
    },
    {
 
        text: '&'
    },
    {
      text: "software",
      className: "text-blue-500 ",
    },
    {
      text: "I",
      className: "text-blue-500 ",
    },
    {
      text: "use",
      className: "text-blue-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
     
      <TypewriterEffect words={words} />
     
    </div>
  );
}
