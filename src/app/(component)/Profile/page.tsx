
"use client";
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Edit2, Check, MapPin } from 'lucide-react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Image from 'next/image';


interface ProfileData {
  name: string;
  username: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  skills: string[];
  githubLink: string;
  linkedinLink: string;
}

function Profile() {
    const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
    const [userInfo, setUserInfo] = useState([]);

 useEffect(() => {
    const fetchUserInfo = async () => {
      if (!session?.user?.email) {
        return;
      } else {
        const response = await axios.get(
          `http://localhost:3000/api/user/${session.user.email}`
        );
        setUserInfo(response.data);
      }
      // console.log(response.data)
    };
    fetchUserInfo();
  }, [session?.user?.email]);

  console.log(userInfo)




  const [profileData, setProfileData] = useState<ProfileData>({
    name: "SÉRAPHIN BRICE",
    username: "@seraphinbrice",
    bio: "I create premium paid and free graphic resources 😎",
    location: "Paris, France",
    followers: 45187,
    following: 2563,
    skills: ["Graphic Design", "Illustration", "Web Design", "UI/UX", "Branding"],
    githubLink: "https://github.com/seraphinbrice",
    linkedinLink: "https://linkedin.com/in/seraphinbrice",
  });

  const handleEditToggle = () => setIsEditing(!isEditing);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Banner */}
        <div className="h-60 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white"></div>
        </div>

        {/* Profile Content */}
        <div className="relative px-8 -mt-32">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-40 h-40 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center">
            <Image
      src={userInfo?.user_photo}
      width={500}
      height={500}
      alt="Picture of the author"
    />
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-6 flex flex-wrap items-start justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold text-gray-900">{session?.user?.name}</h1>
                
              </div>
              <p className="text-gray-600 mt-1">{userInfo?.username}</p>
              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <MapPin size={16} />
                <span>{profileData.location}</span>
              </div>
              
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  name="bio"
                  onChange={handleChange}
                  className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              ) : (
                <p className="mt-4 text-gray-700 text-lg">{profileData.bio}</p>
              )}
            </div>

            <div className="flex gap-3 mt-4 sm:mt-0">
              <button
                onClick={handleEditToggle}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                title={isEditing ? "Save" : "Edit Profile"}
              >
                {isEditing ? <Check className="w-5 h-5 text-gray-600" /> : <Edit2 className="w-5 h-5 text-gray-600" />}
              </button>
              <button
                onClick={handleFollowToggle}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  isFollowing
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-6 pb-6 border-b">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{profileData.followers.toLocaleString()}</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{profileData.following.toLocaleString()}</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>

          {/* Skills */}
          <div className="py-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profileData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="py-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h2>
            <div className="flex gap-4">
              <a
                href={profileData.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;