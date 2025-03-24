import Image from 'next/image';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface ProfileData {
  name: string;
  joinDate: string;
  coverPhoto?: string;
  avatarPhoto?: string;
  avatarInitial?: string;
}

const profileData: ProfileData = {
  name: 'Sabbir Hosen',
  joinDate: 'Oct 2024',
  coverPhoto: 'https://images.wallpapersden.com/image/download/programming-coding-language_bGhpbm6UmZqaraWkpJRmbmdlrWZlbWU.jpg', // Place in public folder
  avatarPhoto: 'https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg', // Place in public folder
  avatarInitial: 'SH'
};

export default function Profile() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cover Photo */}
      <div className="h-24 bg-gradient-to-r from-blue-400 to-purple-500 relative">
        {profileData.coverPhoto ? (
          <Image
            src={profileData.coverPhoto}
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500" />
        )}
      </div>
      
      {/* Profile Content */}
      <div className="p-4 relative">
        {/* Avatar positioned halfway over cover */}
        <div className="absolute -top-8 left-4">
          <div className="h-16 w-16 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center shadow-sm overflow-hidden">
            {profileData.avatarPhoto ? (
              <Image
                src={profileData.avatarPhoto}
                alt={profileData.name}
                width={64}
                height={64}
                className="object-cover"
                priority
              />
            ) : (
              <span className="text-gray-600 text-xl font-medium">
                {profileData.avatarInitial || profileData.name.charAt(0)}
              </span>
            )}
          </div>
        </div>
        
        {/* Profile Info + Create Group Button */}
        <div className="flex flex-wrap  justify-between items-start pt-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{profileData.name}</h3>
            <p className="text-sm text-gray-500">Joined: {profileData.joinDate}</p>
          </div>
          
          {/* Create Group Button */}
          <button className="flex mt-2 items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            <FaPlus className="text-sm" />
            <span className="text-sm font-medium">Create Group</span>
          </button>
        </div>
      </div>
    </div>
  );
}