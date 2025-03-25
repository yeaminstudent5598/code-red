'use client';
import { useState } from 'react';
import LeftSidebar from './Components/LeftSidebar';
import MainContent from './Components/MainContent';
import RightSidebar from './Components/RightSidebar';

export default function GroupPage() {
  const [showSidebars, setShowSidebars] = useState(false);

  return (
    <div className="h-full min-h-screen">
      {/* Mobile Toggle Button - Only for small screens */}
      <div className="md:hidden sticky top-0 z-10 bg-white shadow-sm p-2">
        <button
          onClick={() => setShowSidebars(!showSidebars)}
          className="w-full px-3 py-2 text-blue-600 rounded-md font-medium flex items-center justify-center gap-2 border border-gray-300"
        >
          {showSidebars ? (
            <>
              <span>Show Less</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </>
          ) : (
            <>
              <span>See More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Layout for different screen sizes */}
      <div className="">
        {/* Large Screens: All three sections */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4">
          <div className="col-span-1"><LeftSidebar /></div>
          <div className="col-span-2"><MainContent /></div>
          <div className="col-span-1"><RightSidebar /></div>
        </div>

        {/* Medium Screens: Left Sidebar + Main Content */}
        <div className="hidden md:flex lg:hidden gap-4">
          <div className="w-1/4"><LeftSidebar /></div>
          <div className="w-3/4"><MainContent /></div>
        </div>

        {/* Small Screens: Toggle Sidebars */}
        <div className="md:hidden">
          {showSidebars ? (
            <div className="flex flex-col gap-4">
              <LeftSidebar />
              <RightSidebar />
              <MainContent />
            </div>
          ) : (
            <MainContent />
          )}
        </div>
      </div>
    </div>
  );
}
