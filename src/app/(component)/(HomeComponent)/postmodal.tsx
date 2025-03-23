"use client";
import axios from "axios";
import { Image as ImageIcon, Video, Filter, CircleX } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function ModalofPost() {
  const { data } = useSession();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!data?.user?.email){
        return
      }else{
        const response = await axios.get(
          `http://localhost:3000/api/user/${data.user.email}`
        );
        setUserInfo(response.data);
      }
    };
    fetchUserInfo();
  }, [data?.user?.email]);

  const dropzoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

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
        displayPreview(e.dataTransfer.files[0]);
      }
    };

    const handleFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        displayPreview(target.files[0]);
      }
    };

    const displayPreview = (file: File) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewSrc(reader.result as string);
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

  const handlePostSubmit = async(e)=>{
    e.preventDefault()
    console.log("hellowejwj------------>")
    const decription = e.target.decription.value
    const blogInfo = {
      email: userInfo?.email,
      decription,
      image: previewSrc
    }
    console.log(blogInfo)
    const {data} = await axios.post("http://localhost:3000/api/blog", blogInfo)
    if(data?.acknowledged){
      toast.success("post publish successfully")
      document.getElementById("my_modal_4")?.close();
    }else{
      toast.error("Error")
    }
  }


  return (
    <div className="postSection w-full p-2 rounded-xl">
      <div onClick={() => document.getElementById("my_modal_4")?.showModal()}>
        <form className="flex items-center space-x-3">
          <Image
            src={
              userInfo?.user_photo
                ? `${userInfo?.user_photo}`
                : "https://placehold.co/10x10"
            }
            alt="User"
            width={38}
            height={38}
            className="rounded-full overflow-hidden w-10 h-10 object-contain ring-2 ring-offset-1 bg-gray-500 ring-violet-600 ring-offset-gray-100"
          />
          <input
            type="text"
            name="post"
            placeholder="Share your thoughts..."
            className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <button
            type="button"
            className="btn bg-blue-500 text-white font-semibold px-3 py-1 cursor-pointer rounded-md"
          >
            Post
          </button>
        </form>

        <div className="flex justify-around items-center mt-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <ImageIcon className="w-5 h-5 text-green-500" />
            <span>Blog</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <Video className="w-5 h-5 text-blue-500" />
            <span>Question</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box bg-white w-11/12 max-w-3xl">
          <form onSubmit={handlePostSubmit} className="px-3 mx-auto py-4">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 ">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full flex items-center gap-x-4">
                    <Image
                      src={
                        userInfo?.user_photo
                          ? `${userInfo?.user_photo}`
                          : "https://placehold.co/10x10"
                      }
                      alt="User"
                      width={38}
                      height={38}
                      className="rounded-full overflow-hidden w-10 h-10 object-contain ring-2 ring-offset-1 bg-gray-500 ring-violet-600 ring-offset-gray-100"
                    />
                    <p className="text-black">{userInfo?.name}</p>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="decription"
                        name="decription"
                        rows={3}
                        placeholder="Description"
                        className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>

                  {previewSrc ? (
                    <>
                    <div className="col-span-full relative"> 
                    {previewSrc && (
                          <Image
                            src={previewSrc}
                            alt="Preview"
                            width={500}
                            height={500}
                            className="mx-auto w-full rounded-md"
                          />
                        )}
                    <CircleX onClick={()=>setPreviewSrc("")} className="absolute top-0 right-0 text-red-600 shadow-2xl"/>
                    </div>
                    </>
                  ) : (
                    <>
                      <div className="col-span-full">
                    <div className="flex justify-between">
                      <div
                        ref={dropzoneRef}
                        className="relative w-full h-60 border-2 border-gray-300 border-dashed rounded-lg p-6"
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 w-full h-full opacity-0 z-50"
                          accept="image/png, image/jpeg, image/gif"
                        />
                        <div className="text-center mt-9">
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
                              <span className="cursor-pointer">Update photo</span>
                              <span className="text-indigo-600">
                                {" "}
                                or browse
                              </span>
                            </label>
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
            <div className="modal-action">
            <form method="dialog">
              <button type="submit" className="btn">Cencel</button>
            </form>
          </div>
          <button type="submit" className="btn">Post</button>
            </div>
          </form>
          
        </div>
      </dialog>
    </div>
  );
}
