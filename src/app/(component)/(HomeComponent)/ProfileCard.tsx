import Image from 'next/image';
import { userInfo } from "../../contactor";
export default function ProfileCard() {
  return (
    <div className=" bg-white overflow-hidden">
      <Image src={userInfo?.user_banner} alt="User Banner" className='object-cover' width={400} height={200}  />

      <div className="flex justify-center -mt-12">
        <Image
          src={userInfo?.user_photo}
          width={96}
          height={96}
          className="rounded-full w-32 h-32 object-fill border-4 border-white"
          alt="Profile picture"
        />
      </div>

      <div className="text-center px-3 pb-6">
        <h3 className="text-lg font-bold text-gray-900">{userInfo?.username}</h3>
        <p className="text-sm text-gray-500">{userInfo?.title}</p>
        <p className="mt-2 text-gray-600 text-sm">
          {userInfo?.bio}
        </p>
      </div>

      <div className="flex justify-around border-t border-gray-200 p-4 text-center text-sm text-gray-600">
        <div>
          <span className="block text-lg font-bold text-gray-900">{userInfo?.total_post}</span>
          <span>Post</span>
        </div>
        <div>
          <span className="block text-lg font-bold text-gray-900">{userInfo?.follower}</span>
          <span>Followers</span>
        </div>
        <div>
          <span className="block text-lg font-bold text-gray-900">{userInfo?.following}</span>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}
