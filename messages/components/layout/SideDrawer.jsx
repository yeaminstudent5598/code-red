"use client";
import { useState } from "react";
// import { FaBell, FaSearch } from "react-icons/fa";
import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";
// import Skeleton from "../ui/Skeleton";
// import UserListItem from "../ui/UserListItem";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const {
    setSelectedChat,
    user,
    // notification,
    // setNotification,
    chats,
    setChats,
  } = ChatState();

  const handelSearch = async () => {
    if (!search) {
      alert("Please Enter Soothing in search !")
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CHAT_EXPRESS_SERVER}/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_CHAT_EXPRESS_SERVER}/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      // onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-white w-full py-2 px-3 border-2">
        <div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost text-black hover:bg-gray-200">
                {/* <FaSearch /> */}
                "S"
                <span className="hidden md:flex">Search User</span>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div className="flex items-center gap-2 justify-center">
                  <input type="text" placeholder="Search by name or email" value={search} onChange={(e) => setSearch(e.target.value)} className="input input-bordered w-full max-w-xs" />
                  <button onClick={handelSearch} className="btn outline btn-sm">GO</button>
                </div>
                <div>
                  {loading ? (
                    // <Skeleton />
                    "Loading..."
                  ) : (
                    searchResult?.map((user) => (
                      // <UserListItem key={user._id} user={user} handleFunction={() => accessChat(user._id)}/>
                      "UserListItem"
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl">KathaKoi</h2>
        <div className="flex items-center gap-2 justify-center">
          <div className="p-1 cursor-pointer">
            "B"
            {/* <FaBell /> */}
            {/* <MenuList></MenuList> */}
          </div>
          <div>
            <button className="btn btn-ghost text-black hover:bg-gray-200">
              <img src="#" alt="User" className="rounded-full w-8 h-8 outline-2 outline-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
