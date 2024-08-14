'use client'
import { ReactTyped } from "react-typed";
import { TbArrowBigRightLines } from "react-icons/tb";
import Game from "@/components/game";
import { FaChevronRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>
      <div className="flex h-screen  flex-wrap justify-center items-center py-10 px-4 sm:py-16 sm:px-6 md:py-20 ">
        <section
          id=""
          className="w-full lg:w-1/2 xl:pl-[275px] 2xl:pl-[310px] xl:px-8"
        >
          <p className="2xl:text-lg text-[#E5E9F0] my-4 ">Hi all. I am</p>
          <h1 className=" text-3xl sm:text-3xl font-normal xl:text-5xl  2xl:text-8xl text-[#E5E9F0]">
            Abdul Shekur A Clement
          </h1>
          <div className="flex  items-center gap-4 text-base xl:text-xl 2xl:text-3xl tracking-widest text-[#43D9AD] xl:text-[#4d5bce]  font-normal">
            <div className="flex items-center gap-1  my-2 xl:my-8 2xl:text-xl">
              {/* <span>{`_skills:`}</span> */}
              <FaChevronRight />
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
              strings={["Fullstack Developer"]}
              typeSpeed={100}
              typedRef={function noRefCheck() {}}
            />
          </div>
          <div className="mt-12 xl:mt-6 text-[#607B96]">
            <p className=" mb-1 text-xs md:text-sm">
              {`// complete the game to continue`}
            </p>
            <p className="text-xs mb-1 md:text-sm">
              {`// you can also see it on my Github page`}
            </p>
            <p className="text-xs ">
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-green-400">githubLink</span> = &quot;
              <a
                href="https://github.com/shakvilla"
                className="text-[#E99287] underline"
              >
                https://github.com/shakvilla
              </a>
              &quot;
            </p>
          </div>
        </section>

        <section className="  relative w-full lg:w-1/2 md:flex justify-start items-center mt-8 md:mt-0">
          <div className="relative z-10 w-full h-full">
            {/* <div className="hidden md:block absolute w-[90%] max-w-[479.6px] h-[342.27px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-background-blur"></div> */}

            <div className="  w-full max-w-[510px] 2xl:max-w-[810px] 2xl:max-h-[1400px] mx-auto rounded-lg">
              <Game />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
