import Link from 'next/link'
import React from 'react'


export default function HomeLeft() {
  return (
    <div className="hidden md:block sticky top-0 h-screen ">
        <Link href="/community"></Link>
      </div>
  )
}
