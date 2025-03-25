import Image from 'next/image';
import React from 'react';

interface Group {
  id: number;
  name: string;
  initials: string;
  description: string;
  type: string;
  status: string;
  coverPhoto?: string;
  profilePhoto?: string;
}

const GroupCard = () => {
  // Fake data with photos
  const group: Group = {
    id: 1,
    name: "All things Javascript",
    initials: "JS",
    description: "JS, TypeScript, NodeJS, React, Angular, Vue, Svelte, Deno",
    type: "Public group",
    status: "Active Group",
    coverPhoto: "https://media.licdn.com/dms/image/v2/D5612AQGgdZ-w-MpU0A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1661315428792?e=2147483647&v=beta&t=MQar5r6tWx0R1GyTM2gGOLScYTet-pkfH-PSDjdKpzI",  // Replace with your image path
    profilePhoto: "https://images-platform.99static.com//tdXRIbACDVGGQZFiGLA4UnES3lw=/247x247:1729x1729/fit-in/500x500/99designs-contests-attachments/79/79177/attachment_79177402"    // Replace with your image path
  };

  return (
    <div className=" bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      {/* Cover Photo */}
      <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 relative">
        {group.coverPhoto && (
          <Image
            src={group.coverPhoto}
            alt={`${group.name} cover`}
            fill
            className="object-cover"
          />
        )}
      </div>
      
      <div className="p-5 relative">
        {/* Profile Photo overlapping cover */}
        <div className="absolute -top-8 left-5">
          <div className="h-16 w-16 rounded-lg bg-white border-4 border-white shadow-sm flex items-center justify-center">
            {group.profilePhoto ? (
              <Image
                src={group.profilePhoto}
                alt={group.name}
                width={64}
                height={64}
                className="object-cover rounded-md"
              />
            ) : (
              <span className="text-2xl font-bold text-blue-600">
                {group.initials}
              </span>
            )}
          </div>
        </div>

        {/* Group Info */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-900 mb-1">{group.name}</h2>
          <p className="text-gray-600 mb-4">{group.description}</p>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full">
              {group.type}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 bg-green-100 text-green-700 rounded-full">
              {group.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;