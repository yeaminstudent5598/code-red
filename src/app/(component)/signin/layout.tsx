"use client"
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "./global.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
          <ToastContainer />
        </body>
      </html>
    </SessionProvider>
  );
}
