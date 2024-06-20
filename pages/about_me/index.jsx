// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';// import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer'; 
import { MdArrowDropDown } from "react-icons/md";
import CodeSnippet from '../../components/CodeSnippet'
import { MdClose } from "react-icons/md";
import { IoFolderOpen } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

import Image from 'next/image'

export default function About() {



  const code1 =
`const initialize = (): void => {
  config.cloudinaryConfig();
  const app: Express = express();
  databaseConnection();
  start(app);
  
};
initialize();
`
// const code2 =
// `const initialize = (): void => {
//   config.cloudinaryConfig();
//   const app: Express = express();
//   databaseConnection();
//   start(app);
  
// };
// initialize();
// `
  return (
    <div className="min-h-screen flex flex-col bg-[#011627] text-white">
      {/* <Navbar /> */}

      <main className="flex flex-1 w-full px-4  sm:px-6  md:px-0 mx-auto">
      
        <div>

        </div>
        <section className="w-full flex lg:w-2/12">
            <div className="lg:w-2/12 border-r border-gray-700 h-full">
             <div className="">

             </div>
            </div>
              <div className="text-[#607B96] lg:w-10/12 border-r border-gray-700 h-full">
            <div className="mt-0">
              <div className="p-2 flex justify-start items-center text-white border-y border-gray-700">
                <div className="text-2xl">
                   <MdArrowDropDown />

                </div>
                   <p className="">personal-info</p>
              </div>
                  <ul className="ml-4 px-2">
                    <li className="mt-2 flex items-center gap-2">
                        <p className="text-[#607B96]  w-4 h-3"><FaChevronRight /></p>
                        <p className="text-[#E99287]  w-4 h-3"> <IoFolderOpen /></p>
                        <p className="text-[#607B96]">bio</p>
                    </li>
                    {/* <li className="mt-2">
                      <p className="text-[#607B96]">interests</p>
                    </li> */}
                <li className="mt-2 flex items-center gap-2">
                  <p className="text-[#607B96]  w-4 h-3"><FaChevronRight /></p>
                  <p className="text-[#43D9AD]  w-4 h-3"> <IoFolderOpen /></p>
                  <p className="text-[#607B96]">interests</p>
                </li>
                    {/* <li className="mt-2">
                      <p className="text-[#]">education</p>
                      <ul className="ml-4">
                        <li className="mt-2">
                          <p className="text-[#607B96]">high-school</p>
                        </li>
                        <li className="mt-2">
                          <p className="text-[#607B96]">university</p>
                        </li>
                      </ul>
                    </li> */}
                <li className="mt-2 flex items-center gap-2">
                  <p className="text-[#607B96]  w-4 h-3"><FaChevronRight /></p>
                  <p className="text-[#3A49A4]  w-4 h-3"> <IoFolderOpen /></p>
                  <p className="text-[#607B96]">education</p>
                </li>
                  </ul>
                  <div className="mt-4 px-2">
                <div className="p-2 flex justify-start items-center text-white border-y border-gray-700">
                  <div className="text-2xl">
                    <MdArrowDropDown />

                  </div>
                  <p className="text-[#607B96]">contacts</p>
                </div>
                    {/* <p className="text-[#607B96]">contacts</p> */}
                <li className="mt-2 text-sm flex items-center gap-2">
                  <p className="text-[#607B96]  w-4 h-3"> <FaEnvelopeOpenText /></p>
                  <p className="text-[#607B96]">me@shakur.com</p>
                </li>
                    {/* <p className="mt-1">+3598246359</p> */}
                <li className="mt-2 text-sm flex items-center gap-2">
                  <p className="text-[#607B96]  w-4 h-3"> <IoPhonePortraitOutline />

                  </p>
                  <p className="text-[#607B96]">+233240472060</p>
                </li>
                  </div>
                </div>
              </div>
        </section>

        <section className="w-full lg:w-6/12">
          <div className="px-4 flex justify-start items-center text-[#607B96] border-y border-gray-700">
         <div className="flex pr-2 justify-between  items-center w-4/12 border-r border-gray-700  py-2">
              <p>personal-info</p>
              <MdClose />

         </div>
        </div>
        <div>
          
    <pre className="text-[#607B96] text-start">
    {`
    /**
    * About me
    * I have 5 years of experience in web 
    * development lorem ipsum dolor sit amet, 
    * consectetur adipiscing elit, sed do eiusmod 
    * tempor incididunt ut labore et dolore 
    * magna aliqua. Ut enim ad minim veniam, 
    * quis nostrud exercitation ullamco laboris 
    * nisi ut aliquip ex ea commodo consequat.
    * Duis aute irure dolor in reprehenderit in 
    * 
    * Duis aute irure dolor in reprehenderit in 
    * voluptate velit esse cillum dolore eu fugiat 
    * nulla pariatur. Excepteur sint occaecat 
    * officia deserunt mollit anim id est laborum.
    */`
    }
    </pre>

        </div>

        </section>

        <section className="w-full lg:w-4/12 border-l border-[#1E2D3D]">
          <div className=" flex justify-start py-2 items-center  border-y border-gray-700">
            {/* <div className="py-2"> */}
              {/* <MdArrowDropDown /> */}
              <p className=" text-[#607B96]">sample code snippets</p>
            {/* </div> */}
            {/* <p className="">personal-info</p> */}
          </div>
      
          <div className="my-8 px-6">
            <div className="text-[#607B96] mb-8">
              <p>// Code snippet showcase:</p>
            </div>
            <div className="mb-8">
              <div className="flex justify-between items-center ">
                <div className="flex item-center gap-x-2">
                  {/* <div className=" w-8 h-8 rounded-full"> */}
                    <Image 
                        src="/images/shakur.svg" 
                        alt="shakur" 
                        width="32"
                        height="32"
                        className="h-8 w-8 rounded-full"
                    />

                  {/* </div> */}
                  <div className="text-sm">
                    <p className="text-[#4D5BCE] font-medium">@shakvilla</p>
                    <p className="text-[#607B96]">Created 5 months ago</p>
                  </div>
                 
                </div>
                <div className="flex gap-x-3">
                  <div className="flex items-center text-[#607B96] gap-x-1">
                    <BiSolidMessageRounded />

                    <p className="text-white">details</p>

                  </div>
                  <div className="flex items-center text-[#607B96] gap-x-1">
                    <FaStar />
                    <p className="">3 stars</p>

                  </div>
                </div>
              </div>
           
              <div className="mt-2 bg-[#011221] border border-[#1E2D3D] p-4 rounded-md">
                <CodeSnippet code={code1} language="typescript" />
              </div>
            </div>
        
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
