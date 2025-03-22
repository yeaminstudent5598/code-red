
import { ToastContainer } from "react-toastify";
import "./global.css";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
      <ToastContainer />
      </>
    )
  } 