import LoginButton from "@/components/auth/LoginButton";
import RegisterButton from "@/components/auth/RegisterButton";
import UserServerInfo from "@/components/auth/UserServerInfo";
import Image from "next/image";
import Link from "next/link";

async function Navbar() {

  const user = await UserServerInfo();
  // console.log("User Info Email : ", user?.email);

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
            {user ?
              <Link href="/Profile" className="bg-primary-green py-1 px-4 rounded-2xl text-lg font-semibold cursor-pointer hover:ring-2 ring-primary-blue duration-200">
                Profile
              </Link>
              :
              <>
                <RegisterButton />
                <LoginButton />
              </>}
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
