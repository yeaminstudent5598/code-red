"use client";
import { signIn } from "next-auth/react";
 
export default function LoginButton() {
  return (
    <div>
      <button onClick={() => signIn()} className="bg-green-500 py-1 px-4 rounded-2xl text-lg font-semibold cursor-pointer hover:ring-2 ring-blue-500 duration-200">Sign in</button>
    </div>
  );
}
