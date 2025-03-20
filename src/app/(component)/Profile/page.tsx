"use client";
import { useState } from 'react';

interface ProfileData {
  name: string;
  username: string;
  bio: string;
  followers: number;
  following: number;
  skills: string[];
  githubLink: string;
  linkedinLink: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false); // State for following button
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "SÉRAPHIN BRICE",
    username: "@seraphinbrice",
    bio: "I create premium paid and free graphic resources 😎",
    followers: 45187,
    following: 2563,
    skills: ["Graphic Design", "Illustration", "Web Design"],
    githubLink: "https://github.com/seraphinbrice",
    linkedinLink: "https://linkedin.com/in/seraphinbrice",
  });

  const handleEditToggle = () => setIsEditing(!isEditing);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Save updated profile data (API call or local state update)
    setIsEditing(false);
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] to-[#16213E] flex justify-center items-center">
      <div className="w-[500px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#202040] to-[#3E3E6E] shadow-2xl">
        
        {/* Header Section */}
        <div className="relative h-52 bg-gradient-to-r from-black to-[#3E3E6E]">
          <h1 className="absolute top-16 left-12 text-4xl font-bold text-white">{profileData.name}</h1>
          <div className="absolute top-6 right-6">
            <span className="w-6 h-6 block rounded-full bg-white shadow-md" alt="French flag">
              🇫🇷
            </span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative -mt-14 flex justify-center">
          <div className="w-28 h-28 rounded-full border-4 border-[#3E3E6E] flex justify-center items-center text-white text-2xl font-semibold bg-[#1A1A2E]">
            {profileData.name.charAt(0)} <span className="text-gray-400">{profileData.name.charAt(1)}</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="text-center mt-4">
          {isEditing ? (
            <textarea
              value={profileData.bio}
              name="bio"
              onChange={handleChange}
              className="w-full p-2 mt-2 text-gray-800"
              maxLength={150} // Limit the bio to 150 characters
            />
          ) : (
            <p className="text-white text-lg font-semibold">{profileData.bio}</p>
          )}
          <p className="text-gray-400">{profileData.username}</p>

          <div className="text-gray-300 mt-4">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={profileData.githubLink}
                  name="githubLink"
                  onChange={handleChange}
                  placeholder="GitHub Link"
                  className="w-full p-2 mt-2 text-gray-800"
                />
                <input
                  type="text"
                  value={profileData.linkedinLink}
                  name="linkedinLink"
                  onChange={handleChange}
                  placeholder="LinkedIn Link"
                  className="w-full p-2 mt-2 text-gray-800"
                />
              </>
            ) : (
              <div>
                <p>GitHub: <a href={profileData.githubLink} target="_blank" className="text-white">{profileData.githubLink}</a></p>
                <p>LinkedIn: <a href={profileData.linkedinLink} target="_blank" className="text-white">{profileData.linkedinLink}</a></p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={handleEditToggle} className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">{isEditing ? 'Save' : 'Edit'}</span>
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            ✉️
          </button>
          {!isEditing && (
            <button onClick={handleFollowToggle} className={`bg-pink-500 text-white font-semibold px-6 py-2 rounded-full ${isFollowing ? 'bg-green-500' : ''}`}>
              {isFollowing ? 'Following' : 'Follow me'}
            </button>
          )}
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mt-6 mb-6 text-gray-400">
          <p className="mr-4">{profileData.followers} followers</p>
          <p>{profileData.following} following</p>
        </div>

        {/* Activity History Section */}
        <div className="mt-8 text-white text-center">
          <h2 className="text-xl font-semibold mb-4">Activity History</h2>
          <div className="text-gray-300">
            <p className="font-semibold">Recent Blog Posts:</p>
            {/* Loop through user's blog posts */}
            <ul className="mt-2">
              <li>Blog Post 1</li>
              <li>Blog Post 2</li>
              <li>Blog Post 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
