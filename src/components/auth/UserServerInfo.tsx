import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"


export default async function UserServerInfo() {
    const session = await getServerSession(authOptions)
    const user = session?.user;
    if (user) {
        return user;
    }
    return null;
}