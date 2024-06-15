import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="div className={`${fira.className} absolute top-0 text-white p-4 sm:p-8 md:p-12 min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}