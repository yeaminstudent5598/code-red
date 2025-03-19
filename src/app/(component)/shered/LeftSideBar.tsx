"use client"
import Link from "next/link";
import {sidebarLinks} from "../../contactor"
import { usePathname } from "next/navigation";
import ProfileCard from "../(HomeComponent)/ProfileCard";
function Leftbar() {
  const pathname = usePathname()
  // const route =  useRouter()
  // console.log(pathname, "pathname....")
  // console.log(route, "route........ok")
  return (
    <div className="sticky rounded-lg shadow-sm w-3/12 max-lg:hidden bg-white left-0 top-0 z-20 flex h-screen flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 max-md:hidden;">
      <ProfileCard></ProfileCard>
      <div className="flex px-4 flex-1 flex-col gap-y-1 pt-4">
        {sidebarLinks?.map((link) => {
          const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
         return (
         <Link className={`flex py-3 px-3 items-center space-x-1 ${isActive && "bg-blue-400 rounded-md w-full"} `} href={link?.route} key={link.label}>
           <p className="text-gray-600">{link?.icon}</p>
            <p className="text-black max-lg:hidden">{link?.label}</p>
          </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Leftbar;
