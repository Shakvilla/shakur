import {useState} from 'react'
import {  RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
      <nav className="flex flex-wrap lg:flex-nowrap  justify-between items-center border-b border-b-gray-700 px-4 sm:px-6 md:px-8">
          <div className="flex w-full lg:w-0 justify-between items-center  space-x-4">
              <div className="text-lg py-3 pr-8 sm:pr-16 xl:pr-32 md:pr-8 border-r border-gray-700">abdul_shekur</div>
              <div className="block  lg:hidden">
                  <button onClick={toggleMenu} className="focus:outline-none bg-transparent border border-gray-700">
                      {menuOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
                  </button>
              </div>

              <div className={`flex-col lg:justify-between lg:flex-row lg:flex lg:items-center lg:space-x-4 ${menuOpen ? 'flex flex-col' : 'hidden'} space-y-4 md:space-y-0 absolute lg:relative top-16 left-0 lg:top-0 w-full lg:w-auto bg-[#011627] md:bg-transparent border-t lg:border-t-0 border-gray-700 lg:border-0 p-4 lg:p-0`}>

                  <div>
                      <a href="/" className="text-gray-400 py-3 hover:text-white px-4 border-r border-gray-700">_hello</a>
                      <a href="/about_me" className="text-gray-400 py-3 hover:text-white px-4 border-r border-gray-700">_about_me</a>
                      <a href="/projects" className="text-gray-400 py-3 hover:text-white px-4 border-r   border-gray-700">_projects</a>
                  </div>

                  <div className="lg:hidden justify-end">
                      <a href="#contact-me" className="text-gray-400 border-l py-3 pl-4 border-gray-700 hover:text-white">_contact_me</a>
                  </div>
              </div>

          </div>
          <div className="hidden lg:flex justify-end">
              <a href="/contact_me" className="text-gray-400 border-l py-3 pl-4 border-gray-700 hover:text-white">_contact_me</a>
          </div>
      </nav>
  )
}

export default Navbar