import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

import { Fira_Code as Fira } from "next/font/google";
import Providers from "@/providers/ProgressBarProvider";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });

// const fira = Fira({
//   subsets: ["latin"],
//   // variable: "--font-fira",
// });

const fira_code_retina = localFont({
  src: [
    {
      path: "./fonts/fira-code/FiraCode-Retina.ttf",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-fira_code_retina",
});


const fira_code = localFont({
  src: [
    {
      path: "./fonts/fira-code/FiraCode-Bold.ttf",
      weight: "600",
      style: "bold",
    },
    {
      path: "./fonts/fira-code/FiraCode-SemiBold.ttf",
      weight: "500",
      style: "semibold",
    },
    {
      path: "./fonts/fira-code/FiraCode-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/fira-code/FiraCode-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/fira-code/FiraCode-Light.ttf",
      weight: "300",
      style: "light",
    },
  
  ],
  variable: "--font-fira_code",
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
      <body
        className={`${fira_code_retina.variable} ${fira_code.variable} border border-gray-700 rounded-md bg-[#011627] xl:fill-page`}
      >
        <Providers>
          <div className="height-95 xl:h-full ">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
