"use client";

import { ChatState } from "../../Context/ChatProvider";
import SingleChat from "@/messages/components/SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {

  const { selectedChat } = ChatState();

  return (
    <div className={`${selectedChat ? "flex" : "hidden"} md:flex items-center flex-col p-3 bg-white w-full md:[68%] rounded-lg border`}>
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </div>
  )
}

export default ChatBox