/* eslint-disable @typescript-eslint/no-explicit-any */
import Recat from "react";
import { getBlogss } from "../service/getBlogs";
import MyServerComponent from "../ui/MyServerComponent";
import { cacheLife, cacheTag } from "next/cache";


const BlogsPage = async () => {
    // "use cache";      // UI level cache
    // cacheLife("hours")
    // cacheTag("posts")

    const blogs = await getBlogss()
    console.log(blogs);
    return (
        <div>Blogs Page
            {
                blogs.map((blog: any) => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </div>
                ))
            }
            <MyServerComponent />
        </div>
    )
}

export default BlogsPage