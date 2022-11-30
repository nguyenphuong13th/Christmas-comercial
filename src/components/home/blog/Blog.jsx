import React from 'react'
import Heading from 'components/common/Heading'
import { blog } from 'components/assets/data/data'
export const Blog = () => {
    const blogList = blog.slice(0,3).map((blogListSlice)=>
        <div className="post">
            <div className="content">
                <div className="img">
                    <img src={require("components/assets"+blogListSlice.cover)} alt="" />
                </div>
                <div className="text">
                    <button className="button">
                       {blogListSlice.category}
                    </button>
                    <p>
                        Post Date : <span>{blogListSlice.date}</span>
                    </p>
                    <h4>{blogListSlice.title.slice(0,35)}...</h4>
                </div>
            </div>

        </div>
    )
  return (
    <>
        <section className="blog">
            <Heading title="Lastest Blog Post" desc="Check out our lastest marketplace news"/>
            <div className="posts">
                {blogList}
            </div>
        </section>
    </>
  )
}
