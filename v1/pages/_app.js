import '../styles/globals.css'
import Head from 'next/head';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';


import { Fira_Code as Fira } from 'next/font/google'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const fira = Fira({
  subsets: ['latin'], 
  // variable: "--font-fira",
 })

function MyApp({ Component, pageProps }) {
  <Head>
    <title>Abdul Shekur - Portfolio</title>
  </Head>
  return <div className={`${fira.className}`}>
 
    <div className="absolute top-0 text-white p-4  md:p-8 min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-hidden">
      <div className="  mx-auto h-full 2xl:h-screen     w-full border border-gray-700 rounded-md bg-[#011627]">
       
       
        <Navbar />

        <Component {...pageProps} />

        <Footer />
        <ProgressBar
          height="4px"
          color="#FEA55F"
          options={{ showSpinner: false }}
          shallowRouting
        />

      </div>
 </div>


 
  </div>
}

export default MyApp
