import Link from "next/link";
import LikeButton from "./ui/LikeButton";

export default function Home() {
  console.log("Root Route");
  return (
    
   <div>
    Hellow nextJS
    Blogs: <Link href="/blogs/1">Blog Pages</Link>
    <LikeButton></LikeButton>
    
   </div>
  );
}
