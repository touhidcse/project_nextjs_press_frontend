import DislikeButton from '@/app/ui/DislikeButton'
import React from 'react'

const BlogsSulgPage = async ({params}: { params: Promise<{ slug: string }>}) => {

    const { slug } = await params
//   const post = await getPost(slug)
  return (
    <div>BlogsSulgPage : {slug}
    <DislikeButton blogSlug={slug}/>
    </div>
  )
}


export default BlogsSulgPage