import Recat from "react";

const BlogsPage = async ()=>{
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    const postData= await posts.json()
    console.log(postData);
    return (
        <div>AuthorsPage</div>
    )
}

export default BlogsPage