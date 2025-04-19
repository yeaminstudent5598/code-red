import React, { useEffect, useState } from 'react';
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";
import io from "socket.io-client";
// import { FaArrowLeft } from "react-icons/fa";
import { getSender } from "../config/ChatLogics";
import ScrollableChat from './ScrollableChat';

const ENDPOINT = process.env.NEXT_PUBLIC_CHAT_EXPRESS_SERVER;
var socket, selectedChatCompare;

const SingleChat = () => {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const { selectedChat, setSelectedChat, user } = ChatState();

    const fetchMessages = async () => {
        if (!selectedChat) return;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            setLoading(true);

            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_CHAT_EXPRESS_SERVER}/api/message/${selectedChat._id}`,
                config
            );
            setMessages(data);
            setLoading(false);

            socket.emit("join chat", selectedChat._id);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", user);
        socket.on("connected", () => setSocketConnected(true));
        socket.on("typing", () => setIsTyping(true));
        socket.on("stop typing", () => setIsTyping(false));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchMessages();

        selectedChatCompare = selectedChat;
        // eslint-disable-next-line
    }, [selectedChat]);

    useEffect(() => {
        socket.on("message recieved", (newMessageRecieved) => {
            if (
                !selectedChatCompare || // if chat is not selected or doesn't match current chat
                selectedChatCompare._id !== newMessageRecieved.chat._id
            ) {
                // if (!notification.includes(newMessageRecieved)) {
                //     setNotification([newMessageRecieved, ...notification]);
                //     setFetchAgain(!fetchAgain);
                // }
            } else {
                setMessages([...messages, newMessageRecieved]);
            }
        });
    });

    const sendMessage = async (event) => {
        if (event.key === "Enter" && newMessage) {
            socket.emit("stop typing", selectedChat._id);
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                };
                setNewMessage("");
                const { data } = await axios.post(`${process.env.NEXT_PUBLIC_CHAT_EXPRESS_SERVER}/api/message`,
                    {
                        content: newMessage,
                        chatId: selectedChat,
                    },
                    config
                );
                socket.emit("new message", data);
                setMessages([...messages, data]);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const typingHandler = (e) => {
        setNewMessage(e.target.value);

        if (!socketConnected) return;

        if (!typing) {
            setTyping(true);
            socket.emit("typing", selectedChat._id);
        }
        let lastTypingTime = new Date().getTime();
        var timerLength = 3000;
        setTimeout(() => {
            var timeNow = new Date().getTime();
            var timeDiff = timeNow - lastTypingTime;
            if (timeDiff >= timerLength && typing) {
                socket.emit("stop typing", selectedChat._id);
                setTyping(false);
            }
        }, timerLength);
    };

    return (
        <div className='h-full w-full'>
            {
                selectedChat ? (
                    <>
                        <div className='text-[28px] md:text-3xl pb-3 px-2 w-full flex justify-between items-center'>
                            <button className='btn btn-outline btn-sm text-black hover:bg-gray-200 flex md:hidden' onClick={() => setSelectedChat("")}>
                                {/* <FaArrowLeft /> */}
                                "ArrowLeft"
                            </button>
                            {messages && (
                                !selectedChat.isGroupChat ? (
                                    <div>
                                        {getSender(user, selectedChat.users)}
                                    </div>
                                ) : (
                                    <div>
                                        {selectedChat.chatName.toUpperCase()}
                                        {/* {} */}
                                    </div>
                                ))}
                        </div>
                        <div className='flex flex-col justify-end p-3 bg-[#E8E8E8] w-full h-full rounded-lg overflow-y-hidden'>
                            {
                                loading ? ("Loading...") : (<div>
                                    <ScrollableChat messages={messages} />
                                    {/* "ScrollableChat" */}
                                </div>)
                            }
                            <div className='mt-3' onKeyDown={sendMessage}>
                                {isTyping ? <div>Typing...</div> : (<></>)}
                                <input type="text" onChange={typingHandler} value={newMessage} placeholder='Enter a message...' className='bg-[#E0E0E0] input ' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='grid items-center justify-center h-full'>
                        <p className='text-3xl pb-3'>Click On a user to start chatting</p>
                    </div>
                )
            }
        </div>
    )
}

export default SingleChat