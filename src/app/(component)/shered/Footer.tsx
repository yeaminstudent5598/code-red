import { sidebarLinks } from "../../contactor";
import Link from "next/link";

function Footer() {
  return (
    <div className="sticky bottom-0 z-50 bg-white shadow-2xl shadow-gray-900">
      <div className="flex w-11/12 mx-auto justify-between flex-row min-lg:hidden">
        {sidebarLinks?.map((link) => {
          return (
            <Link
              className={`flex py-3 items-center space-x-1 `}
              href={link?.route}
              key={link.label}
            >
              <p className="text-gray-600">{link?.icon}</p>
              <p className="text-black max-sm:hidden">{link?.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
