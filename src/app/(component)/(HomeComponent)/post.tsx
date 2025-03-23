// import {BlogsPost} from "@/app/action/post/blogs"
import ModalofPost from "./postmodal";

export default function PostBox() {
  // const postSubmit = async(e) =>{
  //     e.preventDefault()
  //     const post = e.target.post.value
  //     await BlogsPost(post)
  //     console.log("this is blog")
  // }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <ModalofPost></ModalofPost>
    </div>
  );
}
