"use client";

import React, { useEffect, useState } from 'react'
import { ChatState } from "../../Context/ChatProvider";
import axios from 'axios';
import { getSender } from '../../config/ChatLogics';

const MyChats = ({ fetchAgain }) => {

  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CHAT_EXPRESS_SERVER}/api/chat`, config);
      console.log(data);
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <div className={`${selectedChat ? "hidden" : "flex"} md:flex flex-col items-center p-3 bg-white w-full md:w-[31%] rounded-lg border`}>
      <div className='pb-3 px-3 text-[28px] md:text-3xl flex w-full justify-between items-center'>
        My Chats
        <button className='btn btn-sm btn-outline hover:bg-gray-200 text-black'>New Group</button>
      </div>
      <div className='flex flex-col p-3 bg-[#F8F8F8] w-full h-screen rounded-lg overflow-y-hidden'>
        {
          chats ? (
            <div className='overflow-y-hidden space-y-1'>
              {
                chats.map((chat) => (
                  <div key={chat._id} onClick={() => setSelectedChat(chat)} className={`${selectedChat === chat ? "bg-[#38B2AC] text-white" : "bg-[#E8E8E8] text-black"} cursor-pointer px-3 py-2 rounded-lg`}>
                    <p>{!chat.isGroupChat ? getSender(loggedUser, chat.users) : chat.chatName}</p>
                  </div>
                ))
              }
            </div>
          ) : "Loading..."}
      </div>
    </div>
  )
}

export default MyChats