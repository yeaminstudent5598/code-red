'use client';

import { usePathname } from 'next/navigation';
import Footer from "@/app/(component)/shered/Footer";
import RightSideBar from '@/app/(component)/shered/RightSideBar';
import LeftSideBar from '@/app/(component)/shered/LeftSideBar';

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const noSidebarRoutes = ['/register', '/signin'];
    const showSidebars = !noSidebarRoutes.includes(pathname);

    return (
        <section>
            {
                showSidebars && (
                    <div className=" bg-gray-100 pt-6 ">
                        <div className="flex justify-between w-11/12 mx-auto">
                            <LeftSideBar />
                            <main className="w-full mx-auto lg:mx-6 lg:w-6/12">
                                <div className="min-h-screen">
                                    {children}
                                </div>
                            </main>
                            <RightSideBar />
                        </div>
                        <Footer />
                    </div>
                )
            }
            {
                !showSidebars && (
                    <main>
                        {children}
                    </main>
                )
            }
        </section>
    );
}