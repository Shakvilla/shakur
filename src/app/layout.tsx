import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

import { Fira_Code as Fira } from "next/font/google";
import Providers from "@/providers/ProgressBarProvider";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

// const inter = Inter({ subsets: ["latin"] });

const fira = Fira({
  subsets: ["latin"],
  // variable: "--font-fira",
});
export const metadata: Metadata = {
  title: "Abdul Shekur  A Clement",
  description: "Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira.className}`}>
        <Providers>
          <div className="absolute top-0 text-white p-4  md:p-8 min-h-screen w-screen bg-[#010C15]  bg-[size:20px_20px] overflow-hidden">
            <div className="  mx-auto h-full 2xl:h-screen     w-full border border-gray-700 rounded-md bg-[#011627]">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
