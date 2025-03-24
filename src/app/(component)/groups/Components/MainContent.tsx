export default function MainContent() {
  return (
    <div className="w-full md:w-2/4 lg:w-3/5 space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h1 className="text-xl font-bold mb-4">CSE/EEE Jobs in Bangladesh</h1>
        
        <div className="mb-6">
          <h2 className="font-semibold mb-2">CSE/EEE jobs in Bangladesh</h2>
          <p className="text-sm text-gray-500 mb-4">Public group</p>
          
          <div className="flex space-x-2 mb-4">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Start a public post
            </button>
            <button className="text-gray-500 px-4 py-2 rounded-full text-sm font-medium">
              Video
            </button>
            <button className="text-gray-500 px-4 py-2 rounded-full text-sm font-medium">
              Photo
            </button>
            <button className="text-gray-500 px-4 py-2 rounded-full text-sm font-medium">
              Poll
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Recommended</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3 mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium">Minhajul Ariefn -</p>
                <p className="text-sm text-gray-500">2nd Technical Support & SOA || Communication Specialist || Project ...</p>
                <p className="text-xs text-gray-500">In -</p>
              </div>
            </div>
            
            <p className="text-sm mb-2">
              Hello, I&apos;d like to invite you to join our LinkedIn group, SOA & Automation Jobs! It&apos;s a great platform for networking, finding job opportunities, and sharing insights in ...more
            </p>
            
            <div className="flex items-center text-xs text-gray-500 mt-2">
              <span>8,126 members</span>
              <span className="mx-2">•</span>
              <span>Including Ahammad Abdullah and 1 other connection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}