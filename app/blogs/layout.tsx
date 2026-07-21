import React from 'react'

const BlogsLayout= ({
    children,
}:{children: React.ReactNode;}
) => {
  return (
    <div>Blogs Layout is special only for blogs Router or Nested Routes 
         Inside blogs folder
          {children}
         </div>
  )
}

export default BlogsLayout