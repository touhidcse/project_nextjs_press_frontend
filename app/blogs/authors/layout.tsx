import React from 'react'

const AuthorsLayout = ({
    children,
}:{children: React.ReactNode;}
) => {
  return (
    <div>Authors Layout is special only for authors Router or Nested Routes 
         Inside authors folder
          {children}
         </div>
  )
}
 

export default AuthorsLayout