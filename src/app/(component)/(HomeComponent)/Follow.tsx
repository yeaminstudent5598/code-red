import Image from "next/image";
import {users} from "../../contactor/index"
function Follow() {
  return (
    <div className="lg:px-6 rounded-lg mb-8 bg-white">
      <div className="">
        <h2 className="text-lg pt-3 font-semibold text-black mb-4">Who to follow</h2>
        <ul className="space-y-4">
          {users.slice(0,4).map((user, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative rounded-full overflow-hidden">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={38}
                    height={38}
                    className="rounded-full w-10 h-10 object-cover border-2 overflow-hidden border-blue-500"
                    
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
              <button
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  user.isFollowing
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                } hover:bg-blue-700 transition`}
              >
                {user.isFollowing ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full mb-7 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 rounded-lg transition">
          View more
        </button>
      </div>
    </div>
  );
}

export default Follow;
