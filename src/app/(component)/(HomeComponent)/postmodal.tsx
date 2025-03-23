"use client";
import axios from "axios";
import { Image as ImageIcon, Video, Filter } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ModalofPost() {
  const { data } = useSession();
  const [userPhoto, setUserPhoto] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!data?.user?.email) return;
        const response = await axios.get(`http://localhost:3000/api/user/${data.user.email}`);
        setUserPhoto(response.data.user_photo || "");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserInfo();
  }, [data?.user?.email]);
  return (
    <div className="postSection w-full p-2 rounded-xl">
      <div onClick={() => document.getElementById("my_modal_4")?.showModal()}>
        <form className="flex items-center space-x-3">
          <Image src={userPhoto ? `${userPhoto}` : "https://placehold.co/10x10"} alt="User" width={38} height={38} className="rounded-full overflow-hidden w-10 h-10 object-contain ring-2 ring-offset-1 bg-gray-500 ring-violet-600 ring-offset-gray-100" />
          <input
            type="text"
            name="post"
            placeholder="Share your thoughts..."
            className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <button type="submit" className="btn bg-blue-500 text-white font-semibold px-3 py-1 cursor-pointer rounded-md">
            Post
          </button>
        </form>

        <div className="flex justify-between items-center mt-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <ImageIcon className="w-5 h-5 text-green-500" />
            <span>Photo</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <Video className="w-5 h-5 text-blue-500" />
            <span>Video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <Filter className="w-5 h-5 text-red-500" />
            <span>Filtering</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
