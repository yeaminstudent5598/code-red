"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { Bookmark, MessageSquare, Settings, Home, Bell, Edit2, MapPin, Camera } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("posts");
  const [profile, setProfile] = useState({
    coverPicture: "",
    bio: "",
    about: "",
    location: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState([]);
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [totalBookmarks, setTotalBookmarks] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch profile data when component mounts
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile-update');
        const data = await response.json();
        if (data && Object.keys(data).length > 0) {
          setProfile({
            coverPicture: data.coverPicture || "",
            bio: data.bio || "",
            about: data.about || "",
            location: data.location || "",
          });
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const fetchBookmarkedQuestions = async () => {
    try {
      console.log('Fetching bookmarks...');
      const response = await fetch('/api/bookmarks');
      const bookmarks = await response.json();
      console.log('Received bookmarks:', bookmarks);
      
      const questionIds = bookmarks
        .filter(bookmark => bookmark.type === 'question')
        .map(bookmark => bookmark.questionId);
      console.log('Question IDs:', questionIds);

      if (questionIds.length > 0) {
        console.log('Fetching questions for IDs:', questionIds);
        const questionsResponse = await fetch(`/api/questions?ids=${questionIds.join(',')}`);
        const questions = await questionsResponse.json();
        console.log('Received questions:', questions);
        setBookmarkedQuestions(questions);
      } else {
        console.log('No bookmarked questions found');
        setBookmarkedQuestions([]);
      }
    } catch (error) {
      console.error('Error fetching bookmarked questions:', error);
    }
  };

  const fetchBookmarkedBlogs = async () => {
    try {
      console.log('Fetching bookmarked blogs...');
      const response = await fetch('/api/bookmarks');
      const bookmarks = await response.json();
      console.log('Received bookmarks:', bookmarks);
      
      const blogIds = bookmarks
        .filter(bookmark => bookmark.type === 'blog')
        .map(bookmark => bookmark.blogId);
      console.log('Blog IDs:', blogIds);

      if (blogIds.length > 0) {
        console.log('Fetching blogs for IDs:', blogIds);
        const blogsResponse = await fetch(`/api/blogs?ids=${blogIds.join(',')}`);
        const blogs = await blogsResponse.json();
        console.log('Received blogs:', blogs);
        setBookmarkedBlogs(blogs);
      } else {
        console.log('No bookmarked blogs found');
        setBookmarkedBlogs([]);
      }
    } catch (error) {
      console.error('Error fetching bookmarked blogs:', error);
    }
  };

  useEffect(() => {
    console.log('Profile page mounted, fetching bookmarks');
    fetchBookmarkedQuestions();
    fetchBookmarkedBlogs();
  }, []);

  // Add event listener for bookmark updates
  useEffect(() => {
    const handleBookmarkUpdate = () => {
      console.log('Bookmark update event received');
      fetchBookmarkedQuestions();
      fetchBookmarkedBlogs();
    };

    window.addEventListener('bookmark-updated', handleBookmarkUpdate);
    return () => {
      window.removeEventListener('bookmark-updated', handleBookmarkUpdate);
    };
  }, []);

  useEffect(() => {
    // Update total bookmarks count whenever bookmarked questions or blogs change
    setTotalBookmarks(bookmarkedQuestions.length + bookmarkedBlogs.length);
  }, [bookmarkedQuestions, bookmarkedBlogs]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', 'cover');

      // Upload file
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (uploadResponse.ok) {
        const { url } = await uploadResponse.json();
        // Ensure the URL is in the correct format for ImageBB
        const imageUrl = url.replace('https://ibb.co/', 'https://i.ibb.co/');
        setProfile({ ...profile, coverPicture: imageUrl });
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      console.log("Saving profile data:", profile);
      const response = await fetch('/api/profile-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
      if (response.ok) {
        console.log("Profile saved successfully");
        setIsEditing(false);
        // Fetch the updated profile data
        const updatedResponse = await fetch('/api/profile-update');
        const updatedData = await updatedResponse.json();
        if (updatedData) {
          setProfile({
            coverPicture: updatedData.coverPicture || "",
            bio: updatedData.bio || "",
            about: updatedData.about || "",
            location: updatedData.location || "",
          });
        }
      } else {
        console.error("Failed to save profile:", await response.text());
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Please sign in to view your profile</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed h-full">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={session.user?.image || "/assets/profile-pic.png"}
                alt={session.user?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {session.user?.name}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {session.user?.email}
              </p>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("posts")}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md ${
                activeTab === "posts"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <Home className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("questions")}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md ${
                activeTab === "questions"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Questions
            </button>
            <button
              onClick={() => setActiveTab("bookmarked-questions")}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md ${
                activeTab === "bookmarked-questions"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Bookmarked Questions
            </button>
            <button
              onClick={() => setActiveTab("bookmarked-blogs")}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md ${
                activeTab === "bookmarked-blogs"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Bookmarked Blogs
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Header */}
          <div className="relative mb-8">
            {/* Cover Picture */}
            <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative group">
              {profile.coverPicture ? (
                <div className="w-full h-full relative">
                  <Image
                    src={profile.coverPicture}
                    alt="Cover"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">Add cover picture</span>
                </div>
              )}
              {isEditing && (
                <div className="absolute top-2 right-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className={`bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      isUploading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Camera className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}
              {!isEditing && !profile.coverPicture && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-white dark:bg-gray-800 p-2 rounded-full shadow"
                  >
                    <Camera className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>

            {/* Profile Picture and Info */}
            <div className="flex items-end -mt-16 ml-8 mb-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <Image
                    src={session.user?.image || "/assets/profile-pic.png"}
                    alt={session.user?.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 p-2 rounded-full shadow">
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold text-blue-900 ">{session.user?.name}</h1>
                <p className="text-blue-600 ">{session.user?.email}</p>
              </div>
            </div>

            {/* Edit Profile Button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => {
                  if (isEditing) {
                    handleSaveProfile();
                  } else {
                    setIsEditing(true);
                  }
                }}
                className="bg-blue-600 text-blue px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                {isEditing ? 'Save Profile' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">About</h3>
              {isEditing ? (
                <textarea
                  value={profile.about}
                  onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                  className="w-full h-32 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-black"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{profile.about || 'No about information yet'}</p>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Bio</h3>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full h-32 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-black"
                  placeholder="Write a short bio..."
                />
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{profile.bio || 'No bio yet'}</p>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Location</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-black"
                  placeholder="Enter your location"
                />
              ) : (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{profile.location || 'No location set'}</span>
                </div>
              )}
            </div>
          </div>

          {/* Profile Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Total Posts</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Questions Asked</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bookmarks</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">{totalBookmarks}</p>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            {activeTab === "posts" && (
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Posts</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400">No posts yet</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "bookmarked-questions" && (
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Bookmarked Questions</h2>
                <div className="space-y-4">
                  {bookmarkedQuestions.length > 0 ? (
                    bookmarkedQuestions.map((question) => (
                      <div key={question._id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                              src={question.image || "/assets/profile-pic.png"}
                              alt={question.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {question.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Posted on {new Date(question.postedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            {question.title}
                          </h4>
                          <div 
                            className="text-gray-600 dark:text-gray-300 prose dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: question.content }}
                          />
                        </div>

                        {question.contentImage && question.contentImage.length > 0 && (
                          <div className="mb-4">
                            <img
                              src={question.contentImage[0]}
                              alt="Question content"
                              className="max-w-full h-auto rounded-lg"
                            />
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <span>{question.likes?.length || 0}</span>
                            <span>Likes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{question.dislikes?.length || 0}</span>
                            <span>Dislikes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{question.comments?.length || 0}</span>
                            <span>Comments</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="w-16 h-16 text-gray-400 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                          No Bookmarked Questions
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Questions you bookmark will appear here
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "bookmarked-blogs" && (
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Bookmarked Blogs</h2>
                <div className="space-y-4">
                  {bookmarkedBlogs.length > 0 ? (
                    bookmarkedBlogs.map((blog) => (
                      <div key={blog._id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                              src={blog.image || "/assets/profile-pic.png"}
                              alt={blog.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {blog.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Posted on {new Date(blog.postedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            {blog.title}
                          </h4>
                          <div 
                            className="text-gray-600 dark:text-gray-300 prose dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                          />
                        </div>

                        {blog.contentImage && blog.contentImage.length > 0 && (
                          <div className="mb-4">
                            <img
                              src={blog.contentImage[0]}
                              alt="Blog content"
                              className="max-w-full h-auto rounded-lg"
                            />
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <span>{blog.likes?.length || 0}</span>
                            <span>Likes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{blog.comments?.length || 0}</span>
                            <span>Comments</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="w-16 h-16 text-gray-400 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                          No Bookmarked Blogs
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Blogs you bookmark will appear here
                        </p>
                      </div>
                  </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "questions" && (
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Questions</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400">No questions yet</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}