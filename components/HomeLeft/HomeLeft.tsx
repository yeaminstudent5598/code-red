import Link from 'next/link'
import React from 'react'


export default function HomeLeft() {
  return (
    <div className="hidden md:block sticky top-0 h-screen btn bg-red-400">
      <Link href="/community ">Community</Link>
    </div>
  )
}
