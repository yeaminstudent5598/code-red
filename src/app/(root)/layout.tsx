import type { Metadata } from "next";
import NextAuthSessionProvider from '@/providers/NextAuthSessionProvider';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftSideBar from "../(component)/shered/LeftSideBar";
import RightSideBar from "../(component)/shered/RightSideBar";
import Navbar from "../(component)/shered/Navbar";
import Footer from "../(component)/shered/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Code",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <NextAuthSessionProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}>
        <Navbar></Navbar>
        <div className=" bg-gray-100 pt-6 ">
          <div className="flex justify-between w-11/12 mx-auto">
          <LeftSideBar></LeftSideBar>
          <main className="w-full mx-auto lg:mx-6 lg:w-6/12">
            <div className="min-h-screen">
              {children}
            </div>
          </main>
          <RightSideBar></RightSideBar>
          </div>
          <Footer></Footer>
        </div>
      </body>
      </NextAuthSessionProvider>
    </html>
  );
}
