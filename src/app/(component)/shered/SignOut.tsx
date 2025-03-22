"use client"

import { signOut } from "next-auth/react"

function SignOut() {
  return (
    <div>
        <button className="btn" onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default SignOut