// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';// import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer'; 
import { MdArrowDropDown } from "react-icons/md";
import CodeSnippet from '../../components/CodeSnippet'
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

      <main className="flex flex-1 w-full px-4  sm:px-6  md:px-8 mx-auto">
      
        <div>

        </div>
        <section className="w-full flex lg:w-2/12">
            <div className="lg:w-2/12 border-r border-gray-700 h-full">

            </div>
              <div className="text-[#607B96] lg:w-10/12 border-r border-gray-700 h-full">
                <div className="mt-0">
                  <div className="py-2 flex justify-start items-center text-white border-y border-gray-700">
                <MdArrowDropDown />

                   <p className="text-[#607B96]">personal-info</p>

                  </div>
                  <ul className="ml-4 px-2">
                    <li className="mt-2">
                      <p className="text-[#607B96]">bio</p>
                    </li>
                    <li className="mt-2">
                      <p className="text-[#607B96]">interests</p>
                    </li>
                    <li className="mt-2">
                      <p className="text-[#607B96]">education</p>
                      <ul className="ml-4">
                        <li className="mt-2">
                          <p className="text-[#607B96]">high-school</p>
                        </li>
                        <li className="mt-2">
                          <p className="text-[#607B96]">university</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="mt-4 px-2">
                    
                    <p className="text-[#607B96]">contacts</p>
                    <p className="mt-2">user@gmail.com</p>
                    <p className="mt-1">+3598246359</p>
                  </div>
                </div>
              </div>
        </section>

        <section className="w-full lg:w-5/12 px-2">
        <div>
          <p className="text-white border-b border-gray-700 py-2"></p>
        </div>
          <pre className="text-[#607B96] text-start">
 {`/**
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
        </section>

        <section className="w-full lg:w-5/12 pl-8 border-l border-[#1E2D3D]">
          <div className="text-[#607B96]">
            <p>// Code snippet showcase:</p>
          </div>
          <div className="mt-4">
            <div className="mb-8">
              <p className="text-[#4D5BCE]">@shakvilla</p>
              <p className="text-[#607B96]">Created 5 months ago</p>
              <div className="mt-2 bg-[#011221] border border-[#1E2D3D] p-4 rounded-md">
                <CodeSnippet code={code1} language="typescript" />

                {/* <SyntaxHighlighter 
                    language="typescript" 
                  style={solarizedlight} 
                    showLineNumbers
                    wrapLines 
                  customStyle={customStyle}
                    >
                  {code1}
                </SyntaxHighlighter> */}
              </div>
            </div>
            {/* <div className="mb-8">
              <p className="text-[#4D5BCE]">@username</p>
              <p className="text-[#607B96]">Created 9 months ago</p>
              <div className="mt-2 bg-[#011221] border border-[#1E2D3D] p-4 rounded-md">
                <SyntaxHighlighter
                  language="typescript"
                  style={monokai}
                  showLineNumbers
                  wrapLines
                >
                  {code2}
                </SyntaxHighlighter>
              </div>
            </div> */}
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
