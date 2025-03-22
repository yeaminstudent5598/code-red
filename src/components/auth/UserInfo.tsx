"use client";
 
import { useSession } from "next-auth/react"
    
export default function UserInfo() {
    const session = useSession();
    return (
        <div className="text-black border-2 border-black p-3">
            User In The Client -
            <p>{JSON.stringify(session)}</p>
        </div>
    )
}