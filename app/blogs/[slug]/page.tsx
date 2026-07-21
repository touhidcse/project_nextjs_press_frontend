import React from 'react'

const BlogsSulgPage = async ({params}: { params: Promise<{ slug: string }>}) => {

    const { slug } = await params
//   const post = await getPost(slug)
  return (
    <div>BlogsSulgPage : {slug}</div>
  )
}


export default BlogsSulgPage