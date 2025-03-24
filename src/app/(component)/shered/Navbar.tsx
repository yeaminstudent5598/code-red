"use client"

import Image from "next/image";
import Link from "next/link";
import SignOut from "./SignOut";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50">
      <header className="shadow-sm w-full bg-white">
        <div className="flex py-3 w-11/12 mx-auto justify-between">
          <div>
            <Link className="flex gap-x-2 items-center" href="/">
              <Image src="/assets/logo.svg" alt="logo" width={28} height={28}></Image>
              <p className="text-black font-bold text-2xl">Code Red</p>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="Profile" className="btn bg-blue-500">Profile</Link>
            {session ? (
             <>
              <p className="text-gray-600">{session?.user?.name}</p>
              <SignOut />
             </>
            ) : (
              <>
                <Link href="/register" className="btn">Sign Up</Link>
                <Link href="/signin" className="btn">Sign In</Link>
              </>
            )}
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
