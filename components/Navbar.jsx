import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isActive = (path) => router.pathname === path;

    return (
        <nav className="flex flex-wrap lg:flex-nowrap justify-between items-center border-b border-b-gray-700 px-4 sm:px-6 md:px-8">
            <div className="flex w-full lg:w-0 justify-between items-center space-x-4">
                <a href="/"
className="text-lg py-3 pr-8 sm:pr-16 xl:pr-32 md:pr-8 lg:border-r border-gray-700">abdul_shekur</a>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none bg-transparent border border-gray-700">
                        {menuOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
                    </button>
                </div>

                <div
                    className={`lg:justify-between lg:flex-row lg:flex lg:items-center lg:space-x-4 ${menuOpen
                            ? 'flex absolute border-gray-700 rounded-b-lg h-screen w-11/12 top-0 bg-[#011627] z-50 flex-col'
                            : 'hidden'
                        } space-y-4 lg:space-y-0 lg:relative top-16 left-0 lg:top-0 w-full lg:w-auto bg-[#011627] lg:bg-transparent border-t lg:border-t-0 border-gray-700 lg:border-0 p-0 lg:p-0`}
                >
                    <a
                        href="/"
                        className={`text-gray-400 py-3 hover:text-white px-4 border-b lg:border-b-0 lg:border-r border-gray-700 ${isActive('/') ? 'border-b-2 border-b-[#FEA55F]' : ''
                            }`}
                    >
                        _hello
                    </a>
                    <a
                        href="/about_me"
                        className={`text-gray-400 py-3 hover:text-white px-4 border-b lg:border-b-0 lg:border-r border-gray-700 ${isActive('/about_me') ? 'border-b-2 border-b-[#FEA55F]' : ''
                            }`}
                    >
                        _about_me
                    </a>
                    <a
                        href="/projects"
                        className={`text-gray-400 py-3 hover:text-white px-4 border-b lg:border-b-0 lg:border-r border-gray-700 ${isActive('/projects') ? 'border-b-2 border-b-[#FEA55F]' : ''
                            }`}
                    >
                        _projects
                    </a>

                    <a
                        href="#contact-me"
                        className="lg:hidden text-gray-400 border-b py-3 px-4 border-gray-700 hover:text-white"
                    >
                        _contact_me
                    </a>
                </div>
            </div>
            <div className="hidden lg:flex justify-end">
                <a
                    href="/contact_me"
                    className={`text-gray-400 border-l py-3 pl-4 border-gray-700 hover:text-white ${isActive('/contact_me') ? 'border-b-2 border-[#FEA55F]' : ''
                        }`}
                >
                    _contact_me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
