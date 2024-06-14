import Head from 'next/head';
import { useState } from 'react';
import Game from '../components/Game';
import { RiTwitterXLine, RiFacebookFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaGreaterThan } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    // <div className="absolute top-0 text-white p-4 sm:p-8 md:p-12 min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="mx-auto h-full max-w-7xl w-full border border-gray-700 rounded-md bg-[#011627]">
        <Head>
          <title>Abdul Shekur - Portfolio</title>
        </Head>

        <nav className="flex flex-wrap justify-between items-center border-b border-b-gray-700 px-4 sm:px-6 md:px-8">
          <div className="flex space-x-4">
            <div className="text-lg py-3 pr-8 sm:pr-16 md:pr-32 border-r border-gray-700">abdul_shekur</div>
            <div className="block md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                {menuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
              </button>
            </div>

            <div className={`flex-col md:justify-between md:flex-row md:flex md:items-center md:space-x-4 ${menuOpen ? 'flex' : 'hidden'} space-y-4 md:space-y-0 absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-[#011627] md:bg-transparent border-t md:border-t-0 border-gray-700 md:border-0 p-4 md:p-0`}>

            <div>
                <a href="/" className="text-gray-400 py-3 hover:text-white px-4 border-r border-gray-700">_hello</a>
                <a href="/about_me" className="text-gray-400 py-3 hover:text-white px-4 border-r border-gray-700">_about_me</a>
                <a href="/projects" className="text-gray-400 py-3 hover:text-white px-4 border-r   border-gray-700">_projects</a>
            </div>
       
              <div className="md:hidden justify-end">
                <a href="#contact-me" className="text-gray-400 border-l py-3 pl-4 border-gray-700 hover:text-white">_contact_me</a>
              </div>
          </div>
         
          </div>
          <div className="hidden md:flex justify-end">
            <a href="#contact-me" className="text-gray-400 border-l py-3 pl-4 border-gray-700 hover:text-white">_contact_me</a>
          </div>
        </nav>

        <main className="flex flex-wrap items-center justify-between py-10 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
          <section id="hello" className="w-full md:w-1/2">
            <p>Hi all. I am</p>
            <h1 className="text-3xl sm:text-4xl font-medium">Abdul Shekur</h1>
            <div className="flex items-center gap-4 text-xl text-[#4D5BCE]">
              <FaGreaterThan />
              <h2>Front-end developer</h2>
            </div>
            <p className="mt-8">// complete the game to continue</p>
            <p>// you can also see it on my Github page</p>
            <p>
              <span className="text-[#4D5BCE]">const</span> <span className="text-green-400">githubLink</span> = "<a href="https://github.com/shakvilla" className="text-[#E99287]">https://github.com/shakvilla</a>"
            </p>
          </section>

          <section className="relative w-full md:w-1/2 flex justify-start items-center mt-8 md:mt-0">
            <div className="relative z-10 w-full">
              <div className="absolute w-[90%] max-w-[479.6px] h-[342.27px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-background-blur"></div>
              {/* <div className="bg-gradient-to-t from-teal-400 via-emerald-500 to-green-600 w-full max-w-[510px] mx-auto rounded-lg p-4">
                <Game />
              </div> */}
              <div className="bg-gradient-to-t from-teal-400 via-emerald-500 to-green-600 w-full max-w-[510px] mx-auto rounded-lg">
                <Game />
              </div>
            </div>
          </section>
        </main>

        <footer className="relative flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-8 bg-gray-800 border-t border-gray-700 ">
          <div className="flex space-x-4 items-center">
            <p className="text-sm text-gray-300 border-r border-gray-700 px-4 py-2">find me in:</p>
            <a href="https://twitter.com" className="text-gray-400 py-2 hover:text-white border-r border-gray-700 px-4" target="_blank"><RiTwitterXLine /></a>
            <a href="https://facebook.com" className="text-gray-400 py-2 hover:text-white border-r border-gray-700 px-4" target="_blank"><RiFacebookFill /></a>
            <a href="https://linkedin.com" className="text-gray-400 py-2 hover:text-white" target="_blank"><FaLinkedin /></a>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="https://github.com/shakvilla" className="flex items-center gap-2 py-2 text-gray-400 hover:text-white border-l border-gray-700 px-4">@shakvilla <FaGithub /></a>
          </div>
        </footer>
      </div>
    // </div>
  );
}
