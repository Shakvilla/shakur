
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IProjectCardProps } from "@/interfaces/project-card";
import Image from "next/image";
const ProjectCard: React.FC<IProjectCardProps> = ({
  
  title,
  description,
  imageUrl,
  project,
  projects,
  techStacks,
}) => {

  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-[] rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col  bg-[#011221] border border-[#1E2D3D] rounded-lg overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.imageUrl}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active?.title}-${id}`}
                      className="font-medium text-[#607B96]  text-base"
                    >
                      {active?.title}
                    </motion.h3>
                  
                      <motion.p
                        layoutId={`description-${active?.description}-${id}`}
                        className="text-[#607B96]  text-xs my-2 	"
                      >
                        {active?.description}
                      </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active?.ctaLink}
                    target="_blank"
                    className="bg-[#1c2b3a] px-2 py-1 rounded font-normal text-sm text-white mt-2"
                  >
                    {active?.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="relative w-full h-full m-2">
        <motion.h3
          layoutId={`title-${title}-${id}`}
          className="text-sm text-[#4D5BCE]"
        >
          {title}
        </motion.h3>
        {/* <h3 className="text-sm text-[#4D5BCE]">{title}</h3> */}

        <div className=" bg-[#011221] border border-[#1E2D3D] rounded-lg mt-2">
          {/* <div className="w-full h-28  rounded-t-md  bg-gray-800"> */}
          <motion.div
            layoutId={`image-${title}-${id}`}
            className=" relative w-full h-32  rounded-t-md  bg-gray-800"
          >
            <div></div>

            <Image
              fill
              // width={0}
              // height={0}
              src={imageUrl}
              alt={title}
              className=" h-full w-full  object-cover object-top rounded-t-md"
            />
          </motion.div>
          {/* <Image
              src={imageUrl}
              alt={title}
              className=" h-full  object-cover rounded-t-md"
            /> */}
          {/* </div> */}

          <div className="mt-4 p-4">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-xs text-[#607B96] mb-2"
              >
                {description}
              </motion.p>

            {/* <p className="text-xs text-[#607B96] mt-2">{description}</p> */}
            <motion.article
              layoutId={`techStacks-${techStacks}-${id}`}
              className="flex gap-1 justify-start my-1 text-[#607B96] overflow-x-auto"
            >
              {techStacks.map((t, index) => (
                <motion.p
                  layoutId={`techStack-${t}`}
                  className="text-xs "
                  key={index}
                >{`${t},`}</motion.p>
              ))}
            </motion.article>
            <button
              className="bg-[#1c2b3a] px-2 py-1 rounded font-normal text-sm text-white mt-2"
              onClick={() => setActive(project)}
            >
              view-project
            </button>
          </div>
          {/* <BorderBeam /> */}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
