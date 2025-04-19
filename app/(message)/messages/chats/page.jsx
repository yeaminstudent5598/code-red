"use client";

import ChatBox from "@/messages/components/layout/ChatBox";
import MyChats from "@/messages/components/layout/MyChats";
import SideDrawer from "@/messages/components/layout/SideDrawer";
import App from "../../app/App";
import { ChatState } from "@/messages/Context/ChatProvider";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  console.log(user);
  const [fetchAgain, setFetchAgain] = useState();

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
