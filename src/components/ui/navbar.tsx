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
    <nav className="flex text-[#607B96] lg:text-[13px] lg:h-[45px] flex-wrap lg:flex-nowrap justify-between border-b border-b-gray-700">
      <div className="flex w-full justify-between ">
        <a
          href="/"
          className="2xl:px-8 px-6 hover:text-white hover:bg-gray-800 lg:h-full flex items-center lg:min-w-[275px] lg:max-w-[275px] 2xl:min-w-[310px] 2xl:max-w-[310px] lg:border-r border-gray-700"
        >
          abdul-shekur-a-clement
        </a>
        <div className="block justify-end  p-2 lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:bg-transparent bg-transparent"
          >
            {menuOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
          </button>
        </div>

        <div
          className={`lg:justify-between lg:flex-row lg:flex  lg:items-center ${
            menuOpen
              ? "flex absolute top-[70px] bg-[#011627] z-50 flex-col"
              : "hidden"
          }   h-full w-full mx-0 lg:relative  lg:left-0 lg:top-0  lg:w-auto bg-[#011627] lg:bg-transparent  border-gray-700  lg:p-0 `}
        >
         
          {navigation.map((nav) => (
            <div key={nav.id} className="lg:h-full py-4 relative border-b border-gray-700">
              <NavLink href={nav.url} label={nav.label} />
            </div>
          ))}
          <div className="lg:hidden py-4 border-b border-gray-700">
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
