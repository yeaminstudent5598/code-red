export default function RightSidebar() {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-medium mb-4">Invite connections</h3>
        <button className="text-blue-600 text-sm font-medium w-full text-left">
          Show all →
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-medium mb-4">Admins</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-medium">Shantonu Sarker</p>
              <p className="text-xs text-gray-500">3rd Owner</p>
              <p className="text-xs text-gray-500">SDET | Performance Engineer | Java Developer | DevOps Practitioner</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-medium">Sabila Enun (She/Her)</p>
              <p className="text-xs text-gray-500">2nd Manager</p>
              <p className="text-xs text-gray-500">sabilaenun.com | entrepreneur, f/oss practitioner, tech enthusiast, ICTAD, campaigner for women empowerment, doer</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-medium">Mahmudul Haque Azad</p>
              <p className="text-xs text-gray-500">3rd Manager</p>
              <p className="text-xs text-gray-500">CEO @ Craftsmen | Helping Businesses With Skilled Software Engineers | Janitor of Excellence</p>
            </div>
          </div>
          
          <button className="text-blue-600 text-sm font-medium w-full text-left">
            Show more ▼
          </button>
        </div>
      </div>
    </div>
  )
}