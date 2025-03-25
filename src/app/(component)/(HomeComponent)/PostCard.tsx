// "use client";
import { ThumbsUp, MessageCircle, MoreHorizontal, Eye } from "lucide-react";
import Image from "next/image";
// import { data?.data } from "../../contactor";
// import TimeAgo from "react-timeago";
import { userInfo } from "../../contactor"
import axios from "axios";
// import getAllBlogs from '../../action/post/getAllBlogs'

export default async function PostCard() {
  const {data} = await axios("http://localhost:3000/api/blog")
  return (
    <div>
      {data?.map((post, index) => {
        return (
          (
            <div
              key={index}
              className="bg-white my-6 shadow-md rounded-lg p-4 w-full"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={post?.user_photo || "https://placehold.co/10x10"}
                    alt="User Photo"
                    width={38}
                    height={38}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-black">{post?.user_name}</p>
                    <p className="text-sm text-gray-500">
                      {post?.title}
                    </p>
                  </div>
                </div>
                <MoreHorizontal className="text-gray-500 cursor-pointer" />
              </div>
              <p className="mt-3 text-gray-800">
                {post?.description}
              </p>
              {
                post?.image && <div className="mt-4">
                  <Image
                    src={post?.image}
                    alt="Post Image"
                    height={500}
                    width={300}
                    className="w-full rounded-lg"
                  />
                </div>
              }
              <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-5 h-5 text-blue-500" />
                  <span>Liked ({post?.like})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Comments ({post?.comment})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>View ({post?.view})</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-3 border-t pt-3">
                <Image
                  src={userInfo?.user_photo}
                  alt="Profile Picture"
                  width={38}
                  height={38}
                  className="rounded-full"
                />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 text-gray-800 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )
        )
      })}
    </div>
  );
}
