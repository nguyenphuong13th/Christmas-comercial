import React from 'react'
import { hero } from '../../assets/data/data'

export const ShopCard = ()=> {
    const heroList = hero.map((items)=>(
        <div className="card" key={items.id}>
            <div className="left">
                <img src={require("components/assets"+items.cover)} alt="" />
            </div>

            <div className="right">
                <h4>{items.name}</h4>
                <p>{items.items} items</p>
            </div>
        </div>
    ))
  return (
    <>

        <section className="cards">
            {heroList}
        </section>
        <h1>{hero.cover}</h1>
    </>
  )
}
