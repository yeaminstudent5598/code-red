import Image from 'next/image';
import React from 'react';

interface Group {
  id: number;
  logo?: string;
  name: string;
  description?: string;
  photo?: string;
}

const GroupsList = () => {
  const groups: Group[] = [
    { 
      id: 1, 
      logo: "https://images-platform.99static.com/8FoUkYeCFkP2qp7_MXbOJdZqqag=/500x500/top/smart/99designs-contests-attachments/4/4740/attachment_4740449",
      name: "Mern Stack", 
      description: "A group for MERN stack developers", 
      photo: "/mern-stack-icon.png" 
    },
    { 
      id: 2, 
      logo: "https://img.freepik.com/free-vector/gradient-coding-logo-template_23-2148809439.jpg",
      name: "JavaScript", 
      description: "Discuss everything JavaScript", 
      photo: "/js-icon.png" 
    },
    { 
      id: 3, 
      logo: "https://images-platform.99static.com//GqiNYfr25HeRZ-I7ivnrKIe3DGg=/176x145:735x704/fit-in/500x500/99designs-contests-attachments/116/116714/attachment_116714964",
      name: "CSE/EEE jobs in Bangladesh", 
      description: "Job opportunities for graduates" 
    },
    { 
      id: 4, 
      logo: "https://www.shutterstock.com/image-vector/code-logo-coder-company-260nw-1153170794.jpg",
      name: "JavaScript TypeScript Angular", 
      description: "For JS/TS/Angular developers" 
    },
    { 
      id: 5, 
      logo: "https://images-platform.99static.com//tdXRIbACDVGGQZFiGLA4UnES3lw=/247x247:1729x1729/fit-in/500x500/99designs-contests-attachments/79/79177/attachment_79177402",
      name: "All things JavaScript", 
      description: "Everything about JavaScript and TypeScript" 
    }
  ];

  return (
    <div className="max-w-md mt-3 mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Groups</h2>
      </div>

      <div className="divide-y divide-gray-100">
        {groups.map((group) => (
          <div key={group.id} className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150">
            <div className="flex items-start gap-3">
              {/* Group Logo/Photo */}
              <div className="relative h-10 w-10 rounded-md bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                {group.logo ? (
                  <Image 
                    src={group.logo}
                    alt={`${group.name} logo`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                ) : group.photo ? (
                  <Image 
                    src={group.photo} 
                    alt={group.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-600 font-medium">
                      {group.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Group details */}
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-900 truncate">
                  {group.name}
                </h3>
                {group.description && (
                  <p className="text-sm text-gray-500 mt-1 truncate">
                    {group.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsList;