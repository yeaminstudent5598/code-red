import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"


export default async function UserInfo() {
    const session = await getServerSession(authOptions)
    return (
        <div className="text-black border-2 border-black p-3">
            User In The Server -
            <p>{JSON.stringify(session)}</p>
        </div>
    )
}