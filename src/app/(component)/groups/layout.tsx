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
        <body className="bg-white h-screen">
          <Navbar />
          <main className="pt-5 w-11/12 mx-auto ">{children}</main>
        </body>
           </SessionProvider>
      </html>
    )
  } 