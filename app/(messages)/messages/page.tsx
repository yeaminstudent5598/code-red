"use client";

import React, { useEffect } from "react";
import Signup from "@/messages/components/auth/Signup";
import Login from "@/messages/components/auth/Login";
import { useRouter } from "next/navigation";
import App from "../app/App";

const HomePage = () => {
  const router = useRouter();

  const demoJson =
    '{"_id":"67ef77dfaf27b55ccdbd149f","name":"antor2","email":"antor2@gmail.com","pic":"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZWY3N2RmYWYyN2I1NWNjZGJkMTQ5ZiIsImlhdCI6MTc0NDAwNjUxMCwiZXhwIjoxNzQ2NTk4NTEwfQ.kVYONmWW9Q2ZxrFmIn_er4ZNS7e6eed4btx0ifb4PXk"}';

  useEffect(() => {
    const user = JSON.parse(
      (localStorage.getItem("userInfo") as string) || demoJson
    );

    // if (user) router.push("/messages/chats");
    console.log("LocalStor User Info : ", user);
  }, [router]);

  return (
    <App>
      <div className="container mx-auto">
        <div className="flex justify-center p-3 bg-white w-full mt-10 mb-4 rounded-lg border">
          <h1 className="text-4xl font-work-sans text-black font-semibold">
            Message
          </h1>
        </div>
        <div className="bg-white w-full p-4 rounded-lg border">
          <div data-theme="light" className="tabs tabs-box">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab w-1/2 font-semibold text-lg
                    "
              aria-label="SignUp"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <Signup />
            </div>
            {/*  */}
            <input
              type="radio"
              name="my_tabs_6"
              className="tab  w-1/2 font-semibold text-lg
                    "
              aria-label="Login"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </App>
  );
};

export default HomePage;
