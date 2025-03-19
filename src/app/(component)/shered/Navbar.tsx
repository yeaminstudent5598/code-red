import LoginButton from "@/components/auth/LoginButton";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
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
          {/* <div className="text-black flex items-center space-x-5">
          <MessageSquareText></MessageSquareText>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div> */}
          <LoginButton />
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
