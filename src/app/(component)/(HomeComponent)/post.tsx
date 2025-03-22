"use client"
import { userInfo } from "../../contactor"
import { Image as ImageIcon, Video, Filter } from 'lucide-react';
import Image from 'next/image';
import ModalofPost from "./postmodal";

export default function PostBox() {
  // const postSubmit = async (e) => {
  //   e.preventDefault()
  //   const post = e.target.post.value
  //   await BlogsPost(post)
  //   console.log("this is blog")
  // }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      {/* <form onSubmit={postSubmit} className="flex items-center space-x-3"> */}
      {/* profile image */}

      {/* <input
          type="text"
          name="post"
          placeholder="Share your thoughts..."
          className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 cursor-pointer"
          readOnly
        /> */}

      {/* </form> */}
      <div className="flex items-center space-x-3">
        <div className="image">
          <Image src={userInfo?.user_photo} alt="logo" width={38} height={38} className='rounded-full'></Image>
        </div>
        {/* modal section here */}
        <ModalofPost />
       
      </div>
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
          <span>Fitering</span>
        </button>
      </div>

      
    </div>
  );
}