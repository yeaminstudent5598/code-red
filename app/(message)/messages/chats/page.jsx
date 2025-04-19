"use client";

import ChatBox from "@/messages/components/layout/ChatBox";
import MyChats from "@/messages/components/layout/MyChats";
import SideDrawer from "@/messages/components/layout/SideDrawer";
import App from "../../app/App";
import { ChatState } from "@/messages/Context/ChatProvider";
import { useEffect, useState } from "react";

const ChatPage = () => {
  // const { user } = ChatState();
  // const users = JSON.parse(localStorage.getItem("userInfo"));

  // const user = JSON.parse(localStorage.getItem("userInfo"));
  // const user = {
  //   email: "sheikhmuhammadantor@gmail.com",
  //   name: "Sheikh Muhammad",
  //   pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDM1NDJiMjcyMzE1ZDkwY2FmZDI1MSIsImlhdCI6MTc0NTA1NDgyNCwiZXhwIjoxNzQ3NjQ2ODI0fQ.refnheXX47d91wF_p6ZQegfAh63T-4f_eLzDr7ZA1GI",
  //   _id: "6803542b272315d90cafd251"
  // }

  // console.log(user);
  const [fetchAgain, setFetchAgain] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
    console.log("userInfo>>>", userInfo);
  }, []);

  if (!user) return <div className="text-center mt-10">Loading user...</div>;


  return (
    <App>
      <div className="w-full">
        {user && <SideDrawer />}
        <div className="flex justify-between h-[91.5vh] p-3 w-full">
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </div>
      </div>
    </App>
  );
};

export default ChatPage;
