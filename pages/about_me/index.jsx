import { useState } from 'react';
import { MdArrowDropDown, MdClose } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { RiExchange2Fill } from "react-icons/ri";
import SidebarIcon from '../../components/SidebarIcon';
import DropdownMenu from '../../components/DropdownMenu';
import CodeSnippetSection from '../../components/CodeSnippetSection';
import ContactInfo from '../../components/ContactInfo';

export default function About() {
  const [openMenu, setOpenMenu] = useState(null);

  const code1 =
    `const initialize = (): void => {
  config.cloudinaryConfig();
  const app: Express = express();
  databaseConnection();
  start(app);
  
};
initialize();
`

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#011627] text-white">
      <main className="lg:hidden flex flex-1 flex-col lg:flex-row w-full px-4 sm:px-6 md:px-0 mx-auto">
        <div className="flex lg:hidden justify-between items-center bg-[#011627] p-4 border-b border-gray-700">
          <p className="text-2xl text-[#607B96]">personal-info</p>
          <MdClose className="text-2xl text-[#607B96]" />
        </div>
        <section className="w-full lg:w-2/12">
          {/* <div className="lg:w-2/12 border-r border-gray-700 h-full">
            <nav className="flex flex-col">
              <SidebarIcon IconComponent={AiFillCode} />
              <SidebarIcon IconComponent={RiExchange2Fill} />
              <SidebarIcon IconComponent={IoGameController} />
            </nav>
          </div> */}
          <div className="text-[#607B96] lg:w-10/12 border-r border-gray-700 h-full">
            <div className="mt-0">
              <div className="p-2 flex justify-start items-center text-white border-y border-gray-700">
                <div className="text-2xl">
                  <MdArrowDropDown />
                </div>
                <p className="">personal-info</p>
              </div>
              <ul className="ml-4 px-2">
                <DropdownMenu isOpen={openMenu === 'bio'} toggle={() => handleMenuClick('bio')} iconColor="text-[#E99287]" label="bio">
                  <li className="mt-2">About Me</li>
                  <li className="mt-2">Skills</li>
                </DropdownMenu>
                <DropdownMenu isOpen={openMenu === 'interests'} toggle={() => handleMenuClick('interests')} iconColor="text-[#43D9AD]" label="interests">
                  <li className="mt-2">Coding</li>
                  <li className="mt-2">Gaming</li>
                </DropdownMenu>
                <DropdownMenu isOpen={openMenu === 'education'} toggle={() => handleMenuClick('education')} iconColor="text-[#3A49A4]" label="education">
                  <li className="mt-2">School</li>
                  <li className="mt-2">Certifications</li>
                </DropdownMenu>
              </ul>
              <ContactInfo />
            </div>
          </div>
        </section>
        <section className="w-full lg:w-5/12 px-4 lg:px-0">
          <div className="px-4 lg:px-0 flex justify-start items-center text-[#607B96] border-y border-gray-700">
            <div className="flex pr-2 justify-between items-center w-full lg:w-4/12 border-r border-gray-700 py-2">
              <p>personal-info</p>
              <MdClose />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[#607B96] text-lg lg:text-xl">personal-info / bio</p>
            <pre className="text-[#607B96] text-start whitespace-pre-wrap">
              {`
I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
              `}
            </pre>
          </div>
        </section>
        <section className="w-full lg:w-5/12 border-l border-[#1E2D3D]">
          <div className="flex justify-start py-2 items-center border-y border-gray-700">
            <p className="text-[#607B96] pl-6">Code snippet showcase:</p>
          </div>
          <div className="relative mx-6 px-2">
            <CodeSnippetSection code={code1} language="typescript" />
          </div>
        </section>
      </main>
      <main className="hidden lg:flex flex-1 w-full px-4 sm:px-6 md:px-0 mx-auto">
        <div></div>
        <section className="w-full flex lg:w-2/12">
          <div className="lg:w-2/12 border-r border-gray-700 h-full">
            <nav className="flex flex-col">
              <SidebarIcon IconComponent={AiFillCode} />
              <SidebarIcon IconComponent={RiExchange2Fill} />
              <SidebarIcon IconComponent={IoGameController} />
            </nav>
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
                <DropdownMenu isOpen={openMenu === 'bio'} toggle={() => handleMenuClick('bio')} iconColor="text-[#E99287]" label="bio">
                  <li className="mt-2">About Me</li>
                  <li className="mt-2">Skills</li>
                </DropdownMenu>
                <DropdownMenu isOpen={openMenu === 'interests'} toggle={() => handleMenuClick('interests')} iconColor="text-[#43D9AD]" label="interests">
                  <li className="mt-2">Coding</li>
                  <li className="mt-2">Gaming</li>
                </DropdownMenu>
                <DropdownMenu isOpen={openMenu === 'education'} toggle={() => handleMenuClick('education')} iconColor="text-[#3A49A4]" label="education">
                  <li className="mt-2">School</li>
                  <li className="mt-2">Certifications</li>
                </DropdownMenu>
              </ul>
              <ContactInfo />
            </div>
          </div>
        </section>
        <section className="w-full lg:w-5/12">
          <div className="px-4 flex justify-start items-center text-[#607B96] border-y border-gray-700">
            <div className="flex pr-2 justify-between items-center w-4/12 border-r border-gray-700 py-2">
              <p>personal-info</p>
              <MdClose />
            </div>
          </div>
          <div>
            <pre className="text-[#607B96] text-start">
              {`
  /**
  * About Me
  * 
  * I am a Fullstack Engineer with extensive 
  * experience in creating intuitive web applications 
  * using NodeJs, ReactJs, ExpressJs, MongoDB,  
  * and MySQL. My projects focus on delivering, 
  * high-quality responsive, and dynamic 
  * user experiences.
  * 
  * I excel in agile environments, collaborating with 
  * cross-functional teams to achieve goals. 
  * My strong communication skills ensure effective 
  * stakeholder engagement and project success. 
  * I am committed to continuous learning and 
  * staying updated with the latest technologies.
  * 
  * I am passionate about delivering value through 
  * technology and am excited to contribute 
  * to a forward-thinking team. 
  * Please feel free to reach out for further 
  * information or to schedule an interview.
  */`}
            </pre>
          </div>
        </section>
        <section className="w-full lg:w-5/12 border-l border-[#1E2D3D]">
          <div className="flex justify-start py-2 items-center border-y border-gray-700">
            <p className="text-[#607B96] pl-6">Code snippet showcase:</p>
          </div>
          <div className="relative mx-6 px-2 mt-4">
            <CodeSnippetSection code={code1} language="typescript" />
          </div>
          <div className="relative mx-6 p-2">
            <CodeSnippetSection code={code1} language="typescript" />
          </div>
        </section>
      </main>

    </div>
  );
}
