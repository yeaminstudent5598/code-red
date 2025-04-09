"use client";

export default function CreateGroup() {
  return (
    <div className="max-w-xl mx-auto pt-10 bg-[#0f0f0f] shadow-[0_0_20px_#00f5ff] rounded-xl p-6 border border-[#00f5ff] text-[#00f5ff] font-mono">
      <h2 className="text-3xl font-bold mb-6 text-center neon-text">📘 Create a Group</h2>

      <form className="space-y-5">
        {/* Group Name */}
        <div>
          <label className="block text-sm mb-1">Group Name</label>
          <input
            type="text"
            placeholder="Enter group name"
            className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#00f5ff] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f5ff] placeholder:text-[#8dfcff]"
          />
        </div>

        {/* Group Description */}
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            placeholder="Write something about your group"
            rows={3}
            className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#00f5ff] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f5ff] placeholder:text-[#8dfcff]"
          ></textarea>
        </div>

        {/* Privacy Options */}
        <div>
          <label className="block text-sm mb-1">Privacy</label>
          <select className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#00f5ff] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f5ff]">
            <option value="public" className="bg-black">Public</option>
            <option value="private" className="bg-black">Private</option>
          </select>
        </div>

        {/* Cover Photo */}
        <div>
          <label className="block text-sm mb-1">Cover Photo</label>
          <input
            type="file"
            className="w-full file:px-4 file:py-2 file:border file:border-[#00f5ff] file:rounded-md file:bg-[#1a1a1a] file:text-[#00f5ff] text-white"
          />
        </div>

        {/* Create Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-[#00f5ff] text-black font-bold rounded-md shadow-[0_0_10px_#00f5ff] hover:bg-[#02d7e4] transition-all duration-300 uppercase tracking-widest"
          >
            🚀 Create Group
          </button>
        </div>
      </form>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff;
        }
      `}</style>
    </div>
  );
}
