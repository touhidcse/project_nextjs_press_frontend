import React from 'react'

const AuthLayout = ({
    children,
}:{children: React.ReactNode;}
) => {
  return (
    <div>Auth Layout is special only for auth Router or Nested Routes 
         Inside auth directory.
          {children}
         </div>
  )
}
 

export default AuthLayout