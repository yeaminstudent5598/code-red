// import RegisterFrom from "@/components/auth/RegisterFrom";

import SignInForm from "./components/SignInForm";
import SocialLogin from "./components/SocialLogin";

// import SignInForm from "./components/SignInForm";

function SignInPage() {
  return (
    <div className="py-6">
      <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-4 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <SignInForm></SignInForm>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
        <SocialLogin></SocialLogin>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
