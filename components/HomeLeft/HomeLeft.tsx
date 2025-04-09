import Link from 'next/link'
import React from 'react'

export default function HomeLeft() {
  return (
    <div className="hidden items-center text-center md:block sticky top-0 h-screen ">
      <Link href="/create-group" passHref> <button className="relative px-14 py-3 text-[#00f5ff] bg-[#0f0f0f] border border-[#00f5ff] rounded-md font-bold tracking-wider shadow-[0_0_10px_#00f5ff] hover:bg-[#00f5ff] hover:text-black transition-all duration-300 uppercase">
  <span className="z-10 relative">Create a Group</span>
  <span className="absolute inset-0 bg-[#00f5ff] opacity-10 blur-md"></span>
</button>
</Link>
      </div>
  )
}
