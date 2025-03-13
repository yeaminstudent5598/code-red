import Image from 'next/image';
export default function ProfileCard() {
  return (
    <div className=" bg-white overflow-hidden">
      <Image src="https://i.ibb.co.com/fYnBN7F1/maharazbanner.png" alt="User Banner" className='object-cover' width={400} height={200}  />

      <div className="flex justify-center -mt-12">
        <Image
          src="/assets/logo.svg" 
          width={96}
          height={96}
          className="rounded-full border-4 border-white"
          alt="Profile picture"
        />
      </div>

      <div className="text-center px-3 pb-6">
        <h3 className="text-lg font-bold text-gray-900">Sam Lanson</h3>
        <p className="text-sm text-gray-500">Web Developer at Stackbros</p>
        <p className="mt-2 text-gray-600 text-sm">
          I'd love to change the world,<br />but they won’t give me the source code.
        </p>
      </div>

      <div className="flex justify-around border-t border-gray-200 p-4 text-center text-sm text-gray-600">
        <div>
          <span className="block text-lg font-bold text-gray-900">256</span>
          <span>Post</span>
        </div>
        <div>
          <span className="block text-lg font-bold text-gray-900">2.5K</span>
          <span>Followers</span>
        </div>
        <div>
          <span className="block text-lg font-bold text-gray-900">365</span>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}
