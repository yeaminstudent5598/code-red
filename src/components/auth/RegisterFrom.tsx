"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import register from '@/image/auth/signup.jpg'
import handleSubmit from "./utils/signUp";

export default function RegisterFrom() {
    const router = useRouter();

    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await handleSubmit(e);
        if (!result) {
            console.error("Failed to handle submit");
            return;
        }
        const { email, password } = result;
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const massage = await res.json();
        alert(massage.message);
        // router.push("/");

        if (res.status === 200) {
            console.log("Registration successful");
            // e.currentTarget.reset();
        } else {
            console.log(res);
        }
    }

    return (
        <>
            <div className="flex justify-center mt-16">
                <div style={{ minWidth: "30%" }}>
                    <div className="flex min-h-full shadow-lg flex-1 flex-col justify-center p-6 lg:px-8 bg-white">

                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <div className="flex justify-center">
                                <Image src={register} height={120} width={120} alt="fig" />
                            </div>
                            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form onSubmit={signUp} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Sign up
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?{" "}
                                <span
                                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                                    onClick={() => { router.push("/signup") }}>
                                    Start a 14 day free trial
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
