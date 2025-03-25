"use client"

import { SessionProvider } from "next-auth/react";
import "@/app/(root)/globals.css"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
        <SessionProvider>
         <main>{children}</main>
      </SessionProvider>
        </body>
      </html>
    )
  } 