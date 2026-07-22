"use client";
import React from 'react'


const DislikeButton = ({blogSlug}:{blogSlug:string}) => {
  return (
    <button onClick={()=>{
        console.log("Dislike Button clicked for blog:",blogSlug);
    }}>Dislike {blogSlug}</button>
  )
}

export default DislikeButton