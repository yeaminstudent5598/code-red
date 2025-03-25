import SessionProvider from "@/providers/NextAuthSessionProvider";
import "@/app/(root)/globals.css"; 
import Navbar from "../shered/Navbar";
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <SessionProvider >
        <body className="bg-gray-100 text-gray-900">
          <Navbar />
          <div className="bg-gray-100">
          <main className="pt-5  text-gray-900 w-11/12 mx-auto ">{children}</main>
          </div>
        </body>
           </SessionProvider>
      </html>
    )
  } 