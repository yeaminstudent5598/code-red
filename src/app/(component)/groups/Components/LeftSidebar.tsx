export default function LeftSidebar() {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h2 className="font-semibold">Sabbir Hosen</h2>
            <p className="text-xs text-gray-500">Joined group: Dec 2024</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-sm mb-2">Recent</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-blue-600">CSE/EEE jobs in Bangladesh</li>
            <li className="text-blue-600">JavaScript</li>
            <li className="text-blue-600">Mem Stack = MongoDb, Ex... ...</li>
            <li className="text-blue-600">JavaScript Typescript Angular ...</li>
            <li className="text-blue-600">All things Javascript: JS, TypeS...</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-sm mb-2">Groups</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-blue-600">CSE/EEE jobs in Bangladesh</li>
            <li className="text-blue-600">JavaScript</li>
            <li className="text-blue-600">Mem Stack =  MongoDb, Ex...</li>
            <li className="text-blue-600 flex items-center">
              Show more ▼
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-sm mb-2">Events</h3>
          <p className="text-blue-600 text-sm">Discover more</p>
        </div>
      </div>
    </div>
  )
}