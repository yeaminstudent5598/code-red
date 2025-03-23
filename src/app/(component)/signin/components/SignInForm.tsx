"use client";

// import { SignUpUser } from "@/app/action/register/signup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
    const route = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    const response = await signIn("credentials", { email, password, redirect:false });
    console.log(response)
    if(response?.ok){
      toast.success("Login successfully");
      route.push("/")
    }else{
      toast.error("Invaild Input");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="space-y-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 cursor-pointer top-[35%]"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 cursor-pointer top-[35%]"
                />
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md cursor-pointer hover:bg-violet-700 bg-violet-600 text-gray-50"
            >
              Sign In
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-600"
            >
              Sign in
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
