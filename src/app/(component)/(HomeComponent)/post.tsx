'use client';
import {userInfo} from "../../contactor"
import { useState } from 'react';
import { Image as ImageIcon, Video, Filter } from 'lucide-react';
import Image from 'next/image';

export default function PostBox() {
  const [postText, setPostText] = useState('');

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <div className="flex items-center space-x-3">
        <Image src={userInfo?.user_photo} alt="logo" width={38} height={38} className='rounded-full'></Image>
        <input
          type="text"
          placeholder="Share your thoughts..."
          className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
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