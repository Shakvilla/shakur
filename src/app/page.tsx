'use client'
import { ReactTyped } from "react-typed";
import { TbArrowBigRightLines } from "react-icons/tb";
import Game from "@/components/game";

export default function Home() {
  return (
    <div className="flex h-full  flex-wrap items-center justify-between py-10 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
      <section id="hello" className="w-full lg:w-1/2">
        <p className="2xl:text-6xl text-[#E5E9F0]">Hi all. I am</p>
        <h1 className="2xl:text-9xl text-3xl sm:text-4xl font-medium 2xl:font-extrabold 2xl:tracking-wide text-[#E5E9F0]">
          Abdul Shekur
        </h1>
        <div className="flex 2xl:text-6xl items-center gap-4 text-xs md:text-sm lg:text-lg tracking-widest text-[#4D5BCE]">
          <div className="flex items-center gap-1 text-xs md:text-sm lg:text-base 2xl:text-6xl">
            <h2 className=" ">_skills:</h2>
            <TbArrowBigRightLines />
          </div>
          <ReactTyped
            backSpeed={50}
            onBegin={function noRefCheck() {}}
            onComplete={function noRefCheck() {}}
            onDestroy={function noRefCheck() {}}
            onLastStringBackspaced={function noRefCheck() {}}
            onReset={function noRefCheck() {}}
            onStart={function noRefCheck() {}}
            onStop={function noRefCheck() {}}
            onStringTyped={function noRefCheck() {}}
            onTypingPaused={function noRefCheck() {}}
            onTypingResumed={function noRefCheck() {}}
            loop={true}
            strings={[
              "Frontend",
              "Backend",
              "UI/UX Design.",
              "Systems Design.",
              "Microservices.",
            ]}
            typeSpeed={100}
            typedRef={function noRefCheck() {}}
          />
        </div>
        <div className="mt-12 text-[#607B96]">
          <p className=" mb-1 text-xs md:text-sm xl:text-base 2xl:text-4xl">
            complete the game to continue
          </p>
          <p className="text-xs mb-1 md:text-sm xl:text-lg 2xl:text-4xl">
            you can also see it on my Github page
          </p>
          <p className="text-xs md:text-sm  xl:text-lg 2xl:text-4xl">
            <span className="text-[#4D5BCE]">const</span>{" "}
            <span className="text-green-400">githubLink</span> = &quot;
            <a href="https://github.com/shakvilla" className="text-[#E99287]">
              https://github.com/shakvilla
            </a>
            &quot;
          </p>
        </div>
      </section>

      <section className="  relative w-full lg:w-1/2 md:flex justify-start items-center mt-8 md:mt-0">
        <div className="relative z-10 w-full h-full">
          <div className="absolute w-[90%] max-w-[479.6px] h-[342.27px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-background-blur"></div>

          <div className="bg-gradient-to-t from-teal-400 via-emerald-500 to-green-600 w-full max-w-[510px] 2xl:max-w-[910px] 2xl:max-h-[1200px] mx-auto rounded-lg">
            <Game />
          </div>
        </div>
      </section>
    </div>
  );
}
