'use client'
import useToggle from "@/hooks/use-toggle";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import NavLink from "./nav-links";

const Navbar: React.FC = () => {
  const [menuOpen, toggleMenu] = useToggle(false);

  const navigation = [
    {
      id: 0,
      url: "/",
      label: "_hello",
      additionalClasses: "",
    },
    {
      id: 1,
      url: "/about_me/personal-info",
      label: "_about_me",
      additionalClasses: "",
    },
    {
      id: 2,
      url: "/projects",
      label: "_projects",
      additionalClasses: "",
    }
  ];
  return (
    // <header className="w-full flex flex-col">
    <nav className="flex text-[#607B96] xl:text-[13px] xl:h-[45px] flex-wrap lg:flex-nowrap justify-between border-b border-b-gray-700">
      <div className="flex w-full ">
        <a
          href="/"
          className="2xl:px-8 px-6 hover:text-white hover:bg-gray-800 lg:h-full xl:flex xl:items-center xl:min-w-[275px] xl:max-w-[275px] 2xl:min-w-[310px] 2xl:max-w-[310px] lg:border-r border-gray-700"
        >
          abdul-shekur-a-clement
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
          className={`lg:justify-between lg:flex-row lg:flex  lg:items-center ${
            menuOpen
              ? "flex absolute border-gray-700 rounded-b-lg h-screen w-11/12 top-0 bg-[#011627] z-50 flex-col"
              : "hidden"
          }   h-full lg:relative top-16 left-0 lg:top-0 w-full lg:w-auto bg-[#011627] lg:bg-transparent  border-gray-700  p-0 `}
        >
          {/* <NavLink href="/" label="_hello" />
          <NavLink href="/about_me" label="_about_me" />
          <NavLink href="/projects" label="_projects" />
         */}
          {navigation.map((nav) => (
            <div key={nav.id} className="h-full relative">
              <NavLink href={nav.url} label={nav.label} />
            </div>
          ))}
          <div className="lg:hidden">
            <NavLink
              href="/contact_me"
              label="_contact_me"
              additionalClasses=""
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-end">
        <NavLink
          href="/contact_me"
          label="_contact_me"
          additionalClasses="border-l  pl-4"
        />
      </div>
    </nav>
    // </header>
  );
};

export default Navbar;
