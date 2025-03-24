"use client";
import { useRouter } from "next/navigation";
// import { SignUpUser } from "@/app/action/register/signup";
// import { SignUpUser } from "@/app/action/register/signup";
import {SignUpUser} from "../../../../action/register/signup"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
function RegistrationForm() {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewSrc, setPreviewSrc] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const dropzone = dropzoneRef.current;
    const fileInput = fileInputRef.current;

    if (!dropzone || !fileInput) return;

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      dropzone.classList.add("border-indigo-600");
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dropzone.classList.remove("border-indigo-600");
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      dropzone.classList.remove("border-indigo-600");
      if (e.dataTransfer.files.length > 0) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    };

    const handleFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        handleFileSelect(target.files[0]);
      }
    };

    const handleFileSelect = (file: File) => {
      if (file && file.type.startsWith("image/")) {
        displayPreview(file);
        uploadImage(file);
      } else {
        toast.error("Please upload a valid image file (PNG, JPG, or GIF).");
      }
    };

    const displayPreview = (file: File) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreview(reader.result as string);
      };
    };

    dropzone.addEventListener("dragover", handleDragOver);
    dropzone.addEventListener("dragleave", handleDragLeave);
    dropzone.addEventListener("drop", handleDrop);
    fileInput.addEventListener("change", handleFileChange);

    return () => {
      dropzone.removeEventListener("dragover", handleDragOver);
      dropzone.removeEventListener("dragleave", handleDragLeave);
      dropzone.removeEventListener("drop", handleDrop);
      fileInput.removeEventListener("change", handleFileChange);
    };
  }, []);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=57138238c8443d7277af5c2feeb31321",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const uploadedUrl = response.data.data.url;

      const shortenedUrl = await shortenUrl(uploadedUrl);

      setPreviewSrc(shortenedUrl);
      return shortenedUrl;
    } catch (error) {
      console.error("Image upload failed", error);
      toast.error("Image upload failed.");
      return null;
    }
  };

  const shortenUrl = async (longUrl: string) => {
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        { long_url: longUrl },
        {
          headers: {
            Authorization: `Bearer YOUR_BITLY_ACCESS_TOKEN`, 
          },
        }
      );
      return response.data.link;
    } catch (error) {
      console.error("URL shortening failed", error);
      return longUrl;
    }
  };

  const [errormassage, setErrorMassage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const password = e.target.password.value;
    console.log(password, "Password");
    if (password.length < 7) {
      setErrorMassage("Must be at least 6 characters");
      return;
    }

    const uperCasePassword = /^(?=.*[A-Z]).+$/;
    if (!uperCasePassword.test(password)) {
      setErrorMassage("Must contain at least 1 in Capital Case");
      return;
    }

    const lowerCasePassword = /^(?=.*[a-z]).+$/;
    if (!lowerCasePassword.test(password)) {
      setErrorMassage("Must contain at least 1 in lower case");
      return;
    }
    const userInfo = {
      name: e.target.name.value,
      username: e.target.username.value,
      user_photo: previewSrc,
      email: e.target.email.value,
      password: password,
    };
    console.log(userInfo, "user info")
    const data = await SignUpUser(userInfo);
    if (data?.success) {
      toast.success(`${data?.message}`);
      route.push("/signin")
    } else {
      toast.error(`${data?.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="space-y-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              id="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div className="mt-4 flex justify-between">
              <div
                ref={dropzoneRef}
                className="relative border-2 border-gray-300 border-dashed rounded-lg p-6"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  required
                  className="absolute inset-0 w-full h-full opacity-0 z-50"
                  accept="image/png, image/jpeg, image/gif"
                />
                <div className="text-center">
                  <Image
                    className="mx-auto h-12 w-12"
                    src="https://www.svgrepo.com/show/357902/image-upload.svg"
                    alt="Upload icon"
                    width={500}
                    height={500}
                  />

                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer"
                    >
                      <span>Update photo</span>
                      <span className="text-indigo-600"> or browse</span>
                    </label>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              <div className="border-2 h-36 overflow-hidden border-gray-300 border-dashed px-2 rounded-lg w-40 flex items-center justify-center p-2 ml-2">
                {previewSrc && (
                  <Image
                    src={previewSrc}
                    alt="Preview"
                    width={500}
                    height={500}
                    className="mx-auto "
                  />
                )}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
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
                required
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
            {errormassage && <p className="text-red-700">{errormassage}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md cursor-pointer hover:bg-violet-700 bg-violet-600 text-gray-50"
            >
              Sign Up
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

export default RegistrationForm;
