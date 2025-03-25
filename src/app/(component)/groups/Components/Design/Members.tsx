import Image from 'next/image';
import React from 'react';
import { FiUserPlus, FiChevronRight } from 'react-icons/fi';

interface Member {
  id: number;
  name: string;
  avatar?: string;
  position: string;
  connected?: boolean;
}

const MembersComponent = () => {
  // Fake data with image options
  const memberCount = 12713;
  const featuredMembers: Member[] = [
    { 
      id: 1, 
      name: 'Alex Johnson', 
      position: 'Senior Developer at TechCo', 
      connected: true,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    { 
      id: 2, 
      name: 'Sarah Williams', 
      position: 'Frontend Engineer', 
      connected: false,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    { 
      id: 3, 
      name: 'Michael Chen', 
      position: 'Full Stack Developer', 
      connected: true ,
       avatar: 'https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg'
    },
    { 
      id: 4, 
      name: 'Emily Davis', 
      position: 'UI/UX Designer', 
      connected: false,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header section */}
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">
          <span className="font-semibold">{memberCount.toLocaleString()}</span> members
        </h3>
        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors">
          <FiUserPlus className="text-base" />
          <span>Invite</span>
        </button>
      </div>

      {/* Members list */}
      <div className="divide-y divide-gray-100">
        {featuredMembers.map((member) => (
          <div key={member.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              {/* Avatar with image or initial fallback */}
              <div className="relative">
                <div className="h-11 w-11 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={44}
                      height={44}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-gray-600 font-medium">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                {member.connected && (
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-white"></div>
                )}
              </div>
              
              {/* Member info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{member.name}</h4>
                <p className="text-xs text-gray-500 truncate">{member.position}</p>
              </div>
              
              {/* Connect button */}
              <button 
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                  member.connected 
                    ? 'text-gray-600 bg-gray-100 hover:bg-gray-200' 
                    : 'text-white bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {member.connected ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show all footer */}
      <div className="p-4 border-t border-gray-100">
        <a href="#" className="flex items-center justify-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium">
          <span>Show all {memberCount.toLocaleString()} members</span>
          <FiChevronRight className="text-base" />
        </a>
      </div>
    </div>
  );
};

export default MembersComponent;