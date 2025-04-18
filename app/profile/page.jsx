"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { User, Bookmark, MessageSquare, Settings, Home, Bell, LogOut } from "lucide-react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("posts");

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
                src={session.user?.image || "/default-avatar.png"}
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
              onClick={() => setActiveTab("bookmarks")}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md ${
                activeTab === "bookmarks"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Bookmarks
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">
              <Bell className="w-4 h-4" />
              Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700">
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
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

            {activeTab === "bookmarks" && (
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Bookmarked Posts</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400">No bookmarks yet</p>
                  </div>
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