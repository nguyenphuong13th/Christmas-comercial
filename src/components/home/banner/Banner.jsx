import React from 'react'
import { banner } from 'components/assets/data/data'
export const Banner = () => {

    const bannerLists = banner.map((bannerLists)=>(
        <div className="post" key={bannerLists.id}>
            <div className="content">
                <div className="img">
                    <img src={require("components/assets"+bannerLists.cover)} alt="" />
                </div>
                <div className="text">
                    <h2>{bannerLists.title1}</h2>
                    <h2>{bannerLists.title2}</h2>
                    <p>{bannerLists.desc}</p>
                    <div className="button">SHOP NOW</div>
                </div>
            </div>
        </div>
    ))
  return (
    <>
        <section className="product">
            <div className="posts">
                {bannerLists}
            </div>
        </section>
    </>
  )
}
