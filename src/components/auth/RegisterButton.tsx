"use client";
import { useRouter } from "next/navigation";

export default function LoginButton() {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => { router.push("/register") }} className="bg-green-500 py-1 px-4 rounded-2xl text-lg font-semibold cursor-pointer hover:ring-2 ring-blue-500 duration-200">Register</button>
        </div>
    );
}