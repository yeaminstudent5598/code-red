"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function SocialLogin() {
  const route = useRouter();
  const session = useSession();
  const handleSocailLogin = async (providerName) => {
    await signIn(providerName);
  };
  useEffect(()=>{
    if(session?.status == "authenticated"){
        toast.success("Login successfully");
        route.push("/")
    }
  },[session.status])

  return (
    <button
      type="button"
      onClick={() => handleSocailLogin("google")}
      aria-label="Log in with Google"
      className="flex justify-around px-12 border-2 border-gray-300 border-dashed w-full rounded-md items-center py-2 cursor-pointer hover:bg-gray-200"
    >
      <Image
        src="/assets/google.png"
        alt="google"
        width={34}
        height={34}
      ></Image>
      <p>Sign in with google</p>
    </button>
  );
}
