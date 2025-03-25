import Image from 'next/image';
import React from 'react';

interface Admin {
  name: string;
  role: string;
  title: string;
  description: string;
  joinedDate?: string;
  contact?: string;
  image?: string;
}

const AdminCard = () => {
  // Admin data
  const admin: Admin = {
    name: "Zach Sosana",
    role: "3rd Owner",
    title: "Web and Mobile Hacker",
    description: "JavaScript Software Development Engineer",
    joinedDate: "Joined: Jan 2023",
    contact: "zach@example.com",
    image: "https://img.freepik.com/free-photo/medium-shot-man-with-afro-hairstyle_23-2150677136.jpg"
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Top Section - Name and Badge */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <div className="flex items-start gap-4">
          {/* Avatar with Image */}
          <div className="relative">
            <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
              {admin.image ? (
                <Image
                  src={admin.image}
                  alt={admin.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  priority
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-2xl font-medium text-blue-600">
                    {admin.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
          
          {/* Name and Role */}
          <div>
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 className="text-lg font-semibold text-gray-900">{admin.name}</h2>
              <span className="text-sm px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                {admin.role}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Details */}
      <div className="p-6 pt-4">
        <p className="text-sm text-gray-600 mb-4">{admin.description}</p>
        
        <div className="space-y-2">
          <p className="text-xs text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {admin.joinedDate}
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {admin.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;