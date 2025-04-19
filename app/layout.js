import { Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
import SessionWrapper from "@/Providers/SessionWrapper";
import { Toaster } from "react-hot-toast";
import LayoutWrapper from "@/Providers/LayoutWrapper";
import FloatingButton from "./code-editor/components/FloatingButton";
import ChatProvider from "@/messages/Context/ChatProvider";
// import ChatProvider from "@/Demo/antor/messages/Context/ChatProvider";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DevelopersQuestions",
  description: "This is a Forum for devlopers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`} >
        <SessionWrapper>
          <ChatProvider>
            <Toaster />
            {/* <Navbar /> */}
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
            <FloatingButton />
          </ChatProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
