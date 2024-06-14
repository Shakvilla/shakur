import Head from 'next/head';
import Game from '../components/Game';

export default function Home() {
  return (
    <div className="absolute top-0  text-white p-16  min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="container min-w-screen border border-gray-700 rounded-md bg-[#1E2D3D]">
        <Head>
          <title>Abdul Shekur - Portfolio</title>
        </Head>

        <nav className="flex justify-between items-center border-b border-b-gray-700   px-8 ">
          <div className="flex space-x-4 ">
            <div className="text-lg py-3 pr-32 border-r border-gray-700">abdul_shekur</div>
            <a href="#hello" className="text-gray-400 py-3 hover:text-white px-4 border-r border-gray-700">_hello</a>
            <a href="#about-me" className="text-gray-400 py-3 hover:text-white px-4 border-r border-gray-700">_about-me</a>
            <a href="#projects" className="text-gray-400 py-3 hover:text-white px-4 border-r border-gray-700">_projects</a>
          </div>
          <div>
            <a href="#contact-me" className="text-gray-400 border-l py-3 pl-4 border-gray-700 hover:text-white">_contact-me</a>

          </div>
        </nav>

        <main className="flex  items-center justify-between py-20 px-4">
          <section id="hello" className="text-center w-full">
            <p>Hi all. I am</p>
            <h1 className="text-4xl font-bold">Abdul Shekur</h1>
            <h2 className="text-xl text-blue-400">Front-end developer</h2>
            <p className="mt-4">// complete the game to continue</p>
            <p>// you can also see it on my Github page</p>
            <p>
              const <span className="text-green-400">githubLink</span> = "<a href="https://github.com/shakvilla" className="text-blue-400">https://github.com/shakvilla</a>"
            </p>
          </section>

          <section className="relative w-full flex justify-start items-center">

            <div className="relative z-10">  
              <div className="absolute w-[479.6px] h-[342.27px] left-1/2 top-1/2 transform-center custom-background-blur"></div>
  
              <div className="bg-gradient-to-t from-teal-400 via-emerald-500 to-green-600 w-[510px]">
            <Game />
  </div>


            </div>

          </section>

        </main>

        <footer className="flex justify-between items-center px-8 py-4 bg-gray-800">

          <div className="flex space-x-4 mt-8">
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a>
          </div>
          <div>
            <a href="https://github.com/username" className="text-gray-400 hover:text-white">@username</a>


          </div>
        </footer>
      </div>

    </div>
  );
}
