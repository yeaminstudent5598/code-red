import type { Metadata } from "next";
import NextAuthSessionProvider from '@/providers/NextAuthSessionProvider';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../(component)/shered/Navbar";
import LayoutWrapper from "@/components/auth/LayoutWrapper";
import { ToastContainer } from "react-toastify";
// import LayoutWrapper from '@/components/auth/LayoutWrapper';

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
  children: React.ReactNode,
}>) {

  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}>
          <Navbar />
          <LayoutWrapper>
            <main>
            {children}
            </main>
          </LayoutWrapper>
        </body>
      </NextAuthSessionProvider>
      <ToastContainer />
    </html>
  );
}
