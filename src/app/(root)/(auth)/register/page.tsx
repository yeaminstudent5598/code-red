import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";
import SocialLogin from "@/app/(component)/signin/components/SocialLogin";

function page() {
  return (
    <div className="py-6">
      <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-4 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign up to your account
          </p>
        </div>
        <RegistrationForm></RegistrationForm>
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
      </div>
      {/* <RegisterFrom /> */}
    </div>
  );
}

export default page;
