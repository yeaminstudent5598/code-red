import Image from 'next/image';
import React from 'react';
import { FiVideo, FiImage, FiBarChart2, FiSmile } from 'react-icons/fi';

const PostCreator = () => {
  // User data
  const user = {
    name: "Sabbir HOsen",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbf-rOjN_aPOPsoGZ-P5Zib-9OuwQmybmPkOd2qIhdyxCgR68DwBeyuubdLJf1qtHrpfI&usqp=CAU" // Replace with your image path
  };

  return (
    <div className=" mt-3 mb-3 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      {/* Header with user avatar and input */}
      <div className="flex items-start gap-3 mb-4">
        {/* User Avatar */}
        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
          {user.avatar ? (
            <Image
              src={user.avatar}
              alt={user.name}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <span className="flex items-center justify-center h-full text-gray-600">
              {user.name.charAt(0)}
            </span>
          )}
        </div>
        
        {/* Input Field */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Start a public post..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-between border-t border-gray-100 pt-3">
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
          <FiVideo className="text-lg" />
          <span>Video</span>
        </button>
        
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
          <FiImage className="text-lg" />
          <span>Photo</span>
        </button>
        
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
          <FiBarChart2 className="text-lg" />
          <span>Poll</span>
        </button>

        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
          <FiSmile className="text-lg" />
          <span>Feeling</span>
        </button>
      </div>
    </div>
  );
};

export default PostCreator;