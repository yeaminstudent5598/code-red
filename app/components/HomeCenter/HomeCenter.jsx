import React from 'react'
import PostInput from './components/PostInput'
import BlogBoxTable from '@/app/components/HomeCenter/components/BlogBox/BlogBoxTable/BlogBoxTable'
import axios from 'axios';

const fetchPostedData = async () => {
    try {
        const { data: postedData } = await axios.get(`${process.env.NEXTAUTH_URL}/api/blog`);
        // console.log(postedData, "posted data in HomeCenter");
        return postedData
    } catch (error) {
        console.error("Error fetching posts:", error);
        return []
    }
};

export default async function HomeCenter() {
    const cardData = await fetchPostedData()
    return (
        <div className="overflow-y-auto h-screen border-l-2 border-r-2 border-gray-500 p-4">
            <div className="flex flex-col items-center  min-h-screen">
                {/* Post Input Box */}
                <PostInput />
                {/* Post Card */}
                <BlogBoxTable cardData={cardData} />
            </div>
        </div>
    )
}
