"use client";
import { useRouter } from "next/navigation";

export default function LoginButton() {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => { router.push("/register") }} className="bg-primary-green py-1 px-4 rounded-2xl text-lg font-semibold cursor-pointer hover:ring-2 ring-primary-blue duration-200">Register</button>
        </div>
    );
}