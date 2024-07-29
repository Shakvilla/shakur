'use client'
import useToggle from "@/hooks/use-toggle";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import NavLink from "./nav-links";

const Navbar: React.FC = () => {
  const [menuOpen, toggleMenu] = useToggle(false);

  const navigation = [
    {
      url: "/",
      label: "_hello",
      additionalClasses: "",
    },
    {
      url: "/about_me/personal-info",
      label: "_about_me",
      additionalClasses: "",
    },
    {
      url: "/projects",
      label: "_projects",
      additionalClasses: "",
    }
  ];
  return (
    <nav className="flex flex-wrap lg:flex-nowrap justify-between items-center border-b border-b-gray-700 px-4 sm:px-6 md:px-8">
      <div className="flex w-full lg:w-0 justify-between items-center space-x-4">
        <a
          href="/"
          className="text-lg py-3 pr-8 sm:pr-16 xl:pr-32 md:pr-8 lg:border-r border-gray-700"
        >
          abdul_shekur
        </a>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none bg-transparent border border-gray-700"
          >
            {menuOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
          </button>
        </div>

        <div
          className={`lg:justify-between lg:flex-row lg:flex lg:items-center ${
            menuOpen
              ? "flex absolute border-gray-700 rounded-b-lg h-screen w-11/12 top-0 bg-[#011627] z-50 flex-col"
              : "hidden"
          } space-y-4 lg:space-y-0 lg:relative top-16 left-0 lg:top-0 w-full lg:w-auto bg-[#011627] lg:bg-transparent border-t lg:border-t-0 border-gray-700 lg:border-0 p-0 lg:p-0`}
        >
          {/* <NavLink href="/" label="_hello" />
          <NavLink href="/about_me" label="_about_me" />
          <NavLink href="/projects" label="_projects" />
         */}
          {navigation.map((nav, index) => (
            <div key={index}>
              <NavLink href={nav.url} label={nav.label} />
            </div>
          ))}
          <NavLink
            href="/contact-me"
            label="_contact_me"
            additionalClasses="lg:hidden"
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-end">
        <NavLink
          href="/contact_me"
          label="_contact_me"
          additionalClasses="border-l py-3 pl-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;
